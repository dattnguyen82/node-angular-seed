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
