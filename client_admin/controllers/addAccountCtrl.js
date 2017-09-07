( function(){

  'use strict';

  angular.module('realTimePolls')
  .controller('addAccountCtrl',['$scope','$http',function($scope,$http){
    $scope.userData = {
      username:'',
      password:'',
      email:'',
      is_activated:true,
      RoleIdRole:"1"
    };

    $scope.roles = [];

    $http({
      method:'GET',
      url:'/api/admin/getRoles'
    }).then(function(response){
      $scope.roles = response.data;
    }).catch(function(error){
      console.log(error);
    });

    $scope.addUserAccount = function() {
      $http({
        method:'POST',
        url:'/api/admin/addAccount',
        data:{
          user:$scope.userData
        }
      }).then(function(response){
        console.log(response);
      }).catch(function(error){
        console.log(error);
      });
    }
  }]);

}());