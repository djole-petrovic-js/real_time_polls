( function(){

  'use strict';

  angular.module('realTimePolls')
  .controller('myVotesCtrl',['$scope','$http',function($scope,$http){
    $scope.myVotes = null;

    $http.get('/api/public/getVotingInfo').then(response => {
      $scope.myVotes = response.data;
    }).catch(error => {
      console.log(error);
    });

  }]);

}());