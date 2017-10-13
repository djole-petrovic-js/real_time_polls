( function(){

  'use strict';

  angular.module('realTimePolls')
  .controller('indexCtrl',['$scope','$http',function($scope,$http){
    $scope.passwords = {
      current:'',
      newPassword:'',
      confirmNew:''
    };

    $scope.user = null;

    $scope.newUsername = '';
    $scope.delAccountPassword = '';

    $http
      .get('/api/public/getUserInfo')
      .then(response => {
        $scope.user = response.data;
      })
      .catch(error => {
        console.log(error);
      });

    $scope.confirmUsernameChange = () => {
      $scope.changeUsername();
    }

    $scope.changeUsername = () => {
      $http({
        method:'POST',
        url:'/api/public/changeUsername',
        data:{
          newUsername:$scope.newUsername
        }
      }).then(response => {

        if ( response.data.success ) {
          $scope.user.username = $scope.newUsername;
          $scope.newUsername = '';  
        } else {
          console.log(response.data);
        }
        
      }).catch(err => {
        console.log(err);
      });
    }

    $scope.confirmDeleteAccount = () => {
      $scope.deleteAccount();
    }

    $scope.deleteAccount = () => {
      $http({
        method:'POST',
        url:'/api/public/deleteAccount',
        data:{
          password:$scope.delAccountPassword
        }
      }).then(response => {
        if ( response.data.success ) {
          window.location.href = '/';
        }
        
      }).catch(error => {
        console.log(error);
      })
    }

    $scope.confirmPasswordChange = () =>{
      $scope.changePassword();
    }

    $scope.changePassword = () => {
      $http({
        method:'POST',
        url:'/api/public/changePassword',
        data:$scope.passwords
      }).then(response => {
        console.log(response);
      }).catch(error => {
        console.log(error);
      });
    }

  }]);

}());