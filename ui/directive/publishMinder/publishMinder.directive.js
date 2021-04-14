angular.module('kityminderEditor')
    .directive('publishMinder', ['$modal', 'server', function($modal, sever) {
        return {
            restrict: 'E',
            templateUrl: 'ui/directive/publishMinder/publishMinder.html',
            scope: {
                minder: '='
            },
            replace: true,
            link: function ($scope) {
                $scope.publish_minder = function() {
                    $modal.open({
                        animation: true,
                        templateUrl: 'ui/dialog/file/publishMinder.tpl.html',
                        controller: 'publishMinder.ctrl',
                        size: 'md',
                        scope: $scope
                        // resolve: {
                        //     image: function() {
                        //         return image;
                        //     }
                        // }
                    });
                };
            }
        };
    }]);