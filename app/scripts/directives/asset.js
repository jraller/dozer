'use strict';

/**
 * @ngdoc directive
 * @name dozerApp.directive:asset
 * @description
 * # asset
 */
angular.module('dozerApp')
	.directive('asset', function (RecursionHelper) {
		return {
			restrict: 'E',
			scope: {node: '='},
			template:	'<div class="asset">' +
							'<h1>Asset</h1>' +
							'<page node="node.page"></page>' +
						'</div>',
			transclude: true,
			compile: function(element) {
				return RecursionHelper.compile(element);
			}
		};
	});
