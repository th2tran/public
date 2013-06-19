// For an introduction to the Blank template, see the following documentation:
// http://go.microsoft.com/fwlink/?LinkId=232509
(function () {
    "use strict";

    WinJS.Binding.optimizeBindingReferences = true;

    var app = WinJS.Application;
    var activation = Windows.ApplicationModel.Activation;

    app.onactivated = function (args) {
        if (args.detail.kind === activation.ActivationKind.launch) {
            if (args.detail.previousExecutionState !== activation.ApplicationExecutionState.terminated) {
                // TODO: This application has been newly launched. Initialize
                // your application here.
            } else {
                // TODO: This application has been reactivated from suspension.
                // Restore application state here.
            }
            args.setPromise(WinJS.UI.processAll());
        }
    };

    app.oncheckpoint = function (args) {
        // TODO: This application is about to be suspended. Save any state
        // that needs to persist across suspensions here. You might use the
        // WinJS.Application.sessionState object, which is automatically
        // saved and restored across suspension. If you need to complete an
        // asynchronous operation before your application is suspended, call
        // args.setPromise().
    };

    // AngularJS Stuff
    var myApp = angular.module('myApp', []);
    myApp.config(function ($routeProvider) {
        $routeProvider
            .when('/',
                {
                    controller: 'SimpleController',
                    templateUrl: 'Partials/View1.html'
                })
            .when('/view2',
                {
                    controller: 'SimpleController',
                    templateUrl: 'Partials/View2.html'
                })
            .otherwise({ redirectTo: '/' });
    });

    myApp.factory('simpleFactory', function () {
        var customers = [
            { name: 'Dave Jones', city: 'Phoenix' },
            { name: 'Jamie Riley', city: 'Atlanta' },
            { name: 'Thanh Tran', city: 'Toronto' },
            { name: 'Thomas More', city: 'London' },
            { name: 'Ludwig Beethovan', city: 'Vienna' },
            { name: 'Wolfgang Mozard', city: 'Vienna' },
            { name: 'Johann Sebastian Bach', city: 'Eisenach' },
            { name: 'Johannes Brhams', city: 'Hamburg' },
            { name: 'George Handel', city: 'Halle' },
            { name: 'Pyotr Tchaikovsky', city: 'Votkinsk' },
            { name: 'Franz Liszt', city: 'Raiding' },
            { name: 'Richard Wagner', city: 'Leipzig' },
            { name: 'Franz Schubert', city: 'Vienna' },
            { name: 'Antonio Vivaldi', city: 'Venice' },
            { name: 'Felix Mendelssohn-Bartholdy', city: 'Hamburg' },
            { name: 'Robert Alexander Schumann', city: 'Zwickau' },
            { name: 'Igor Stravinsky', city: 'Oranienbaum' },
            { name: 'Antonín Dvořák', city: 'Nelahozeves' },
            { name: 'Gustav Mahler', city: 'Kaliště' },
            { name: 'Hector Berlioz', city: 'La Côte-Saint-André' },
            { name: 'Maurice Ravel', city: 'Ciboure' },
        ];

        var factory = {};
        factory.getCustomers = function () {
            return customers;
        }
        factory.postCustomer = function (cust) {
            // todo
        };

        return factory;
    });

    myApp.controller('SimpleController', function ($scope, simpleFactory) {
        $scope.customers = [];
        init();

        $scope.addCustomer = function () {
            $scope.customers.push({ name: $scope.newCustomer.name, city: $scope.newCustomer.city });
        };

        function init() {
            $scope.customers = simpleFactory.getCustomers();
        }
    });
    app.start();
})();

