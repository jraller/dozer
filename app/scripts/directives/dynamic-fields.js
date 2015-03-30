'use strict';

/**
 * @ngdoc directive
 * @name dozerApp.directive:dynamicFields
 * @description
 * # dynamicFields
 */
angular.module('dozerApp')
	.directive('dynamicfields', function () {
		return {
			restrict: 'E',
			scope: {node: '='},
			template:	'<div ng-repeat="child in node.dynamicField">' +
							'<dynamicfield node="child"></dynamicfield>' +
						'</div>'
		};
	});
