angular.module('myApp', ['ngAnimate'])
  .controller('mainController', function($scope){
    $scope.submit = function(){
      if($scope.myform.$valid) {
        console.log('form is valid ', $scope.data);
        $scope.finished = true;
      } else {
        console.log('the form is invalid');
      }
    };
    $scope.clearForm = function() {
      $scope.data = {
        name: "",
        gender: "",
        jobTitle: "",
        tediousTask: "",
        dirtyTask: "",
        celebrity: "",
        uselessSkill: "",
        obnoxiousCelebrity: "",
        hugeNumber: "",
        adjective: ""
      };
    };

  });