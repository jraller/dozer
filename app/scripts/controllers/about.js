'use strict';

/**
 * @ngdoc function
 * @name dozerApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the dozerApp
 */
angular.module('dozerApp')
  .controller('AboutController', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
