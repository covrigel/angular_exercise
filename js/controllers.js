// in the [] we usually put the dependencies
var myApp = angular.module("myApp", []);

myApp.controller("MyController", function MyController($scope){
  // here we manually create a model
  $scope.author = {
    "name"    : "Alexandra",
    "title"   : "Jr Dev",
    "company" : "Dreamjob"
  }
});