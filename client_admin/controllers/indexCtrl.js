( function(){

  'use strict';

  angular.module('realTimePolls')
  .controller('indexCtrl',['$scope','$http',function($scope,$http){
    $scope.password = '';
    $scope.mainSettings = null;
    $scope.operationInProgress = false;
    $scope.canChangeSettings = null;

    $http.get('/api/admin/getMainSettings').then(response => {
      $scope.mainSettings = response.data.settings.map(setting => {
        let [settingsName,settingsValue] = setting.split('=');

        settingsValue = isNaN(+settingsValue) ? settingsValue : +settingsValue;

        return { settingsName,settingsValue };
      });

      $scope.canChangeSettings = response.data.canChangeSettings;
    }).catch(err => {
      console.log(err);
    });  

    $scope.changeSetting = (settingsName,settingsValue) => {
      $scope.operationInProgress = true;

      $http({
        method:'POST',
        url:'/api/admin/changeSetting',
        data:{
          password:$scope.password,
          settingsName:settingsName,
          settingsValue:settingsValue
        }
      }).then(response => {
        $scope.operationInProgress = false;

        if ( response.data.success ) {
          $scope.password = '';
        }
        
        if ( response.data.error ) {
          console.log(response.data.message);
        }
      }).catch(err => {
        $scope.operationInProgress = false;
        console.log(err);
      });
    }

  }]);
}());