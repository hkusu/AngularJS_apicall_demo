'use strict';

angular.module('testApp')
    .controller('MainCtrl', ['$scope', '$http', function ($scope, $http) {

        var $uri ='data/sample.json';

        $scope.doSearch = function() {

            $http({
                method : 'GET',
                url : $uri
            }).success(function(data, status, headers, config) {
                $scope.results = data.data;
                console.log(status);
                console.log(data);
            }).error(function(data, status, headers, config) {
                console.log(status);
            });
        };

        $scope.hello = {
            text : "Hello"
        };

    }]);