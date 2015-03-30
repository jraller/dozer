'use strict';

describe('Directive: dynamicFields', function () {

  // load the directive's module
  beforeEach(module('dozerApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<dynamic-fields></dynamic-fields>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the dynamicFields directive');
  }));
});
