( function(doc){

  'use strict';

  angular
    .module('realTimePolls')
    .controller('settingsBackupCtrl',['$scope','$http',function($scope,$http){
      $scope.settingsBackups = null;
      $scope.password = '';
      $scope.operationInProgress = false;

      $scope.uploadSettings = () => {
        if ( !$scope.password ) {
          return alert('Enter password');
        }

        const
          formData = new FormData();
          fileInput = doc.getElementById('fileInput');

        formData.append('file',fileInput.files[0]);
        formData.append('password',$scope.password);

        $http({
          method:'POST',
          url:'/api/admin/uploadSettings',
          headers:{
            'Content-Type':undefined
          },
          data:formData
        }).then(response => {
          console.log(response.data);
          if ( response.data.success ) {
            $scope.settingsBackups.unshift({
              dir:response.data.backupName,
              birthtime:new Date()
            });  
          }
        }).catch(err => {
          console.log(err);
        });
      }

      $scope.applyBackup = backupName => {
        if ( !$scope.password ) {
          return alert('Enter password');
        }

        $scope.operationInProgress = true;

        $http({
          method:'POST',
          url:'/api/admin/applyMainSettingsBackup',
          data:{
            password:$scope.password,
            backupName:backupName
          }
        }).then(response => {
          $scope.operationInProgress = false;
          console.log(response.data);
        }).catch(err => {
          $scope.operationInProgress = false;
          console.log(err);
        });
      }

      $scope.deleteBackup = (backupName,index) => {
        if ( !$scope.password ) {
          return alert('Enter password');
        }

        $scope.operationInProgress = true;

        $http({
          method:'POST',
          url:'/api/admin/deleteMainSettingsBackup',
          data:{
            backupName:backupName,
            password:$scope.password
          }
        }).then(response => {
          $scope.operationInProgress = false;
          $scope.password = '';

          if ( response.data.success ) {
            $scope.settingsBackups.splice(index,1);
          }

          if ( response.data.error ) {
            alert(response.data.message);
          }

        }).catch(err => {
          $scope.operationInProgress = false;
          console.log(err);
        });
      }

      $http.get('/api/admin/getMainSettingsBackups').then(response => {
        $scope.settingsBackups = response.data.backups;
      }).catch(err => {
        console.log(err);
      });

    }]);
}(document));