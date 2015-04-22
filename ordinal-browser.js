(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

var ordinal = require('ordinal');

angular
  .module('ordinal', [])

  // Take a number and returns its ordinal value
  // i.e. 1 -> 1st, 2 -> 2nd, etc.
  .filter('ordinal', function() {
    return function(input) {
      var num = parseInt(input, 10);
      return isNaN(num) ? input : ordinal.english(num);
    };
  });

},{"ordinal":2}],2:[function(require,module,exports){
exports.english = require('./lib/english');

},{"./lib/english":3}],3:[function(require,module,exports){
function teens() {
  return [11, 12, 13, 14, 15, 16, 17, 18, 19];
};

function blank(n) {
  return 'string' === typeof n && 0 === n.trim().length;
}

function numeric(n) {
  return 'number' === typeof +n && !Number.isNaN(+n);
}

function valid(n) {
  return numeric(n) && !blank(n) && 'object' !== typeof n;
}

function validate(n) {
  if(!valid(n)) {
    throw new Error('Must be a number or numeric string');
  }
}

function indicator(n) {
  validate(n);

  var remainder = n % 10;
  if(~teens().indexOf(n)) {
    return 'th';
  }
  switch(n % 10) {
    case 1:
      return 'st';
      break;
    case 2:
      return 'nd';
      break;
    case 3:
      return 'rd';
      break;
    default:
      return 'th';
  }
};

function english(n) {
  return n + indicator(n);
};

module.exports = english;
module.exports.indicator = indicator;

},{}]},{},[1]);
