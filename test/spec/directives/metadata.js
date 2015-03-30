'use strict';

describe('Directive: metadata', function () {

  // load the directive's module
  beforeEach(module('dozerApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<metadata></metadata>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the metadata directive');
  }));
});
