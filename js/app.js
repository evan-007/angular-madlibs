angular.module('myApp', [])
  .controller('mainController', function($scope){
    $scope.submit = function(){
      if($scope.myform.$valid) {
        console.log('form is valid ', $scope.data);
        $scope.finished = true;
      } else if($scope.myform.celebrity.$error) {
        console.log('celebrity is invalid');
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