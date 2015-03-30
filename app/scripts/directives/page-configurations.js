'use strict';

/**
 * @ngdoc directive
 * @name dozerApp.directive:pageConfigurations
 * @description
 * # pageConfigurations
 */
angular.module('dozerApp')
  .directive('pageconfigurations', function () {
    return {
      restrict: 'E',
      template: '<div></div>',
      link: function postLink(scope, element, attrs) {
        element.text('this is the pageConfigurations directive');
      }
    };
  });
