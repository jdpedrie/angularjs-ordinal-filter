'use strict';

angular
  .module('ordinal', [])

  .filter('ordinal', function() {
    // Take a number and returns its ordinal value
    // i.e. 1 -> 1st, 2 -> 2nd, etc.
    return function(input) {
      // Only process numeric values.
      if (isNaN(input) || input === null) return input;

      var s=["th","st","nd","rd"];
      var v=input%100;

      return input+(s[(v-20)%10]||s[v]||s[0]);
    };
  });
