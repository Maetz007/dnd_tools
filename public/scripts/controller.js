var myApp = angular.module('myApp', ['ngRoute']);

myApp.config(['$routeProvider', function($routeProvider){
  $routeProvider
    .when('/entryPage', {
      templateUrl: '/views/pages/entryPage.html',
      controller: 'entryPageController',
    })
    .when('/abilities', {
      templateUrl: '/views/pages/abilities.html',
      controller: 'abilitiesController',
    })
    .otherwise({
      redirectTo:'/entryPage'
    }); // end routeProvider
}]); // end myApp
