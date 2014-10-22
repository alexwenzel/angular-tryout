// load modules, and create app
var app = angular.module("app", ['ngRoute']);

// app item factory
app.factory("TextboxItem", function(){
  return new TextboxItem();
});

// the global item repository
app.service("RepositoryService", [function(){
  return [];
}]);

// app router
app.config(function($routeProvider){
  $routeProvider
    .when('/', {
      controller:'createController',
      templateUrl:'create.html',
    })
    .when('/edit/:itemId', {
      controller:'editController',
      templateUrl:'edit.html',
    })
    .otherwise({
      redirectTo:'/'
    });
});

// controller for main area
app.controller('mainController', ["$scope","RepositoryService",function($scope, RepositoryService) {
  $scope.repository = RepositoryService;
}]);

// controller editor area: create
app.controller('createController', ["$scope","RepositoryService",function($scope, RepositoryService) {

  $scope.addItem = function() {

    var options = {
      top: $scope.top,
      left: $scope.left,
      text: $scope.text,
      color: $scope.color
    };

    RepositoryService.push(new TextboxItem(options));

    $scope.top = "";
    $scope.left = "";
    $scope.text = "";
    $scope.color = "";
  };

}]);

// controller editor area: edit
app.controller('editController', ["$scope","$routeParams","RepositoryService",function($scope,$routeParams,RepositoryService) {

  var itemId = $routeParams.itemId;

  $scope.item = RepositoryService[itemId];

}]);
