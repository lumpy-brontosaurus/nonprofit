var app = angular.module('volunteer', ['ui.router']);

app.controller('MainCtrl', ['$scope', function($scope){

    $scope.searchResult = [];
    $scope.filterContents = function(){

    }


    }]);

app.config(function($urlRouterProvider, $stateProvider) {

    $urlRouterProvider
        .otherwise('/');
    $stateProvider
        .state('home', {
            url: '/',
            templateUrl: 'app/volunteer/home.html',
            controller: 'MainCtrl'
        });
});