angular.module('MathStacks.services', [])
    .service('sharedProperties', function () {

        var usageType = '';
        var operatorType = '';
        var difficultyType = '';
        var questionAmount = '';
        var currentQuestionNumber = 0;
        var questions = [];
        var headerRow = [];
        var bodyColumn = [];
        var bodyInnerData = {};

        //used to prepare all questions for a quiz
        prepareAllQuestions = function(){

          var difficultyMaxNumber = 0;

          if(difficultyType = 'beginner'){
            difficultyMaxNumber = 10;
          } else if(difficultyType = 'challenger'){
            difficultyMaxNumber = 100;
          }


          //generate data!
          if(operatorType == 'addition'){

            for(var i = 0; i < questionAmount; i++){
              var generatedFirstNumber = Math.floor(Math.random()*difficultyMaxNumber);
              var generatedSecondNumber = Math.floor(Math.random()*difficultyMaxNumber);
              questions.push({"firstNumber":generatedFirstNumber});
              questions[i].secondNumber = generatedSecondNumber;

              questions[i].type = 'addition';
              questions[i].sign = '+';
              questions[i].answer = generatedFirstNumber+generatedSecondNumber;

              questions[i].firstNumberLength = generatedFirstNumber.toString().length;
              questions[i].secondNumberLength = generatedSecondNumber.toString().length;
              questions[i].answerNumberLength = dataArray[i].answer.toString().length;


            }
          }
        //   else if (operatorType == 'subtraction'){
        //     for(var i = 0; i < questionAmountSelection; i++){
        //
        //       var offset = Math.floor(Math.random()*difficultyMaxNumber);
        //       var generatedFirstNumber = (Math.floor(Math.random()*(difficultyMaxNumber-offset)) + offset);
        //       var generatedSecondNumber = Math.floor(Math.random()*(generatedFirstNumber+1));
        //       // var generatedFirstNumber = Math.floor(Math.random()*difficultyMaxNumber);
        // // 			var generatedSecondNumber = Math.floor(Math.random()*(generatedFirstNumber+1));
        //
        //
        //
        //
        //
        //       dataArray.push({"firstNumber":generatedFirstNumber});
        //       dataArray[i].secondNumber = generatedSecondNumber;
        //
        //       dataArray[i].type = 'subtraction';
        //       dataArray[i].sign = '-';
        //       dataArray[i].answer = generatedFirstNumber-generatedSecondNumber;
        //
        //       dataArray[i].firstNumberLength = generatedFirstNumber.toString().length;
        //       dataArray[i].secondNumberLength = generatedSecondNumber.toString().length;
        //       dataArray[i].answerNumberLength = dataArray[i].answer.toString().length;
        //
        //
        //     }
        //
        //   }
        //
        //



          generateArraysForViewDisplay()



        }
        //used to prepare a single question for practice
        prepareSingleQuestion = function(){

        }


        //also call this when you do the nextQuestion which is in the return bracket
        generateArraysForViewDisplay = function(){


          if(operatorType == 'addition'){
            //determine correct headers
            if(questions[currentQuestionNumber].answer > 99){
              headerRow = ["&nbsp;", "Hundreds Column", "Tens Column","Ones Column" ];
            } else if (questions[currentQuestionNumer].answer > 9){
              headerRow = ["&nbsp;", "Tens Column","Ones Column" ];
            } else {
              headerRow = ["&nbsp;", "Ones Column" ];
            }
            //determine correct body column
            if(questions[currentQuestionNumber].answer > 9){
              bodyColumn = ["Carry Column", "First Number", "Second Number", "Answer Row"];
            } else {
              bodyColumn = ["First Number", "Second Number", "Answer Row"];
            }




          }




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
