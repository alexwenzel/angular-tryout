// load modules
angular.module("app", ['ngRoute'])

// an item
.factory("TextboxItem", function(){
  return new TextboxItem();
})

// the global repository
.service("RepositoryService", [function(){
  return [];
}])

// router
.config(function($routeProvider){
  $routeProvider
    .when('/', {
      controller:'createController',
      templateUrl:'create.html',
    })
    .when('/edit/:itemID', {
      controller:'editController',
      templateUrl:'edit.html',
    })
    .otherwise({
      redirectTo:'/'
    });
})

// controller for main area
.controller('mainController', ["$scope","RepositoryService",function($scope, RepositoryService) {
  $scope.repository = RepositoryService;
}])

// controller for create
.controller('createController', ["$scope","RepositoryService",function($scope, RepositoryService) {

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

}])

// controller for edit area
.controller('editController', ["$scope","$routeParams","RepositoryService",function($scope,$routeParams,RepositoryService) {

  var id = $routeParams.itemID;

  $scope.item = RepositoryService[id];

}]);
