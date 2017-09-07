( function(){

  'use strict';

  angular.module('realTimePolls')
  .controller('rolesCtrl',['$scope','$http',function($scope,$http){
    $scope.roles = null;

    $http({
      method:'GET',
      url:'/api/admin/getRoles'
    }).then(function(response){
      $scope.roles = response.data;
    }).catch(function(err){
      console.log(err);
    });
  }]);

}());