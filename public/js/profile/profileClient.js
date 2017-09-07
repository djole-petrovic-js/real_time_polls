( function(){

  'use strict';

  angular.module('realTimePolls',['profileRoutes','ngSanitize'])
  .config(['$httpProvider',function($httpProvider){
    $httpProvider.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';
  }]);

}());