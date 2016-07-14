require=(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){

function TestCtrl($scope) {
    $scope.list = [
        {name:'This is awsome'},
        {name:'Good for start'},
        {name:'I want to extend this further'}
    ];

}

TestCtrl.$inject = ['$scope'];
module.exports = TestCtrl;
},{}],2:[function(require,module,exports){
var template = require('./test-list.template.ngt');
var TestCtrl = require('./test-list.ctrl');
var $ = require('jquery');
module.exports = function() {

    return {
        templateUrl: template,
        controller: TestCtrl,
        restrict: 'EA',
        link: function(scope, element) {

        }
    };
};
},{"./test-list.ctrl":1,"./test-list.template.ngt":3,"jquery":"jquery"}],3:[function(require,module,exports){
var ngModule;
try {
  ngModule = angular.module('templates');
} catch (e) {
  ngModule = angular.module('templates', []);
}

ngModule.run(['$templateCache', function ($templateCache) {
  $templateCache.put('/components/test-list/test-list.template.ngt',
    '<div class="test-list">\n' +
    '	<ul class="list-group">\n' +
    '		<li ng-repeat="item in list" class="list-group-item">\n' +
    '			{{item.name}}\n' +
    '		</li>\n' +
    '	</ul> \n' +
    '</div>');
}]);

module.exports = "/components/test-list/test-list.template.ngt";
},{}],"APP":[function(require,module,exports){
var angular = require('angular');
var testList = require('./components/test-list/test-list');

var app = angular.module('test.app', ['templates'])
    .directive('testList', testList)

module.exports = app; 

},{"./components/test-list/test-list":2,"angular":"angular"}]},{},[])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvYXBwL2NvbXBvbmVudHMvdGVzdC1saXN0L3Rlc3QtbGlzdC5jdHJsLmpzIiwic3JjL2FwcC9jb21wb25lbnRzL3Rlc3QtbGlzdC90ZXN0LWxpc3QuanMiLCJzcmMvYXBwL2NvbXBvbmVudHMvdGVzdC1saXN0L3Rlc3QtbGlzdC50ZW1wbGF0ZS5uZ3QiLCJBUFAiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDWEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNiQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNsQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCJcbmZ1bmN0aW9uIFRlc3RDdHJsKCRzY29wZSkge1xuICAgICRzY29wZS5saXN0ID0gW1xuICAgICAgICB7bmFtZTonVGhpcyBpcyBhd3NvbWUnfSxcbiAgICAgICAge25hbWU6J0dvb2QgZm9yIHN0YXJ0J30sXG4gICAgICAgIHtuYW1lOidJIHdhbnQgdG8gZXh0ZW5kIHRoaXMgZnVydGhlcid9XG4gICAgXTtcblxufVxuXG5UZXN0Q3RybC4kaW5qZWN0ID0gWyckc2NvcGUnXTtcbm1vZHVsZS5leHBvcnRzID0gVGVzdEN0cmw7IiwidmFyIHRlbXBsYXRlID0gcmVxdWlyZSgnLi90ZXN0LWxpc3QudGVtcGxhdGUubmd0Jyk7XG52YXIgVGVzdEN0cmwgPSByZXF1aXJlKCcuL3Rlc3QtbGlzdC5jdHJsJyk7XG52YXIgJCA9IHJlcXVpcmUoJ2pxdWVyeScpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbigpIHtcblxuICAgIHJldHVybiB7XG4gICAgICAgIHRlbXBsYXRlVXJsOiB0ZW1wbGF0ZSxcbiAgICAgICAgY29udHJvbGxlcjogVGVzdEN0cmwsXG4gICAgICAgIHJlc3RyaWN0OiAnRUEnLFxuICAgICAgICBsaW5rOiBmdW5jdGlvbihzY29wZSwgZWxlbWVudCkge1xuXG4gICAgICAgIH1cbiAgICB9O1xufTsiLCJ2YXIgbmdNb2R1bGU7XG50cnkge1xuICBuZ01vZHVsZSA9IGFuZ3VsYXIubW9kdWxlKCd0ZW1wbGF0ZXMnKTtcbn0gY2F0Y2ggKGUpIHtcbiAgbmdNb2R1bGUgPSBhbmd1bGFyLm1vZHVsZSgndGVtcGxhdGVzJywgW10pO1xufVxuXG5uZ01vZHVsZS5ydW4oWyckdGVtcGxhdGVDYWNoZScsIGZ1bmN0aW9uICgkdGVtcGxhdGVDYWNoZSkge1xuICAkdGVtcGxhdGVDYWNoZS5wdXQoJy9jb21wb25lbnRzL3Rlc3QtbGlzdC90ZXN0LWxpc3QudGVtcGxhdGUubmd0JyxcbiAgICAnPGRpdiBjbGFzcz1cInRlc3QtbGlzdFwiPlxcbicgK1xuICAgICdcdDx1bCBjbGFzcz1cImxpc3QtZ3JvdXBcIj5cXG4nICtcbiAgICAnXHRcdDxsaSBuZy1yZXBlYXQ9XCJpdGVtIGluIGxpc3RcIiBjbGFzcz1cImxpc3QtZ3JvdXAtaXRlbVwiPlxcbicgK1xuICAgICdcdFx0XHR7e2l0ZW0ubmFtZX19XFxuJyArXG4gICAgJ1x0XHQ8L2xpPlxcbicgK1xuICAgICdcdDwvdWw+IFxcbicgK1xuICAgICc8L2Rpdj4nKTtcbn1dKTtcblxubW9kdWxlLmV4cG9ydHMgPSBcIi9jb21wb25lbnRzL3Rlc3QtbGlzdC90ZXN0LWxpc3QudGVtcGxhdGUubmd0XCI7IiwidmFyIGFuZ3VsYXIgPSByZXF1aXJlKCdhbmd1bGFyJyk7XG52YXIgdGVzdExpc3QgPSByZXF1aXJlKCcuL2NvbXBvbmVudHMvdGVzdC1saXN0L3Rlc3QtbGlzdCcpO1xuXG52YXIgYXBwID0gYW5ndWxhci5tb2R1bGUoJ3Rlc3QuYXBwJywgWyd0ZW1wbGF0ZXMnXSlcbiAgICAuZGlyZWN0aXZlKCd0ZXN0TGlzdCcsIHRlc3RMaXN0KVxuXG5tb2R1bGUuZXhwb3J0cyA9IGFwcDsgXG4iXX0=
