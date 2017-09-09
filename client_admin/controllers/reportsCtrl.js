( function(){

  'use strict';

  angular
    .module('realTimePolls')
    .controller('reportsCtrl',['$scope','$http',function($scope,$http){
      $scope.reports = null;

      $http.get('/api/admin/getAllReports').then(({ data:reports }) => {
        $scope.reports = reports;
      }).catch(err => {
        console.log(err);
      });

    }]);
}());