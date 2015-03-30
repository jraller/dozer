'use strict';

/**
 * @ngdoc directive
 * @name dozerApp.directive:metadata
 * @description
 * # metadata
 */
angular.module('dozerApp')
	.directive('metadata', function (RecursionHelper) {
		return {
			restrict: 'E',
			scope: {node: '='},
			template:	'<div class="container well">' +
							'<div class="row"><div class="col-xs-6">Display Name:</div>' +
							'<div class="col-xs-6">{{node.displayName}}</div></div>' +
							'<div class="row"><div class="col-xs-6">Title:</div>' +
							'<div class="col-xs-6">{{node.title}}</div></div>' +
							'<dynamicfields node="node.dynamicFields"></dynamicfields>' +
						'</div>',
			transclude: true,
			compile: function(element) {
				return RecursionHelper.compile(element);
			}
		};
	});
