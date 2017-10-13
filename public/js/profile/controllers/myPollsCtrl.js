( function(){

  'use strict';

  angular.module('realTimePolls')
  .controller('myPollsCtrl',['$scope','$http',function($scope,$http){
    $scope.polls = null;

    $http.get('/api/public/getPolls').then(response => {
      $scope.polls = response.data.map(x => {
        x.showOptions = false;

        return x;
      });
    }).catch(error => {

    });

    $scope.confirmDeletePoll = pollID => {
      $scope.deletePoll(pollID);
    }

    $scope.deletePoll = pollID => {
      $http({
        method:'POST',
        url:'/api/public/deletePoll',
        data:{
          pollID:pollID
        }
      }).then(response => {
        const index = $scope.polls.findIndex(x => x.id_poll === pollID);

        if ( index !== -1 ) $scope.polls.splice(index,1);

      }).catch(err => {
        console.log(err);
      });
    }

    $scope.confirmDisablePoll = pollID => {
      $scope.disablePoll(pollID);
    }

    $scope.disablePoll = pollID => {
      $http({
        method:'POST',
        url:'/api/public/disablePoll',
        data:{
          pollID:pollID
        }
      }).then(response => {
        const index = $scope.polls.findIndex(x => x.id_poll === pollID);

        if ( index !== -1 ) $scope.polls[index].is_active = false;
      }).catch(err => {
        console.log(err);
      });
    }

  }]);
}());