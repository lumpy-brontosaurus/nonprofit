var app = angular.module('volunteer', ['ui.router', 'ngMap']);
//
app.controller('MainCtrl', ['$scope', function($scope){

    $scope.searchResult = [];
    $scope.filterContents = function(){
        $scope.searchResult.push({interest:$scope.item,zip:$scope.zip})
    };

}]);


app.config(function($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/home');

    $stateProvider

        .state('home', {
            url: '/home',
            templateUrl: 'app/volunteer/home.html'
        })

        .state('home.list', {
            url: '/list',
            templateUrl: 'app/volunteer/map.html'

        });

});