angular.module('MathStacks.controllers', []).
controller('studentHomePageController', function($scope, sharedProperties) {
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
  alert(sharedProperties.getOperatorType());
  alert(sharedProperties.getUsageType());
});
