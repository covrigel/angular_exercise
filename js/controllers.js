// in the [] we usually put the dependencies
var artistControllers = angular.module("artistControllers", []);

artistControllers.controller("ListController",["$scope", "$http", function($scope, $http){
  // here we manually create a model
  $http.get("js/data.json").success(function(data){
    $scope.artists = data;
    $scope.artistOrder = "name";
  });
}]);