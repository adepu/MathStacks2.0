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
              questions[i].answerNumberLength = questions[i].answer.toString().length;


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

          questionDescription = "Question " + (currentQuestionNumber+1).toString() + ": What does " + (questions[currentQuestionNumber].firstNumber).toString() + " " + questions[currentQuestionNumber].sign + " " + (questions[currentQuestionNumber].secondNumber).toString() + " equal?";

          if(operatorType == 'addition'){
            //determine correct headers
            if(questions[currentQuestionNumber].answer > 99){
              headerRow = ["&nbsp;", "Hundreds Column", "Tens Column","Ones Column" ];
              bodyColumn = ["Carry Row", "First Number", "Second Number", "Answer Row"];

              hundredsColumn = {};
              hundredsColumn["Carry Row"] = "<input type='text' id='tensCarry' pattern='[0-9]*' name='Tens Carry' maxlength='1'>";
              hundredsColumn["First Number"] = "&nbsp;";
              hundredsColumn["Second Number"] = "&nbsp;";
              hundredsColumn["Answer Row"] = "=<input type='text' id='hundredsAnswer' pattern='[0-9]*' name='Hundreds Answer' maxlength='1'>";

              tensColumn = {};
              if(((parseInt(questions[currentQuestionNumber].firstNumber) % 10) + (parseInt(questions[currentQuestionNumber].secondNumber) % 10)) < 10){
                tensColumn["Carry Row"] = "&nbsp;";
              } else {
                tensColumn["Carry Row"] = "<input type='text' id='onesCarry' pattern='[0-9]*' name='Ones Carry' maxlength='1'>";
              }

              if(parseInt(questions[currentQuestionNumber].firstNumber) < 10){
                tensColumn["First Number"] = "&nbsp;";
              } else {
                tensColumn["First Number"] = ((parseInt(questions[currentQuestionNumber].firstNumber) / 10) % 10).toString();
              }

              if(parseInt(questions[currentQuestionNumber].secondNumber) < 10){
                tensColumn["Second Number"] = "&nbsp;";
              } else {
                tensColumn["Second Number"] = "+" + ((parseInt(questions[currentQuestionNumber].secondNumber) / 10) % 10).toString();
              }

              tensColumn["Answer Row"] = "<input type='text' id='tensAnswer' pattern='[0-9]*' name='Tens Answer' maxlength='1'>";

              onesColumn = {};

              onesColumn["Carry Row"] = "&nbsp;";
              onesColumn["First Number"] = (parseInt(questions[currentQuestionNumber].firstNumber) % 10).toString();
              if(parseInt(questions[currentQuestionNumber].secondNumber) < 10){
                onesColumn["Second Number"] = "+" + (parseInt(questions[currentQuestionNumber].secondNumber) % 10).toString();
              }else{
                onesColumn["Second Number"] = (parseInt(questions[currentQuestionNumber].secondNumber) % 10).toString();
              }
              onesColumn["Answer Row"] = "<input type='text' id='onesAnswer' pattern='[0-9]*' name='Ones Answer' maxlength='1'>";


              bodyInnerData = {

                "Hundreds Column": hundredsColumn,
                "Tens Column": tensColumn,
                "Ones Column": onesColumn,


              }



            } else if (questions[currentQuestionNumber].answer > 9){
              headerRow = ["&nbsp;", "Tens Column","Ones Column" ];
              bodyColumn = ["Carry Column", "First Number", "Second Number", "Answer Row"];



              tensColumn = {};
              if(((parseInt(questions[currentQuestionNumber].firstNumber) % 10) + (parseInt(questions[currentQuestionNumber].secondNumber) % 10)) < 10){
                tensColumn["Carry Row"] = "&nbsp;";
              } else {
                tensColumn["Carry Row"] = "<input type='text' id='onesCarry' pattern='[0-9]*' name='Ones Carry' maxlength='1'>";
              }

              if(parseInt(questions[currentQuestionNumber].firstNumber) < 10){
                tensColumn["First Number"] = "&nbsp;";
              } else {
                tensColumn["First Number"] = ((parseInt(questions[currentQuestionNumber].firstNumber) / 10) % 10).toString();
              }

              if(parseInt(questions[currentQuestionNumber].secondNumber) < 10){
                tensColumn["Second Number"] = "&nbsp;";
              } else {
                tensColumn["Second Number"] = "+" + ((parseInt(questions[currentQuestionNumber].secondNumber) / 10) % 10).toString();
              }

              tensColumn["Answer Row"] = "=<input type='text' id='tensAnswer' pattern='[0-9]*' name='Tens Answer' maxlength='1'>";

              onesColumn = {};

              onesColumn["Carry Row"] = "&nbsp;";
              onesColumn["First Number"] = (parseInt(questions[currentQuestionNumber].firstNumber) % 10).toString();
              if(parseInt(questions[currentQuestionNumber].secondNumber) < 10){
                onesColumn["Second Number"] = "+" + (parseInt(questions[currentQuestionNumber].secondNumber) % 10).toString();
              }else{
                onesColumn["Second Number"] = (parseInt(questions[currentQuestionNumber].secondNumber) % 10).toString();
              }
              onesColumn["Answer Row"] = "<input type='text' id='onesAnswer' pattern='[0-9]*' name='Ones Answer' maxlength='1'>";


              bodyInnerData = {

                "Tens Column": tensColumn,
                "Ones Column": onesColumn,

              }






            } else {
              headerRow = ["&nbsp;", "Ones Column" ];
              bodyColumn = ["First Number", "Second Number", "Answer Row"];

              onesColumn = {};

              onesColumn["First Number"] = (parseInt(questions[currentQuestionNumber].firstNumber) % 10).toString();

              onesColumn["Second Number"] = "+" + (parseInt(questions[currentQuestionNumber].secondNumber) % 10).toString();

              onesColumn["Answer Row"] = "=<input type='text' id='onesAnswer' pattern='[0-9]*' name='Ones Answer' maxlength='1'>";


              bodyInnerData = {

                "Ones Column": onesColumn

              }




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

            //work on implementing this for different versions different functionalities
            nextQuestion: function(){

            }



        };
  });
