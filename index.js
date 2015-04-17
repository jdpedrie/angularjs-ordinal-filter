'use strict';

var ordinal = require('ordinal');

angular
  .module('ordinal', [])

  .filter('ordinal', function() {
    // Take a number and returns its ordinal value
    // i.e. 1 -> 1st, 2 -> 2nd, etc.
    return function(input) {
      return angular.isNumber(input) ? ordinal.english(input) : input;
    };
  });
