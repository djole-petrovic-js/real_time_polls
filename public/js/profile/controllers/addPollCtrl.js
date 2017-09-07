( function(){

  'use strict';

  angular.module('realTimePolls')
  .controller('addPollCtrl',['$scope','$http','$sce',function($scope,$http,$sce){
    var socket = io();

    //$scope.numberOfChoices = 2;
    $scope.pollName = '';
    $scope.choicesHTML;
    $scope.showUsername = true;

    $scope.renderChoices = function() {
      var numChoices = Number($scope.numberOfChoices);

      var choices = [];

      for ( var i = 1 ; i <= numChoices ; i++) {
        choices.push('<input class="form-control choices" type="text" placeholder="Enter"/>');
      }

      $scope.choicesHTML = $sce.trustAsHtml(choices.join(''));
    }

    $scope.addPoll = function() {
      var 
        allChoices = Array.prototype.slice.call($('.choices')),
        values     = [];

      for ( var i = 0 , len = allChoices.length ; i < len ; i++ ) {
        values.push(allChoices[i].value);
      }

      var data = {
        pollName:$scope.pollName,
        choices:values,
        showUsername:$scope.showUsername
      };

      $http({
        method:'POST',
        url:'/api/public/addPoll',
        data:data
      }).then(function(response){
        console.log(response.data);
        if ( response.data.success ) {
          socket.emit('pollAdded',{
            pollID:response.data.pollID
          });  
        } else {
          console.log(response.data);
        }
      }).catch(function(error){
        console.log(error);
      });
    }
  }]);

}());