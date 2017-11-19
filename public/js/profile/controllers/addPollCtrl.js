( function(){

  'use strict';

  angular.module('realTimePolls')
  .controller('addPollCtrl',['$scope','$http','$sce',function($scope,$http,$sce){
    const socket = io();

    //$scope.numberOfChoices = 2;
    $scope.pollName = '';
    $scope.choicesHTML;
    $scope.showUsername = true;

    $scope.renderChoices = () => {
      const numChoices = Number($scope.numberOfChoices);
      const choices = [];

      for ( let i = 1 ; i <= numChoices ; i++) {
        choices.push('<input class="form-control choices" type="text" placeholder="Enter"/>');
      }

      $scope.choicesHTML = $sce.trustAsHtml(choices.join(''));
    }

    $scope.addPoll = () => {
      const values = Array.from($('.choices')).map(x => x.value);

      const data = {
        pollName:$scope.pollName,
        choices:values,
        showUsername:$scope.showUsername
      };

      $http({
        method:'POST',
        url:'/api/public/addPoll',
        data:data
      }).then(response => {
        console.log(response.data);
        if ( response.data.success ) {
          socket.emit('pollAdded',{
            pollID:response.data.pollID
          });  
        } else {
          console.log(response.data);
        }
      }).catch(error => {
        console.log(error);
      });
    }
  }]);

}());