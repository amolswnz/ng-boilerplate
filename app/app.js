(function() {
    'use strict';

    angular
        .module("boilerplateApp", [
            'ngRoute'
        ])
        .config(function($routeProvider) {
            $routeProvider
                .when('/', {
                    template: '<pre>Index page of website </pre>'
                })
                .when('/home', {
                    controller: 'HomeController',
                    controllerAs: 'home',
                    templateUrl: 'app/home/home.html'
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
