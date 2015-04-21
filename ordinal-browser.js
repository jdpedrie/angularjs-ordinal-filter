(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
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

},{}]},{},[1]);
