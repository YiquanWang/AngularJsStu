angular.module("wyqapp",[])
.run(function($rootScope){
	$rootScope.name = 'wyq';
})
.controller("wyqcontroller",function ($scope){
	$scope.clock = "world1";
})