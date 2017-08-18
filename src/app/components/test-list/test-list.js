var template = require('./test-list.template.ngt');
var $ = require('jquery');
module.exports = function() {

    return {
        templateUrl: template,
        restrict: 'EA',
        link: function(scope, element) {

        }
    };
};