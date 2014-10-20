var app = angular.module('myApp', []);

app.controller('postCtrl', ['$scope', '$http', function($scope, $http) {
    $scope.posts = [];
    $http.get('assets/data/posts.json').success(function(data) {
        $scope.posts = data;
    });
}]);



app.controller('iconsCtrl', ['$scope', '$http', function($scope, $http) {
    $scope.icons = [];
    $http.get('assets/data/icons-sidebar-left.json')
        .success(function(data) {
            $scope.icons = data;
        });
}]);
