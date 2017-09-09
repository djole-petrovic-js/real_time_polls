( function(doc){

  'use strict';

  angular.module('realTimePolls')
  .controller('backupsCtrl',['$scope','$http',function($scope,$http){
    $scope.backups = null;
    $scope.password = '';
    $scope.operationInProgress = false;

    $http.get('/api/admin/getBackups').then(response => {
      $scope.backups = response.data
    }).catch(err => {
      console.log(err);
    });

    $scope.deleteBackup = (backupName,index) => {
      if ( !$scope.password ) {
        return alert('Please enter password!');
      }

      $http({
        method:'POST',
        url:'/api/admin/deleteBackup',
        data:{
          backupName:backupName,
          password:$scope.password
        }
      }).then((response) => {
        if ( response.data.success ) {
          $scope.backups.splice(index,1);
          $scope.password = '';
        }
      }).catch((err) => {
        console.log(err);
      });
    }

    $scope.uploadBackup = () => {
      if ( !$scope.password ) {
        return alert('Please enter password!');
      }

      const 
        formData    = new FormData(),
        uploadInput = doc.getElementById('upload');     

      formData.append('file',uploadInput.files[0]);
      formData.append('password',$scope.password);

      $http({
        method:'POST',
        url:'/api/admin/uploadBackup',
        headers:{
          "Content-Type":undefined
        },
        data:formData
      }).then(response => {
        console.log(response);
        $scope.password = '';
      }).catch(err => {
        console.log(err);
      });
    }

    $scope.downloadBackup = backupName => {
      if ( !$scope.password ) {
        return alert('Please enter password!');
      }

      $scope.operationInProgress = true;

      $http({
        method:'POST',
        url:'/api/admin/downloadBackup',
        data:{
          backupName:backupName,
          password:$scope.password
        }
      }).then(response => {
        if ( response.data.success ) {
          const $form = $('#downloadBackup' + backupName);

          $('#downloadForm' + backupName).attr('action','/api/admin/downloadBackup');
          $('#downloadForm' + backupName).attr('method','POST');
          $('#downloadForm' + backupName).submit();

          $scope.password = '';
          $scope.operationInProgress = false;
        }

        if ( response.data.error ) {
          if ( response.data.message ) {
            $scope.operationInProgress = false;
            console.log(response.data.message)
          }
        }
      }).catch(err => {
        $scope.operationInProgress = false;
        console.log(err);
      });
    }

    $scope.confirmApplyBackup = backupName => {
      if ( !$scope.password ) {
        return alert('Please enter password!');
      } 

      $scope.applyBackup(backupName);
    }

    $scope.applyBackup = backupName => {
      $scope.operationInProgress = true;

      $http({
        method:'POST',
        url:'/api/admin/applyBackup',
        data:{
          backupName:backupName,
          password:$scope.password
        }
      }).then(response =>{
        $scope.operationInProgress = false;
        $scope.password = '';
      }).catch(err => {
        console.log(err);
        $scope.operationInProgress = false;
      });
    }

  }]);
}(document));