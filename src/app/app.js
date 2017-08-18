var angular = require('angular');
var testList = require('./components/test-list/test-list');
var TestCtrl = require('./components/test-list/test-list.ctrl');

var app = angular.module('test.app', ['templates'])
	.controller('TestCtrl',TestCtrl)
    .directive('testList', testList)

module.exports = app; 
