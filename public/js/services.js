angular.module('MathStacks.services', [])
    .service('sharedProperties', function () {

        var usageType = '';
        var operatorType = '';
        var difficultyType = '';
        var questionAmount = '';
        var currentQuestionNumber = 0;
        var questionDescription = '';
        var questions = [];
        var headerRow = [];
        var bodyColumn = [];
        var bodyInnerData = {};




        //used to prepare all questions for a quiz
        prepareAllQuestions = function(){
          questions = [];
          headerRow = [];
          bodyColumn = [];
          bodyInnerData = {};
          var difficultyMaxNumber = 0;

          if(difficultyType == 'beginner'){
            difficultyMaxNumber = 10;
          } else if(difficultyType == 'challenger'){
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
              questions[i].answerNumberLength = questions[i].answer.toString().length;


            }

            console.log(questions);
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

          questionDescription = "Question " + (currentQuestionNumber+1).toString() + ": What does " + (questions[currentQuestionNumber].firstNumber).toString() + " " + questions[currentQuestionNumber].sign + " " + (questions[currentQuestionNumber].secondNumber).toString() + " equal?";
          first = questions[currentQuestionNumber].firstNumber.toString();
          second = questions[currentQuestionNumber].secondNumber.toString();
          sign = questions[currentQuestionNumber].sign.toString();
          if(operatorType == 'addition'){
            //determine correct headers
            if(questions[currentQuestionNumber].answer > 99){
              headerRow = ["&nbsp;", "Hundreds Column", "Tens Column","Ones Column" ];
              bodyColumn = [];

              carryRow = [];
              carryRow.push("Carry Row");
              firstNumber = [];
              firstNumber.push("First Number");
              secondNumber = [];
              secondNumber.push("Second Number");
              answerRow = [];
              answerRow.push("Answer Row");

              carryRow.push("<input type='text' id='tensCarry' pattern='[0-9]*' name='Tens Carry' maxlength='1'>");
              firstNumber.push("&nbsp;");
              secondNumber.push("&nbsp;");
              answerRow.push("=<input type='text' ng-model='hundredsAnswerNumber' id='hundredsAnswer' pattern='[0-9]*' name='Hundreds Answer' maxlength='1'>");


              if(((parseInt(questions[currentQuestionNumber].firstNumber) % 10) + (parseInt(questions[currentQuestionNumber].secondNumber) % 10)) < 10){
                carryRow.push("&nbsp;");
              } else {
                carryRow.push("<input type='text' id='onesCarry' pattern='[0-9]*' name='Ones Carry' maxlength='1'>");
              }

              if(parseInt(questions[currentQuestionNumber].firstNumber) < 10){
                firstNumber.push("&nbsp;");
              } else {
                firstNumber.push(((parseInt(questions[currentQuestionNumber].firstNumber / 10)) % 10).toString());
              }

              if(parseInt(questions[currentQuestionNumber].secondNumber) < 10){
                secondNumber.push("&nbsp;");
              } else {
                secondNumber.push("+" + ((parseInt(questions[currentQuestionNumber].secondNumber / 10)) % 10).toString());
              }

              answerRow.push("<input type='text' ng-model='trackingData.tensAnswer' id='tensAnswer' pattern='[0-9]*' name='Tens Answer' maxlength='1'>");



              carryRow.push("&nbsp;");
              firstNumber.push((parseInt(questions[currentQuestionNumber].firstNumber) % 10).toString());
              if(parseInt(questions[currentQuestionNumber].secondNumber) < 10){
                secondNumber.push("+" + (parseInt(questions[currentQuestionNumber].secondNumber) % 10).toString());
              }else{
                secondNumber.push((parseInt(questions[currentQuestionNumber].secondNumber) % 10).toString());
              }
              answerRow.push("<input type='text' ng-model='trackingData.onesAnswer' id='onesAnswer' pattern='[0-9]*' name='Ones Answer' maxlength='1'>");


              bodyColumn.push(carryRow);
              bodyColumn.push(firstNumber);
              bodyColumn.push(secondNumber);
              bodyColumn.push(answerRow);




            } else if (questions[currentQuestionNumber].answer > 9){
              headerRow = ["&nbsp;", "Tens Column","Ones Column" ];
              bodyColumn = [];

              carryRow = [];
              carryRow.push("Carry Row");
              firstNumber = [];
              firstNumber.push("First Number");
              secondNumber = [];
              secondNumber.push("Second Number");
              answerRow = [];
              answerRow.push("Answer Row");

              if(((parseInt(questions[currentQuestionNumber].firstNumber) % 10) + (parseInt(questions[currentQuestionNumber].secondNumber) % 10)) < 10){
                carryRow.push("&nbsp;");
              } else {
                carryRow.push("<input type='text' id='onesCarry' pattern='[0-9]*' name='Ones Carry' maxlength='1'>");
              }

              if(parseInt(questions[currentQuestionNumber].firstNumber) < 10){
                firstNumber.push("&nbsp;");
              } else {
                firstNumber.push(((parseInt(questions[currentQuestionNumber].firstNumber / 10)) % 10).toString());
              }

              if(parseInt(questions[currentQuestionNumber].secondNumber) < 10){
                secondNumber.push("&nbsp;");
              } else {
                secondNumber.push("+" + ((parseInt(questions[currentQuestionNumber].secondNumber / 10)) % 10).toString());
              }

              answerRow.push("=<input type='text' ng-model='trackingData.tensAnswer' id='tensAnswer' pattern='[0-9]*' name='Tens Answer' maxlength='1'>");



              carryRow.push("&nbsp;");
              firstNumber.push((parseInt(questions[currentQuestionNumber].firstNumber) % 10).toString());
              if(parseInt(questions[currentQuestionNumber].secondNumber) < 10){
                secondNumber.push("+" + (parseInt(questions[currentQuestionNumber].secondNumber) % 10).toString());
              }else{
                secondNumber.push((parseInt(questions[currentQuestionNumber].secondNumber) % 10).toString());
              }
              answerRow.push("<input type='text' ng-model='trackingData.onesAnswer' id='onesAnswer' pattern='[0-9]*' name='Ones Answer' maxlength='1'>");


              bodyColumn.push(carryRow);
              bodyColumn.push(firstNumber);
              bodyColumn.push(secondNumber);
              bodyColumn.push(answerRow);


            } else {
              headerRow = ["&nbsp;", "Ones Column" ];
              bodyColumn = [];

              firstNumber = [];
              firstNumber.push("First Number");
              secondNumber = [];
              secondNumber.push("Second Number");
              answerRow = [];
              answerRow.push("Answer Row");

              firstNumber.push((parseInt(questions[currentQuestionNumber].firstNumber) % 10).toString());

              secondNumber.push("+" + (parseInt(questions[currentQuestionNumber].secondNumber) % 10).toString());

              answerRow.push("=<input type='text' ng-model='trackingData.onesAnswer' id='onesAnswer' pattern='[0-9]*' name='Ones Answer' maxlength='1'>");



              bodyColumn.push(firstNumber);
              bodyColumn.push(secondNumber);
              bodyColumn.push(answerRow);





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
            getQuestionDescription: function() {
                return questionDescription;
            },
            getHeaderRow: function() {
                return headerRow;
            },
            getBodyColumn: function() {
                return bodyColumn;
            },
            getBodyInnerData: function() {
                return bodyInnerData;
            },
            getFirst: function() {
                return first;
            },
            getSecond: function() {
                return second;
            },
            getSign: function() {
                return sign;
            },


            //work on implementing this for different versions different functionalities
            nextQuestion: function(){

            }



        };
  });
