/**
 * Created by Shashank on 3/4/2015.
 */

 angular.module('MathStacks', [
   'MathStacks.controllers',
   'ngRoute'
 ]).
 config(['$routeProvider', function($routeProvider) {
   $routeProvider.
   when("/studentHomePage", {templateUrl: "views/studentHomePage.html", controller: "studentHomePageController"}).
   otherwise({redirectTo: '/studentHomePage'});
 }]);
