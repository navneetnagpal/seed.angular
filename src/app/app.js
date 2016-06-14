var angular = require('angular');
var testList = require('./components/test-list/test-list');

var app = angular.module('test.app', ['templates'])
    .directive('testList', testList)

module.exports = app; 
