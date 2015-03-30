'use strict';

/**
 * @ngdoc overview
 * @name dozerApp
 * @description
 * # dozerApp
 *
 * Main module of the application.
 */
angular
  .module('dozerApp', [
    'ngAnimate',
    'ngAria',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainController'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutController'
      })
      .otherwise({
        redirectTo: '/'
      });
  });


/* route plan

/ login posts $scope.user
/from allows selection of from server, from site, from (content type | structured data blocks by folder)
/to allows selection of to server, to site, to (content type | structured data blocks by folder)
/plan establishes copy, ignore, add, manipulate
/dozer does the work

/
/login (one or two separate) on success for both go to /plan
/plan froms and tos
/map
/execute

*/

/*

or single route

one or two?
Server
Username
Password

Site (drop down)
Asset Path (text field) dir to get type, then read by type

Map

*/
