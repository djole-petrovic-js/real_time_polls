( function(doc){

  'use strict';

  var makeMonitorLinks = function(polls,container) {
    var selector = '#' + container.attr('id') + ' a';

    $(selector).each(function(index,el){
      var href = '/polls/monitor/' + polls[index].id_poll + '/' + polls[index].poll;

      $(el).attr('href',href);
    });
  }

  /*
  @param polls       : data to show
  @param dataHolder : where to store data
  @container         : where to display data
  @selector         : string to select divs and identify (id) elements in view
  */
  var generateCharts = function(polls,dataHolder,container,selector) {
    makeChartHTML(polls,container,selector);

    constructNewPollData(polls,dataHolder,selector);

    makeMonitorLinks(polls,container);
  }

  var updateChart = function(opts) {
    //find chart element in context
    var index = opts.context.choicesID.indexOf(opts.id_choice);

    if ( index != -1 ) {
      opts.context.chart.data.datasets[0].data[index] += 1;
      opts.context.chart.update();
    }

    //find element in context data and update value
    var choiceIndex = Utilities.findIndex(opts.context.data.Choices,function(el){
      return el.id_choice === opts.id_choice
    });

    if ( choiceIndex !== -1 ) {
      opts.context.data.Choices[choiceIndex].number_of_votes += 1;
    }
  }

  var makeChartHTML = function(polls,pollsContainer,selector) {
    pollsContainer.html('');

    for ( var i = 0 , len = polls.length ; i < len ; i++ ) {
      pollsContainer.append([
        '<div class="col-md-6">',
          '<canvas id="' + selector+ (i + 1) +'"></canvas>',
          '<div class="row">',
            '<a class="btn btn-primary">Monitor</a>',
          '<div>',
        '</div>'
      ].join(''));
    }
  }

  /*
    Dataholder is passed by reference, no need for return
  */
  var constructNewPollData = function(polls,dataHolder,selector) {
    for ( var i = 0 , len = polls.length ; i < len ; i++ ) {
      var
        labels   = [],
        datasets = [],
        key      = 'ctx' + (i + 1);

      dataHolder[key] = {
        ctx:Utilities.getCanvasContext(selector + (i + 1)),
        data:polls[i],
        choicesID:[]
      };

      for ( var j = 0 , choicesLen = polls[i].Choices.length ; j < choicesLen ; j++ ) {
        labels.push(polls[i].Choices[j].choice);
        datasets.push(polls[i].Choices[j].number_of_votes);
        dataHolder[key].choicesID.push(polls[i].Choices[j].id_choice);
      }

      dataHolder[key].chart = Utilities.makeChart(dataHolder[key].ctx,{
        type:'bar',
        label:polls[i].poll,
        labels:labels,
        datasets:datasets
      });
    }
  }

  var
    newPolls          = $('#newPolls'),
    popularPolls     = $('#popularPolls'),
    canvasCounter    = 1,
    socket            = io(),
    newPollsData     = {},
    popularPollsData = {};

  socket.on('userVotedData',function(data){
    var keys = Utilities.unique(
      Utilities.keys(newPollsData),Utilities.keys(popularPollsData)
    );

    var
      newPollsDataUpdated     = false,
      popularPollsDataUpdated = false,
      len                     = keys.length,
      i                       = 0;

    for ( ; i < len ; i++ ) {
      var key = keys[i];

      if ( key in newPollsData ) {
        if ( newPollsData[key].data.id_poll === data.id_poll ) {
          updateChart({
            context:newPollsData[key],
            id_choice:data.id_choice
          });

          newPollsDataUpdated = true;

          if ( newPollsDataUpdated && popularPollsDataUpdated ) break;
        }
      }

      if ( key in popularPollsData ) {
        if ( popularPollsData[key].data.id_poll === data.id_poll ) {
          updateChart({
            context:popularPollsData[key],
            id_choice:data.id_choice
          });

          popularPollsDataUpdated = true;

          if ( newPollsDataUpdated && popularPollsDataUpdated ) break;
        }
      }
    }
  });

  /*
    Detect current polls dataset, and insert new poll and shift other ones
  */
  socket.on('newPollAdded',function(poll){
    var
      updatedPolls = [],
      keys          = Utilities.keys(newPollsData);

    var
      len = keys.length -1,
      i   = 0;

    for ( ; i < len ; i++ ) {
      updatedPolls.push(newPollsData[keys[i]].data);
    }

    updatedPolls.unshift(poll);

    generateCharts(updatedPolls,newPollsData,newPolls,'newPolls');
  });  

  $.ajax({
    method:'GET',
    url:'/api/public/getNewPolls'
  }).done(function(polls){

    generateCharts(polls,newPollsData,newPolls,'newPolls');

  }).catch(function(err){
    console.log(err);
  });

  $.ajax({
    method:'GET',
    url:'/api/public/getPopularPolls'
  }).done(function(polls){

    generateCharts(polls,popularPollsData,popularPolls,'popularPolls');
  
  }).catch(function(err){

    console.log(err);
  });

}(document));