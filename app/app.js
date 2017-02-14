(function() {
    'use strict';
    var app = angular.module("boilerplateApp", ['ngRoute']);
    app.config(function($routeProvider) {
        $routeProvider
            .when('/', {
                template: '<pre>Index page of website </pre>'
            })
            .when('/home', {
                controller: 'HomeController',
                controllerAs: 'home',
                templateUrl: 'app/home/homeView.html'
            })
            .when('/about', {
                template: "<pre>About</pre>"
            })
            .when('/contact', {
                template: "<pre>Contact</pre>"
            })
            .otherwise('/');
    });

}());
