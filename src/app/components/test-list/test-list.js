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