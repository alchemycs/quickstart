'use strict';

// Declare app level module which depends on filters, and services
angular.module('app', ['app.filters', 'app.services', 'app.directives', 'ngSanitize']).
    config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
        function redirectController($window, $location) {
            $window.location = $location.absUrl();   
        }
//        $locationProvider.html5Mode(true);
//        $locationProvider.hashPrefix('!');
//        $routeProvider.when('/view1', {templateUrl: '/partials/partial1.html', controller: View1Controller});
//        $routeProvider.when('/view2', {templateUrl: '/partials/view2.html', controller: View2Controller, reloadOnSearch:false});
//        $routeProvider.otherwise({ template:'<div></div>', controller:redirectController });
//        $routeProvider.otherwise({ redirectTo:'/' });
    }]);
