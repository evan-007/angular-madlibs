angular.module('myApp', [])
  .controller('mainController', function($scope){
    $scope.submit = function(){
      if($scope.myform.$valid) {
        console.log('form is valid ', $scope.data);
      } else {
        console.log('the form is invalid');
      }
    };
    $scope.data = {
      name: "name",
      gender: "male",
      jobTitle: "job title",
      tediousTask: "tedious task",
      dirtyTask: "dirty task",
      celebrity: "celebrity",
      uselessSkill: "useless skill",
      obnoxiousCelebrity: "obnoxious celebrity",
      hugeNumber: "huge number",
      adjective: "adjective"
    };
  });