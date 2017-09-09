( function() {

  'use strict';

  var path = '/client_admin/templates/';

  angular.module('adminRoutes',['ngRoute'])
  .config(['$routeProvider',function($routeProvider){
    $routeProvider
      .when('/users',{
        templateUrl:path + 'users.html',
        controller:'usersCtrl'
      })
      .when('/addAccount',{
        templateUrl:path + 'addAccount.html',
        controller:'addAccountCtrl'
      })
      .when('/allPolls',{
        templateUrl:path + 'allPolls.html',
        controller:'allPollsCtrl'
      })
      .when('/roles',{
        templateUrl:path + 'roles.html',
        controller:'rolesCtrl'
      })
      .when('/logs',{
        templateUrl:path + 'logs.html',
        controller:'logsCtrl'
      })
      .when('/dbBackups',{
        templateUrl:path + 'backups.html',
        controller:'backupsCtrl'
      })
      .when('/settingsBackup',{
        templateUrl:path + 'settingsBackup.html',
        controller:'settingsBackupCtrl'
      })
      .when('/reports',{
        templateUrl:path + 'reports.html',
        controller:'reportsCtrl'
      })
      .when('/',{
        templateUrl:path + 'index.html',
        controller:'indexCtrl'
      });
  }]);

}());