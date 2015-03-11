angular.module('MathStacks.services', [])
    .service('sharedProperties', function () {

        var usageType = '';
        var operatorType = '';
        var difficultyType = '';
        var questionAmount = '';
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
            }


        };
  });
