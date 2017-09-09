( function(){

  'use strict';

  angular.module('realTimePolls')
  .controller('usersCtrl',['$scope','$http',function($scope,$http){
    $scope.users = null;

    $http({
      method:'GET',
      url:'/api/admin/getUsers'
    }).then(response => {
      const users = response.data.map(x => {
        const user = x.user;

        user.canBeModified = x.canBeModified;
        user.Role.id_role = String(user.Role.id_role);

        return user;
      });

      $scope.users = users;
    }).catch(err => {
      console.log(err);
    });

    $scope.confirmUpdateUser = user => {
      $scope.updateUser(user);
    }

    $scope.updateUser = user => {
      $http({
        method:'POST',
        url:'/api/admin/updateUser',
        data:{
          id_user:user.id_user,
          RoleIdRole:user.Role.id_role
        }
      }).then(response => {
        console.log(response.data);
      }).catch(err => {
        console.log(err);
      });
    }

    $scope.confirmDeleteUser = (userID,index) => {
      $scope.deleteUser(userID,index);
    }

    $scope.deleteUser = (userID,index) => {
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