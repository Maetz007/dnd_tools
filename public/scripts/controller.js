var myApp = angular.module('myApp', ['ngRoute', 'ui-bootstrap']);

myApp.config(['$routeProvider', function($routeProvider){
  $routeProvider
    .when('/entryPage', {
      templateUrl: '/view/pages/entryPage.html',
    })
    .when('/abilities', {
      templateUrl: '/view/pages/abilities.html',
    })
    .otherwise({
      redirectTo:'entryPage'
    }); // end routeProvider
}]); // end myApp
