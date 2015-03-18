angular.module('MathStacks.directives', [])

// Click to navigate
// similar to <a href="#/partial"> but hash is not required,
// e.g. <div click-link="/partial">
.directive('clickLink', ['$location', function($location) {
    return {
        link: function(scope, element, attrs) {
            element.on('click', function() {
                scope.$apply(function() {
                    $location.path(attrs.clickLink);
                });
            });
        }
    }
}]);
