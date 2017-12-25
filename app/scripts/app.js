angular.module('myApp', ['ui.router', 'dx']);

angular.module('myApp').config(['$stateProvider', '$urlRouterProvider', '$locationProvider', function($stateProvider, $urlRouterProvider, $locationProvider) {
    $locationProvider.html5Mode({
        enabled: true,
        requireBase: false
    });

    $stateProvider
        .state('dashboard', {
            url: '/dashboard',
            templateUrl: 'scripts/view/dashboard.html',
            controller: 'dashboardCtrl'
        })
        .state('news', {
            url: '/news',
            templateUrl: 'scripts/view/news.html',
            controller: 'newsCtrl'
        });

    $urlRouterProvider.otherwise('/news');

}]);