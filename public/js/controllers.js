angular.module('MathStacks.controllers', []).
controller('studentHomePageController', function($scope, sharedProperties, $sce) {
  $scope.usageType = function(selectedUsageType) {
    sharedProperties.setUsageType(selectedUsageType);
  };

}).
controller('operatorSelectionController', function($scope, sharedProperties) {
  $scope.operatorType = function(selectedOperatorType) {
    sharedProperties.setOperatorType(selectedOperatorType);
  };
}).
controller('difficultySelectionController', function($scope, sharedProperties) {

  $scope.difficultyType = function(selectedDifficultyType) {
    sharedProperties.setDifficultyType(selectedDifficultyType);
  };
  if(sharedProperties.getUsageType() == "practice"){
    $scope.nextPageFromUsageType = '/problemPage'
  }else{
    $scope.nextPageFromUsageType = '/questionAmount'
  }
  alert(sharedProperties.getOperatorType());
  alert(sharedProperties.getUsageType());
}).
controller('questionAmountController', function($scope, sharedProperties) {
  $scope.difficultyType = function(selectedDifficultyType) {
    sharedProperties.setDifficultyType(selectedDifficultyType);
  };
  alert(sharedProperties.getOperatorType());
  alert(sharedProperties.getUsageType());
  alert(sharedProperties.getDifficultyType());
}).
controller('problemPageController', function($scope, sharedProperties) {
  $scope.difficultyType = function(selectedDifficultyType) {
    sharedProperties.setDifficultyType(selectedDifficultyType);
  };
  alert(sharedProperties.getOperatorType());
  alert(sharedProperties.getUsageType());
  alert(sharedProperties.getDifficultyType());
  alert(sharedProperties.getQuestionAmountType());
});
