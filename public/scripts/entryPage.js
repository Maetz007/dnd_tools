myApp.controller('entryPageController',
['$scope', '$http', '$rootScope', '$location',
function($scope, $http, $rootScope, $location){

  $scope.test = function() {
    console.log("test button pushed");
    // var path = "#abilitiesPage";
    // window.location.href = path;
  };

  $scope.abilitiesPage = function() {
    var path = "#abilities";
    window.location.href = path;
  }; // end openTextPopup

}]); // end myApp.controller
