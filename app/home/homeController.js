(function() {
    'use strict';

    angular.module('boilerplateApp')
        .controller('HomeController', [ HomeController ]);

    function HomeController() {
        var vm = this;

        vm.message = "Home controller says hello";
    }

}());
