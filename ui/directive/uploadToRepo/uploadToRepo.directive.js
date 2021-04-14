angular.module('kityminderEditor')
    .directive('uploadToRepo', ['$modal', function($modal) {
        return {
            restrict: 'E',
            templateUrl: 'ui/directive/uploadToRepo/uploadToRepo.html',
            scope: {
                minder: '='
            },
            replace: true,
            link: function ($scope) {
                $scope.upload_to_repo = function() {
                    $modal.open({
                        animation: true,
                        templateUrl: 'ui/dialog/file/uploadToRepo.tpl.html',
                        controller: 'uploadToRepo.ctrl',
                        size: 'md',
                        scope: $scope
                        // resolve: {
                        //     image: function() {
                        //         return image;
                        //     }
                        // }
                    });

                    // imageModal.result();
                    // imageModal.result.then(function(result) {
                    //     minder.execCommand('image', result.url, result.title || '');
                    // });
                };
            }
        };
    }]);