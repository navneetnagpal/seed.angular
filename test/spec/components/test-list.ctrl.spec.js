


describe('Component: TestCtrl', function() {
    'use strict';

    // load the controller's module
    beforeEach(angular.mock.module('test.app'));

    var TestCtrl,
        scope,
        
        $httpBackend;

    // Initialize the controller and a mock scope
    beforeEach(inject(function($controller, $rootScope, _$httpBackend_) {
        scope = $rootScope.$new();
        $httpBackend = _$httpBackend_;
        TestCtrl = $controller('TestCtrl', {
            $scope: scope
        });
        scope.$digest();
    }));
    
    it('should be available', function() {  
        expect(TestCtrl).toBeDefined();
    });
    it('should should have 3 items in list', function() {  
        expect(scope.list.length).toBe(3);
    });
});