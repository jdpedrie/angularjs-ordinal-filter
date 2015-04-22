'use strict';

var assert = chai.assert;

describe('ordinal', function() {
  var ordinalFilter;

  beforeEach(function() {
    module('ordinal');

    inject(function($injector) {
      ordinalFilter = $injector.get('ordinalFilter');
    });
  });

  it('returns ordinal string from numeric input', function() {
    assert.equal(ordinalFilter(1), '1st');
  });

  it('returns ordinal string from string[0] == number', function() {
    assert.equal(ordinalFilter('1'), '1st');
  });

  it('returns original string from string[0] != number', function() {
    assert.equal(ordinalFilter('Not a number'), 'Not a number');
  });
});
