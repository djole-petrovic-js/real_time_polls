( function(){

  'use strict';

  var path = '/js/profile/templates/';

  angular.module('profileRoutes',['ngRoute'])
    .config(['$routeProvider',function($routeProvider){
      $routeProvider
        .when('/addPoll',{
          templateUrl:path + 'addPoll.html',
          controller:'addPollCtrl'
        })
        .when('/myPolls',{
          templateUrl:path + 'myPolls.html',
          controller:'myPollsCtrl'
        })
        .when('/myVotes',{
          templateUrl:path + 'myVotes.html',
          controller:'myVotesCtrl'
        })
        .when('/',{
          templateUrl:path + 'index.html',
          controller:'indexCtrl'
        });
    }]);

}());