require=(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({"APP":[function(require,module,exports){
var angular = require('angular');
var testList = require('./components/test-list/test-list');

var app = angular.module('test.app', ['templates'])
    .directive('testList', testList)

module.exports = app; 

},{"./components/test-list/test-list":2,"angular":"angular"}],1:[function(require,module,exports){

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
},{}]},{},[])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJBUFAiLCJzcmMvYXBwL2NvbXBvbmVudHMvdGVzdC1saXN0L3Rlc3QtbGlzdC5jdHJsLmpzIiwic3JjL2FwcC9jb21wb25lbnRzL3Rlc3QtbGlzdC90ZXN0LWxpc3QuanMiLCJzcmMvYXBwL2NvbXBvbmVudHMvdGVzdC1saXN0L3Rlc3QtbGlzdC50ZW1wbGF0ZS5uZ3QiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ1BBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNYQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsInZhciBhbmd1bGFyID0gcmVxdWlyZSgnYW5ndWxhcicpO1xyXG52YXIgdGVzdExpc3QgPSByZXF1aXJlKCcuL2NvbXBvbmVudHMvdGVzdC1saXN0L3Rlc3QtbGlzdCcpO1xyXG5cclxudmFyIGFwcCA9IGFuZ3VsYXIubW9kdWxlKCd0ZXN0LmFwcCcsIFsndGVtcGxhdGVzJ10pXHJcbiAgICAuZGlyZWN0aXZlKCd0ZXN0TGlzdCcsIHRlc3RMaXN0KVxyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBhcHA7IFxyXG4iLCJcclxuZnVuY3Rpb24gVGVzdEN0cmwoJHNjb3BlKSB7XHJcbiAgICAkc2NvcGUubGlzdCA9IFtcclxuICAgICAgICB7bmFtZTonVGhpcyBpcyBhd3NvbWUnfSxcclxuICAgICAgICB7bmFtZTonR29vZCBmb3Igc3RhcnQnfSxcclxuICAgICAgICB7bmFtZTonSSB3YW50IHRvIGV4dGVuZCB0aGlzIGZ1cnRoZXInfVxyXG4gICAgXTtcclxuXHJcbn1cclxuXHJcblRlc3RDdHJsLiRpbmplY3QgPSBbJyRzY29wZSddO1xyXG5tb2R1bGUuZXhwb3J0cyA9IFRlc3RDdHJsOyIsInZhciB0ZW1wbGF0ZSA9IHJlcXVpcmUoJy4vdGVzdC1saXN0LnRlbXBsYXRlLm5ndCcpO1xyXG52YXIgVGVzdEN0cmwgPSByZXF1aXJlKCcuL3Rlc3QtbGlzdC5jdHJsJyk7XHJcbnZhciAkID0gcmVxdWlyZSgnanF1ZXJ5Jyk7XHJcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oKSB7XHJcblxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICB0ZW1wbGF0ZVVybDogdGVtcGxhdGUsXHJcbiAgICAgICAgY29udHJvbGxlcjogVGVzdEN0cmwsXHJcbiAgICAgICAgcmVzdHJpY3Q6ICdFQScsXHJcbiAgICAgICAgbGluazogZnVuY3Rpb24oc2NvcGUsIGVsZW1lbnQpIHtcclxuXHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxufTsiLCJ2YXIgbmdNb2R1bGU7XG50cnkge1xuICBuZ01vZHVsZSA9IGFuZ3VsYXIubW9kdWxlKCd0ZW1wbGF0ZXMnKTtcbn0gY2F0Y2ggKGUpIHtcbiAgbmdNb2R1bGUgPSBhbmd1bGFyLm1vZHVsZSgndGVtcGxhdGVzJywgW10pO1xufVxuXG5uZ01vZHVsZS5ydW4oWyckdGVtcGxhdGVDYWNoZScsIGZ1bmN0aW9uICgkdGVtcGxhdGVDYWNoZSkge1xuICAkdGVtcGxhdGVDYWNoZS5wdXQoJy9jb21wb25lbnRzL3Rlc3QtbGlzdC90ZXN0LWxpc3QudGVtcGxhdGUubmd0JyxcbiAgICAnPGRpdiBjbGFzcz1cInRlc3QtbGlzdFwiPlxcbicgK1xuICAgICdcdDx1bCBjbGFzcz1cImxpc3QtZ3JvdXBcIj5cXG4nICtcbiAgICAnXHRcdDxsaSBuZy1yZXBlYXQ9XCJpdGVtIGluIGxpc3RcIiBjbGFzcz1cImxpc3QtZ3JvdXAtaXRlbVwiPlxcbicgK1xuICAgICdcdFx0XHR7e2l0ZW0ubmFtZX19XFxuJyArXG4gICAgJ1x0XHQ8L2xpPlxcbicgK1xuICAgICdcdDwvdWw+IFxcbicgK1xuICAgICc8L2Rpdj4nKTtcbn1dKTtcblxubW9kdWxlLmV4cG9ydHMgPSBcIi9jb21wb25lbnRzL3Rlc3QtbGlzdC90ZXN0LWxpc3QudGVtcGxhdGUubmd0XCI7Il19
