


describe('Component: testList', function() {
    'use strict';

    // load the controller's module
    beforeEach(angular.mock.module('test.app'));

    var element,
        scope;

    beforeEach(inject(function($rootScope, $compile, _$httpBackend_) {
        scope = $rootScope.$new();
        scope.list = ['Awesome']
        element = '<div test-list=""></div>';
        element = $compile(element)(scope);

    }));
   
    describe("test-list: Basic", function() {
        beforeEach(function(){
            scope.$digest();

        });
        it('should create list > ul', function() {
            expect((element).find('.list-group').length).toBe(1);
        });
        it('should create 1 item', function() {
            expect((element).find('.list-group-item').length).toBe(1);
        });
    });
});