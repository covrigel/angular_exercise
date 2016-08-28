// in the [] we usually put the dependencies
var myApp = angular.module("myApp", []);

myApp.controller("MyController", function MyController($scope){
  // here we manually create a model
  $scope.artists = [
  {
    "name"    : "Alexandra",
    "shortname": "alexandra_n",
    "title"   : "Jr Dev",
    "company" : "Dreamjob"
  },
  {
    "name"    : "Vladimir",
    "shortname": "vladimir_n",
    "title"   : "QA Lead",
    "company" : "Awesomejob"
  },
  {
    "name"    : "Ileana",
    "shortname": "ileana_n",
    "title"   : "Pharmacist",
    "company" : "Greatjob"
  },
  {
    "name"    : "Grigore",
    "shortname": "grigore_n",
    "title"   : "Restaurant Manager",
    "company" : "Greatrestaurant"
  }
]
});