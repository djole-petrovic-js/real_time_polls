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
    }).then(response => {
      $scope.roles = response.data;
    }).catch(error => {
      console.log(error);
    });

    $scope.addUserAccount = () => {
      $http({
        method:'POST',
        url:'/api/admin/addAccount',
        data:{
          user:$scope.userData
        }
      }).then(response => {
        console.log(response);
      }).catch(error => {
        console.log(error);
      });
    }
  }]);

}());