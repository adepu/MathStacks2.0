angular.module('MathStacks.services', [])
    .service('sharedProperties', function () {

        var usageType = 'practice';
        var operatorType = 'addition';
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
            }

        };
  });
