'use strict';

/* Directives */


angular.module('app.directives', []).
    directive('appVersion', ['version', function(version) {
        return function(scope, element, attrs) {
            element.text(version);
        };
    }]);