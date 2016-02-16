/**
 * Created by bimal on 2/5/16.
 */
 var app=angular.module("check",["ng.ckeditor"]).controller("editorController",['$scope',function($scope){
		$scope.htmlEditor="Hello World";
	 //$scope.Value="Nothing to say"
	 $scope.check= function()
	 {
	 	alert($scope.htmlEditor);
	 }
}])
