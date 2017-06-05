/*!
 * Start Bootstrap - SB Admin 2 v3.3.7+1 (http://startbootstrap.com/template-overviews/sb-admin-2)
 * Copyright 2013-2017 Start Bootstrap
 * Licensed under MIT (https://github.com/BlackrockDigital/startbootstrap/blob/gh-pages/LICENSE)
 */
'use strict';

angular.module('seed', [
    'ngRoute',
    'seed.services',
    'seed.controller.dashboard'
    // 'bitcurity.controller.hash',
    // 'bitcurity.controller.browser',
    // 'bitcurity.controller.settings',
    // 'bitcurity.directive.fileModel',
    // 'stormpath', 'stormpath.templates'
]).
config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/', {templateUrl: 'browser.html'})
        .when('/dashboard', {templateUrl: 'dashboard.html', controller: "dashboardController"})
        .when('/hash', {templateUrl: 'hash.html', controller: "hashController"})
        .when('/browser', {templateUrl: 'browser.html', controller: "browserController"})
        .when('/settings', {templateUrl: 'settings.html', controller: "settingsController"})
        .when('/login', {templateUrl: 'login.html', controller: "settingsController"})
        .when('/register', {templateUrl: 'register.html', controller: "settingsController"})
        .otherwise({redirectTo: '/'});
}]).
run(function($rootScope) {
    console.log("loading app");
});
