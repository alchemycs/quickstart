'use strict';

/* Services */

angular.module('app.services', ['ngResource']).
    value('version', '0.1').
    factory('yql', ['$http', '$q', function($http, $q) {
        var yql = function(statement, params) {
            var deferred = $q.defer();
            var queryParameters = {
                q:statement,
                format:'json',
                callback:'JSON_CALLBACK'
            };
            angular.extend(queryParameters, params);
            $http.jsonp('https://query.yahooapis.com/v1/public/yql', {
                params: queryParameters
            }).success(function(data, status, headers, config) {
                if (data.error) {
                    deferred.reject(data.error.description);
                    return;
                }
                deferred.resolve(data.query);
            }).error(function(data, status, headers, config) {
                deferred.reject(data);
            });
            return deferred.promise;
        };
        return yql;
    }]).
    factory('news', ['yql', '$q', function(yql, $q) {
        var newsFinder = function(text) {
            var deferred = $q.defer();
            yql('SELECT * FROM google.news WHERE q=@text AND ned="au"', { text:text, env:'store://datatables.org/alltableswithkeys',diagnostics:true }).
            then(function(query) {
                if (query.results) {
                    deferred.resolve(query.results.results);
                } else {
                    deferred.resolve(null);
                }
            }, function(error) {
                deferred.reject(error);
            });
            return deferred.promise;
        };

        return newsFinder;
    }]);