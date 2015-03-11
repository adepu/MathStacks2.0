angular.module('MathStacks', [
   'MathStacks.controllers',
   'MathStacks.services',
   'MathStacks.directives',
   'ngRoute'
 ]).
 config(['$routeProvider', function($routeProvider) {
   $routeProvider.
   when("/studentHomePage", {templateUrl: "views/studentHomePage.html", controller: "studentHomePageController"}).
   when("/operatorSelection", {templateUrl: "views/operatorSelection.html", controller: "operatorSelectionController"}).
   when("/difficultySelection", {templateUrl: "views/difficultySelection.html", controller: "difficultySelectionController"}).
   otherwise({redirectTo: '/studentHomePage'});
 }]);
