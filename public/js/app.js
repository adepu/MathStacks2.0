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
   when("/questionAmount", {templateUrl: "views/questionAmount.html", controller: "questionAmountController"}).
   when("/quizPage", {templateUrl: "views/quizPage.html", controller: "quizPageController"}).
   when("/practicePage", {templateUrl: "views/practicePage.html", controller: "practicePageController"}).
   otherwise({redirectTo: '/studentHomePage'});
 }]);
