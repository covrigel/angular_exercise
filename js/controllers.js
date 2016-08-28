// in the [] we usually put the dependencies
var myApp = angular.module("myApp", []);

myApp.controller("MyController",["$scope", "$http", function($scope, $http){
  // here we manually create a model
  $http.get("js/data.json").success(function(data){
    $scope.artists = data;
    $scope.artistOrder = "name";
  });
}]);