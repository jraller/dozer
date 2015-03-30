'use strict';

/**
 * @ngdoc directive
 * @name dozerApp.directive:dynamicField
 * @description
 * # dynamicField
 */
angular.module('dozerApp')
	.directive('dynamicfield', function () {
		return {
			restrict: 'E',
			scope: {node: '='},
			template:	'<div class="row"><div class="col-xs-6">{{node.name}}:</div>' +
						'<div class="col-xs-6">{{node.fieldValues}}</div></div>'
		};
	});
