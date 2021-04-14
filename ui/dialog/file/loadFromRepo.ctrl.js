angular.module('kityminderEditor')
    .controller('loadFromRepo.ctrl', ['$http', '$scope', '$modalInstance', 'server', 'config', function($http, $scope, $modalInstance, server, config) {

        // console.log($scope.structs);
        $scope.load_all_jsons = function (){
            $http.get(config.get('loadAllJson')).then(function (response){
                $scope.structs = response.data;
            });
        };

        $scope.cancel = function () {
            $modalInstance.dismiss('cancel');
            editor.receiver.selectAll();
        };

        $scope.load_struct = function (json){
            $scope.minder.importJson(json, 'json');
            $modalInstance.dismiss('cancel');
            editor.receiver.selectAll();
        };

    }]);