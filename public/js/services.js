angular.module('MathStacks.services', [])
    .service('sharedProperties', function () {

        var usageType = '';
        var operatorType = '';
        var difficultyType = '';
        var questionAmount = '';
        var currentQuestionNumber = 0;
        var questions = [];

        prepareAllQuestions = function(){
          alert("hello");
          alert(currentQuestion);
        }

        prepareSingleQuestion = function(){
          alert("single question");
        }


        return {
            getUsageType: function () {
                return usageType;
            },
            setUsageType: function(value) {
                usageType = value;
            },
            getOperatorType: function () {
                return operatorType;
            },
            setOperatorType: function(value) {
                operatorType = value;
            },
            getDifficultyType: function () {
                return difficultyType;
            },
            setDifficultyType: function(value) {
                difficultyType = value;
            },
            getQuestionAmountType: function () {
                return questionAmount;
            },
            setQuestionAmountType: function(value) {
                questionAmount = value;
            },
            getQuestions: function() {
                return questions;
            },
            setQuestions: function(value){
                if(usageType == 'practice'){
                  prepareSingleQuestion();
                } else if (usageType == 'quiz'){
                  prepareAllQuestions();
                } else if (usageType == 'custom'){
                  questions = value;
                }
            },
            getCurrentQuestionNumber: function() {
                return currentQuestionNumber;
            },
            setCurrentQuestionNumber: function(value) {
                currentQuestionNumber = value;
            },
            getCurrentQuestion: function() {
                return questions[currentQuestionNumber];
            },
            //work on implementing this for different versions different functionalities
            nextQuestion: function(){

            }



        };
  });
