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
        {name:'Looks fine'},
        {name:'Good for start'}
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJBUFAiLCJzcmMvYXBwL2NvbXBvbmVudHMvdGVzdC1saXN0L3Rlc3QtbGlzdC5jdHJsLmpzIiwic3JjL2FwcC9jb21wb25lbnRzL3Rlc3QtbGlzdC90ZXN0LWxpc3QuanMiLCJzcmMvYXBwL2NvbXBvbmVudHMvdGVzdC1saXN0L3Rlc3QtbGlzdC50ZW1wbGF0ZS5uZ3QiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ1BBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNYQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsInZhciBhbmd1bGFyID0gcmVxdWlyZSgnYW5ndWxhcicpO1xyXG52YXIgdGVzdExpc3QgPSByZXF1aXJlKCcuL2NvbXBvbmVudHMvdGVzdC1saXN0L3Rlc3QtbGlzdCcpO1xyXG5cclxudmFyIGFwcCA9IGFuZ3VsYXIubW9kdWxlKCd0ZXN0LmFwcCcsIFsndGVtcGxhdGVzJ10pXHJcbiAgICAuZGlyZWN0aXZlKCd0ZXN0TGlzdCcsIHRlc3RMaXN0KVxyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBhcHA7IFxyXG4iLCJcclxuZnVuY3Rpb24gVGVzdEN0cmwoJHNjb3BlKSB7XHJcbiAgICAkc2NvcGUubGlzdCA9IFtcclxuICAgICAgICB7bmFtZTonVGhpcyBpcyBhd3NvbWUnfSxcclxuICAgICAgICB7bmFtZTonTG9va3MgZmluZSd9LFxyXG4gICAgICAgIHtuYW1lOidHb29kIGZvciBzdGFydCd9XHJcbiAgICBdO1xyXG5cclxufVxyXG5cclxuVGVzdEN0cmwuJGluamVjdCA9IFsnJHNjb3BlJ107XHJcbm1vZHVsZS5leHBvcnRzID0gVGVzdEN0cmw7IiwidmFyIHRlbXBsYXRlID0gcmVxdWlyZSgnLi90ZXN0LWxpc3QudGVtcGxhdGUubmd0Jyk7XHJcbnZhciBUZXN0Q3RybCA9IHJlcXVpcmUoJy4vdGVzdC1saXN0LmN0cmwnKTtcclxudmFyICQgPSByZXF1aXJlKCdqcXVlcnknKTtcclxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbigpIHtcclxuXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIHRlbXBsYXRlVXJsOiB0ZW1wbGF0ZSxcclxuICAgICAgICBjb250cm9sbGVyOiBUZXN0Q3RybCxcclxuICAgICAgICByZXN0cmljdDogJ0VBJyxcclxuICAgICAgICBsaW5rOiBmdW5jdGlvbihzY29wZSwgZWxlbWVudCkge1xyXG5cclxuICAgICAgICB9XHJcbiAgICB9O1xyXG59OyIsInZhciBuZ01vZHVsZTtcbnRyeSB7XG4gIG5nTW9kdWxlID0gYW5ndWxhci5tb2R1bGUoJ3RlbXBsYXRlcycpO1xufSBjYXRjaCAoZSkge1xuICBuZ01vZHVsZSA9IGFuZ3VsYXIubW9kdWxlKCd0ZW1wbGF0ZXMnLCBbXSk7XG59XG5cbm5nTW9kdWxlLnJ1bihbJyR0ZW1wbGF0ZUNhY2hlJywgZnVuY3Rpb24gKCR0ZW1wbGF0ZUNhY2hlKSB7XG4gICR0ZW1wbGF0ZUNhY2hlLnB1dCgnL2NvbXBvbmVudHMvdGVzdC1saXN0L3Rlc3QtbGlzdC50ZW1wbGF0ZS5uZ3QnLFxuICAgICc8ZGl2IGNsYXNzPVwidGVzdC1saXN0XCI+XFxuJyArXG4gICAgJ1x0PHVsIGNsYXNzPVwibGlzdC1ncm91cFwiPlxcbicgK1xuICAgICdcdFx0PGxpIG5nLXJlcGVhdD1cIml0ZW0gaW4gbGlzdFwiIGNsYXNzPVwibGlzdC1ncm91cC1pdGVtXCI+XFxuJyArXG4gICAgJ1x0XHRcdHt7aXRlbS5uYW1lfX1cXG4nICtcbiAgICAnXHRcdDwvbGk+XFxuJyArXG4gICAgJ1x0PC91bD4gXFxuJyArXG4gICAgJzwvZGl2PicpO1xufV0pO1xuXG5tb2R1bGUuZXhwb3J0cyA9IFwiL2NvbXBvbmVudHMvdGVzdC1saXN0L3Rlc3QtbGlzdC50ZW1wbGF0ZS5uZ3RcIjsiXX0=
