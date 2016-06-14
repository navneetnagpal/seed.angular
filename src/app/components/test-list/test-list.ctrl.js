
function TestCtrl($scope) {
    $scope.list = [
        {name:'This is awsome'},
        {name:'Good for start'},
        {name:'I want to extend this further'}
    ];

}

TestCtrl.$inject = ['$scope'];
module.exports = TestCtrl;