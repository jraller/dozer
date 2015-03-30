'use strict';

describe('Directive: pageRegions', function () {

  // load the directive's module
  beforeEach(module('dozerApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<page-regions></page-regions>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the pageRegions directive');
  }));
});
