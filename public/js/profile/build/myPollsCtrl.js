'use strict';

(function () {

  'use strict';

  angular.module('realTimePolls').controller('myPollsCtrl', ['$scope', '$http', function ($scope, $http) {
    $scope.polls = null;

    $http.get('/api/public/getPolls').then(function (response) {
      for (var i = 0, len = response.data.length; i < len; i++) {
        response.data[i].showOptions = false;
      }

      $scope.polls = response.data;
    }).catch(function (error) {});

    var findPollIndexById = function findPollIndexById(pollID) {
      for (var i = 0, len = $scope.polls.length; i < len; i++) {
        if ($scope.polls[i].id_poll === pollID) {
          return i;
        }
      }

      return -1;
    };

    $scope.confirmDeletePoll = function (pollID) {
      $scope.deletePoll(pollID);
    };

    $scope.deletePoll = function (pollID) {
      $http({
        method: 'POST',
        url: '/api/public/deletePoll',
        data: {
          pollID: pollID
        }
      }).then(function (response) {
        var index = findPollIndexById(pollID);

        if (index !== -1) {
          $scope.polls.splice(index, 1);
        }
      }).catch(function (err) {
        console.log(err);
      });
    };

    $scope.confirmDisablePoll = function (pollID) {
      $scope.disablePoll(pollID);
    };

    $scope.disablePoll = function (pollID) {
      $http({
        method: 'POST',
        url: '/api/public/disablePoll',
        data: {
          pollID: pollID
        }
      }).then(function (response) {
        var index = findPollIndexById(pollID);

        if (index !== -1) {
          $scope.polls[index].is_active = false;
        }
      }).catch(function (response) {
        console.log(response);
      });
    };
  }]);
})();
//# sourceMappingURL=myPollsCtrl.js.map
