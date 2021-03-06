( function(){

  'use strict';

  angular.module('realTimePolls')
  .controller('allPollsCtrl',['$scope','$http',function($scope,$http){
    $scope.allPolls = null;

    $http.get('/api/admin/getAllPolls').then(response => {
      $scope.allPolls = response.data;
    }).catch(err => {
      console.log(err);
    });

    $scope.enableDisablePoll = (pollID,index) => {
      $http({
        method:'POST',
        url:'/api/admin/enableDisablePoll',
        data:{
          pollID:pollID
        }
      }).then(function(response){
        $scope.allPolls[index].is_active = !$scope.allPolls[index].is_active;

        if ( !$scope.allPolls[index].is_active ) {
          $scope.allPolls[index].closed_at = new Date();
        }
      }).catch(function(err){
        console.log(err);
      });
    }

    $scope.deletePoll = pollID => {
      $http({
        method:'POST',
        url:'/api/admin/deletePoll',
        data:{
          id_poll:pollID
        }
      }).then(response => {
        if ( response.data.success ) {
          const index = $scope.allPolls.findIndex(x => x.id_poll === pollID);
          
          if ( index !== -1 ) $scope.allPolls.splice(index,1);
        }
      }).catch(error => {
        console.log(error);
      });
    }

  }]);

}());