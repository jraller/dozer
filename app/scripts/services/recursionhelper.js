'use strict';

/**
 * @ngdoc service
 * @name dozerApp.recursionHelper
 * @description
 * # recursionHelper
 * Factory in the dozerApp.
 */
angular.module('dozerApp')
  .factory('RecursionHelper', ['$compile', function($compile){
      var RecursionHelper = {
          compile: function(element){
              var contents = element.contents().remove();
              var compiledContents;
              return function(scope, element){
                  if(!compiledContents){
                      compiledContents = $compile(contents);
                  }
                  compiledContents(scope, function(clone){
                      element.append(clone);
                  });
              };
          }
      };
      return RecursionHelper;
  }]);

