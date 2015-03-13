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
  //set correct location for next page load
  if(sharedProperties.getUsageType() == "practice"){
    $scope.nextPageFromUsageType = '/practicePage'
  }else{
    $scope.nextPageFromUsageType = '/questionAmount'
  }

  $scope.difficultyType = function(selectedDifficultyType) {
    sharedProperties.setDifficultyType(selectedDifficultyType);
    //if in practice mode, load initial problem at this point
    if(sharedProperties.getUsageType() == "practice"){
      sharedProperties.setQuestions(null);
    }
  };


}).
controller('questionAmountController', function($scope, sharedProperties) {

  $scope.questionAmountType = function(selectedQuestionAmountType) {
    sharedProperties.setQuestionAmountType(selectedQuestionAmountType);
    //if in quiz mode, load all problems at this point
    if(sharedProperties.getUsageType() == "quiz"){
      sharedProperties.setQuestions(null);
    }
  };



}).
controller('practicePageController', function($scope, sharedProperties) {





}).
controller('quizPageController', function($scope, sharedProperties) {

$scope.usageType = sharedProperties.getUsageType();
$scope.questionAmount = parseInt(sharedProperties.getQuestionAmountType());
$scope.difficulty = sharedProperties.getDifficultyType();
$scope.currentQuestion = sharedProperties.getCurrentQuestion();
// $scope.questionData = sharedProperties.getQuestionData();


// setupTable(questionData);


function setupQuiz(){

  if(usageType == 'custom'){
    //questionData = sharedProperties.getQuestionData();
  }else{
    //questionData = generateData(questionAmount);
  }

  //setupTable();

}



//change this to take as an input an array of json objects -- either generate or custom !!
// function setupTable(){
//
// }







//Helper Functions

// function generateData(questionAmount){
//
// }


//Used to get an array of size questionAmount for selector
$scope.getNumber = function(num) {
    return new Array(num);
}

});
