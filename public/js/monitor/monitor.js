( function(doc){

  'use strict';

  var pollID = $('#poll').attr('data-id');
    
  //kill script if poll is not found...  
  if ( !pollID ) return;

  var config = (function(){
    var config = Cookies.getJSON('config');

    if ( !config ) {
      Cookies.set('config',{
        chartType:'bar',
        chartBackground:'#ffffff'
      });

      config = Cookies.getJSON('config')
    }

    config.saveConfig = function() {
      var
        cookieObj = {},
        keys      = Utilities.keys(this),
        len       = keys.length,
        i         = 0;

      for ( ; i < len ; i++ ) {
        if ( this.hasOwnProperty(keys[i]) && typeof this[keys[i]] !== 'function' ) {
          cookieObj[keys[i]] = this[keys[i]];
        }
      }

      Cookies.set('config',cookieObj);
    }

    return config;
  }());

  var initChoicesData = function(poll) {
    var
      output = {},
      sum    = 0,
      i      = 0,
      len    = poll.Choices.length;


    for ( ; i < len ; i++ ) {
      sum += poll.Choices[i].number_of_votes;
      output[poll.Choices[i].id_choice] = poll.Choices[i];
    }

    output.sum = sum;
    choicesData = output;
  }

  var
    $chartBackground = $('#chartBackground'),
    $colorPicker     = $('#colorPicker'),
    $msgBox          = $('#msgBox'),
    $btnSendMsg      = $('#btnSendMsg'),
    $msgList         = $('#msgList'),
    $chartType       = $('#chartType'),
    $hideShowChat    = $('#hideChat'),
    $chatBox         = $('.chatbox'),
    $chatForm        = $('#chatForm'),
    $numberOfVotes   = $('#numberOfVotesSpan'),
    socket           = io();

  var chartInfo = {
    ctx:null,
    chart:null,
    datasets:[],
    choicesID:[]
  };

  var choicesData = {};

  pollID = Number(pollID);
  $chartType.val(config.chartType);
  $colorPicker.val(config.chartBackground);
  $chartBackground.css('background-color',config.chartBackground);

  /*

    Enter on document sends message and clear message box

  */

  $(document).keypress(function (e) {
    if (e.which == 13) {
      $btnSendMsg.click();
    }
  });

  $hideShowChat.on('click',(e) => {
    if ( $hideShowChat.attr('data-show') == 1 ) {
      $hideShowChat.attr('data-show',0);
      $hideShowChat.text('Show Chat');
    } else {
      $hideShowChat.text('Hide Chat');
      $hideShowChat.attr('data-show',1);
    }

    $chatBox.toggle(400);
    $chatForm.toggle();
  });

  $colorPicker.on('change',function(){
    var color = $colorPicker.val();

    config.chartBackground = color;
    config.saveConfig();
    $chartBackground.css('background-color',color);
  });

  $chartType.on('change',function(){
    var chartType = $chartType.val();

    config.chartType = chartType;
    config.saveConfig();
    chartInfo.chart.config.type = chartType;
    chartInfo.chart.update();
  });

  $btnSendMsg.on('click',function(){
    var msg = $msgBox.val();

    if ( !msg ) return;

    socket.emit('msgSent',{
      pollID:pollID,
      message:msg
    });

    $msgBox.val('');
  });

  socket.on('msgSentServer',function(data){
    if ( data.pollID !== pollID ) return;

    var html = [
      '<li class="list-group-item">',
        data.username + ' : ',
        data.message,
      '</li>'
    ].join('');


    // if user is reading latest messages, scroll down automaticly
    if( Math.abs($chatBox.scrollTop() - ($chatBox.prop('scrollHeight') - $chatBox.outerHeight())) < 5 ) {
      $(".chatbox").stop().animate({ scrollTop: $(".chatbox")[0].scrollHeight}, 1000);
    }

    $msgList.append(html);
  });

  socket.on('userVotedData',function(data){
    if ( data.id_poll === pollID ) {
      var index = chartInfo.choicesID.indexOf(data.id_choice);

      chartInfo.chart.data.datasets[0].data[index] += 1;
      chartInfo.chart.update();

      // update number of polls
      $numberOfVotes.text(
        Number($numberOfVotes.text()) + 1
      );
    }
  });

  $('#voteForm').on('submit',function(event){
    event.preventDefault();

    var vote = $('#voteForm').find('input:checked').val();
    
    if ( !vote ) return;

    vote = Number(vote);

    $.ajax({
      method:event.target.method,
      url:event.target.action,
      data:{
        id_choice:vote,
        id_poll:pollID  
      }
    }).done(function(response){
      console.log(response);
      if ( response.error ) {
        return alert(response.message);
      }

      var index = chartInfo.choicesID.indexOf(vote);

      chartInfo.chart.data.datasets[0].data[index] += 1;
      chartInfo.chart.update();

      socket.emit('userVoted',{
        id_poll:pollID,
        id_choice:vote
      });

      // update number of polls
      $numberOfVotes.text(
        Number($numberOfVotes.text()) + 1
      );

    }).catch(function(err){
      console.log(err);
    });

  });

  $.ajax({
    method:'POST',
    url:'/api/public/getOnePoll',
    dataType:'json',
    data:{
      pollID:pollID
    }
  }).done(function(response){
    initChoicesData(response);

    var 
      labels = [],
      len    = response.Choices.length,
      i      = 0;

    for ( ; i < len ; i++ ) {
      labels.push(response.Choices[i].choice);
      chartInfo.datasets.push(response.Choices[i].number_of_votes);
      chartInfo.choicesID.push(response.Choices[i].id_choice);
    }

    chartInfo.ctx = Utilities.getCanvasContext('canvasChart');

    chartInfo.chart = Utilities.makeChart(chartInfo.ctx,{
      type:config.chartType,
      label:response.poll,
      labels:labels,
      datasets:chartInfo.datasets
    });

  }).catch(function(error){
    console.log(error);
  });

}(document));