( function(){

  'use strict';

  angular.module('realTimePolls')
  .controller('indexCtrl',['$scope','$http',function($scope,$http){
    $scope.password = '';
    $scope.mainSettings = null;
    $scope.operationInProgress = false;
    $scope.canChangeSettings = null;

    $http.get('/api/admin/getMainSettings').then(function(response){
      var 
        settings = [],
        len      = response.data.settings.length,
        i         = 0;

      for ( ; i < len ; i++ ) {
        var 
          tempSettings  = response.data.settings[i].split('='),
          settingsName  = tempSettings[0],
          settingsValue = tempSettings[1];

        settings.push({
          settingsName:settingsName,
          settingsValue:settingsValue
        });
      }

      settingsValue = isNaN(+settingsValue) ? settingsValue : +settingsValue;
      $scope.mainSettings = settings;
      $scope.canChangeSettings = response.data.canChangeSettings;

    }).catch(function(err){
      console.log(err);
    });  

    $scope.changeSetting = function(settingsName,settingsValue) {
      $scope.operationInProgress = true;

      $http({
        method:'POST',
        url:'/api/admin/changeSetting',
        data:{
          password:$scope.password,
          settingsName:settingsName,
          settingsValue:settingsValue
        }
      }).then(function(response){
        $scope.operationInProgress = false;

        if ( response.data.success ) {
          $scope.password = '';
        }
        
        if ( response.data.error ) {
          console.log(response.data.message);
        }
      }).catch(function(err){
        $scope.operationInProgress = false;
        console.log(err);
      });
    }

  }]);
}());