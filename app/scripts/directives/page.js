'use strict';

/**
 * @ngdoc directive
 * @name dozerApp.directive:page
 * @description
 * # page
 */
angular.module('dozerApp')
	.directive('page', function (RecursionHelper) {
		return {
			restrict: 'E',
			scope: {node: '='},
			template:	'<div class="asset">' +
							'<h2>{{node.name}}</h2>' +
							'<metadata node="node.metadata"></metadata>' +
							'<pageconfigurations node="node.pageConfigurations"></pageconfigurations>' +
						'</div>',
			transclude: true,
			compile: function(element) {
				return RecursionHelper.compile(element);
			}
		};
	});
