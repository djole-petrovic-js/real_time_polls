( function(){

  'use strict';

  angular.module('realTimePolls')
  .controller('logsCtrl',['$scope','$http',function($scope,$http){
    $scope.logs = null;
    $scope.logContent = '';

    $http.get('/api/admin/getLogs').then(function(response){
      $scope.logs = response.data;
    }).catch(function(err){
      console.log(err);
    });

    $scope.confirmClearAllLogs = function() {
      $scope.clearAllLogs();
    }

    $scope.clearAllLogs = function() {
      $http
        .post('/api/admin/clearAllLogs')
        .then(function(response){
          console.log(response);
        })
        .catch(function(err){
          console.log(err);
        });
    }

    $scope.hideContentArea = () => {
      $scope.logContent = '';
    }

    $scope.clearLog = logFile => {
      $http({
        method:'POST',
        url:'/api/admin/clearLog',
        data:{
          logFile:logFile
        }
      }).then(response => {
        if ( response.data.success ) {
          $scope.logContent = 'Cleared';
        }
      }).catch(err => {
        console.log(err);
      });
    }

    $scope.getLogFile = logFile => {
      $http({
        method:'POST',
        url:'/api/admin/getLogFile',
        data:{
          log:logFile
        }
      }).then(response => {
        $scope.logContent = response.data;
      }).catch(err => {
        console.log(err);
      });
    }

  }]);
}());