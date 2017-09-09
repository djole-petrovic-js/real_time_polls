'use strict';

(function () {

  'use strict';

  angular.module('realTimePolls').controller('myVotesCtrl', ['$scope', '$http', function ($scope, $http) {
    $scope.myVotes = null;

    $http.get('/api/public/getVotingInfo').then(function (response) {
      $scope.myVotes = response.data;
    }).catch(function (error) {
      console.log(error);
    });
  }]);
})();
//# sourceMappingURL=myVotesCtrl.js.map
