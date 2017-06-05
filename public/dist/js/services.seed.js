/*!
 * Start Bootstrap - SB Admin 2 v3.3.7+1 (http://startbootstrap.com/template-overviews/sb-admin-2)
 * Copyright 2013-2017 Start Bootstrap
 * Licensed under MIT (https://github.com/BlackrockDigital/startbootstrap/blob/gh-pages/LICENSE)
 */
'use strict';

angular.module('seed.services', [])
    .factory('seedApi', function ($http) {

        var seedApi = {};
        var baseUrl = 'https://';

        var getUrl = baseUrl + '/get';
        seedApi.get = function() {
            return $http({method: 'GET', url: getUrl});
        };

        var postUrl = baseUrl + '/post';
        seedApi.post = function(inputData) {
            return $http({method: 'POST', url: postUrl, data: inputData, headers: {'Content-Type': 'application/json'}});
        };

        return seedApi;
    });
