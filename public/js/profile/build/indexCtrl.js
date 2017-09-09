'use strict';

(function () {

  'use strict';

  angular.module('realTimePolls').controller('indexCtrl', ['$scope', '$http', function ($scope, $http) {
    $scope.passwords = {
      current: '',
      newPassword: '',
      confirmNew: ''
    };

    $scope.user = null;

    $scope.newUsername = '';
    $scope.delAccountPassword = '';

    $http.get('/api/public/getUserInfo').then(function (response) {
      $scope.user = response.data;
    }).catch(function (error) {
      console.log(error);
    });

    $scope.confirmUsernameChange = function () {
      $scope.changeUsername();
    };

    $scope.changeUsername = function () {
      $http({
        method: 'POST',
        url: '/api/public/changeUsername',
        data: {
          newUsername: $scope.newUsername
        }
      }).then(function (response) {

        if (response.data.success) {
          $scope.user.username = $scope.newUsername;
          $scope.newUsername = '';
        } else {
          console.log(response.data);
        }
      }).catch(function (err) {
        console.log(err);
      });
    };

    $scope.confirmDeleteAccount = function () {
      $scope.deleteAccount();
    };

    $scope.deleteAccount = function () {
      $http({
        method: 'POST',
        url: '/api/public/deleteAccount',
        data: {
          password: $scope.delAccountPassword
        }
      }).then(function (response) {
        if (response.data.success) {
          window.location.href = '/';
        }
      }).catch(function (error) {
        console.log(error);
      });
    };

    $scope.confirmPasswordChange = function () {
      $scope.changePassword();
    };

    $scope.changePassword = function () {
      $http({
        method: 'POST',
        url: '/api/public/changePassword',
        data: $scope.passwords
      }).then(function (response) {
        console.log(response);
      }).catch(function (error) {
        console.log(error);
      });
    };
  }]);
})();
//# sourceMappingURL=indexCtrl.js.map
