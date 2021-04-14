angular.module('kityminderEditor')
    .directive('loadFromRepo', ['$modal', function($modal) {
        return {
            restrict: 'E',
            templateUrl: 'ui/directive/loadFromRepo/loadFromRepo.html',
            scope: {
                minder: '='
            },
            replace: true,
            link: function ($scope) {
                $scope.load_from_repo = function() {

                    $modal.open({
                        animation: true,
                        templateUrl: 'ui/dialog/file/loadFromRepo.tpl.html',
                        controller: 'loadFromRepo.ctrl',
                        size: 'md',
                        scope: $scope,
                    });
                };
            }
        };
    }]);