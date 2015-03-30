'use strict';

describe('Service: recursionHelper', function () {

  // load the service's module
  beforeEach(module('dozerApp'));

  // instantiate service
  var recursionHelper;
  beforeEach(inject(function (_recursionHelper_) {
    recursionHelper = _recursionHelper_;
  }));

  it('should do something', function () {
    expect(!!recursionHelper).toBe(true);
  });

});
