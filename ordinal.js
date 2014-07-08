'use strict';

// Ordinal Number Filter
// ---------------------
// This filter takes a number and returns its ordinal value
// i.e. 1 -> 1st, 2 -> 2nd, etc.
// h/t http://ecommerce.shopify.com/c/ecommerce-design/t/ordinal-number-in-javascript-1st-2nd-3rd-4th-29259


angular.module('ordinal', []).filter('ordinal', function() {
  var ordinal = function(input) {
    // Only process numeric values.
    if (isNaN(input) || input === null) return input;

    var s=["th","st","nd","rd"],
    v=input%100;
    return input+(s[(v-20)%10]||s[v]||s[0]);
  }

  return ordinal;
});
