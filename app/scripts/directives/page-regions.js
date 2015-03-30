'use strict';

/**
 * @ngdoc directive
 * @name dozerApp.directive:pageRegions
 * @description
 * # pageRegions
 */
angular.module('dozerApp')
  .directive('pageRegions', function () {
    return {
      template: '<div></div>',
      restrict: 'E',
      link: function postLink(scope, element, attrs) {
        element.text('this is the pageRegions directive');
      }
    };
  });
