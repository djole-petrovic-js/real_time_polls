( function(){

  'use strict';

  angular.module('realTimePolls')
  .controller('usersCtrl',['$scope','$http',function($scope,$http){
    $scope.users = null;

    $http({
      method:'GET',
      url:'/api/admin/getUsers'
    }).then(function(response){
      var users = Utilities.map(response.data,function(x){
        var user = x.user;

        user.canBeModified = x.canBeModified;
        user.Role.id_role = String(user.Role.id_role);

        return user;
      });

      $scope.users = users;
    }).catch(function(err){
      console.log(err);
    });

    $scope.confirmUpdateUser = function(user) {
      $scope.updateUser(user);
    }

    $scope.updateUser = function(user) {
      $http({
        method:'POST',
        url:'/api/admin/updateUser',
        data:{
          id_user:user.id_user,
          RoleIdRole:user.Role.id_role
        }
      }).then(function(response){
        console.log(response.data);
      }).catch(function(err){
        console.log(err);
      });
    }

    $scope.confirmDeleteUser = function(userID,index) {
      $scope.deleteUser(userID,index);
    }

    $scope.deleteUser = function(userID,index) {
      $http({
        method:'POST',
        url:'/api/admin/deleteUser',
        data:{
          userID:userID
        }
      }).then(function(response){
        console.log(response.data);
        if ( response.data.success ) {
          $scope.users.splice(index,1);
        }
      }).catch(function(err){

      });
    }

  }]);

}());