'use strict';

/* Controllers */

function PrimaryNavController($scope, $location) {
    
    $scope.isActive = function(relPath) {
        return (relPath == $location.path());
    };
}

function NewsController($scope, news) {

    $scope.news = null;
    $scope.query = "";

    $scope.doSearch = function() {
        $scope.news = news($scope.query);
    };
}
