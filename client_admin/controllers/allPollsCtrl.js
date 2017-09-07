( function(){

  'use strict';

  angular.module('realTimePolls')
  .controller('allPollsCtrl',['$scope','$http',function($scope,$http){
    $scope.allPolls = null;

    $http.get('/api/admin/getAllPolls').then(function(response){
      $scope.allPolls = response.data;
    }).catch(function(err){
      console.log(err);
    });

    $scope.enableDisablePoll = function(pollID,index) {
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

    $scope.deletePoll = function(pollID) {
      $http({
        method:'POST',
        url:'/api/admin/deletePoll',
        data:{
          id_poll:pollID
        }
      }).then(function(response){
        console.log(response.data);

        if ( response.data.success ) {
          var
            len   = $scope.allPolls.length,
            index = -1,
            i     = 0;

          for ( ; i < len ; i++ ) {
            if ( $scope.allPolls[i].id_poll === pollID ) {
              index = i;
              break;
            }
          }

          if ( index !== -1 ) {
            $scope.allPolls.splice(index,1);
          }

        } else {

        }
      }).catch(function(error){
        console.log(error);
      });
    }

  }]);

}());