angular.module('myApp', [])
  .controller('mainController', function($scope){
    $scope.person = {
      name: "name",
      gender: "male"
    },
    $scope.jobTitle = "job title",
    $scope.tediousTask = "tedious task",
    $scope.dirtyTask = "dirty task",
    $scope.celebrity = "celebrity",
    $scope.uselessSkill = "useless skill",
    $scope.obnoxiousCelebrity = "obnoxious celebrity",
    $scope.hugeNumber = "huge number",
    $scope.adjective = "adjective"
  });