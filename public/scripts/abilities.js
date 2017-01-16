myApp.controller('abilitiesController',
['$scope', '$http', '$rootScope', '$location',
function($scope, $http, $rootScope, $location){

  $scope.practiceBtn = function() {
    console.log("I've been pushed! yay for practice!!");
  };

  $scope.entryPage = function() {
    var path = "#entryPage";
    window.location.href = path;
  }; // end openTextPopup

}]); // end myApp.controller
