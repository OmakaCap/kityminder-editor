angular.module('kityminderEditor')
    .controller('uploadToRepo.ctrl', ['$http', '$scope', '$modalInstance', 'server', function($http, $scope, $modalInstance, server) {
        $scope.data = {
            mind_map_name: '',
            mind_map_comment: '',
        };
        $scope.upload_rsp = {};
        $scope.ok = function () {

            server.upLoadJson({
                name: $scope.data.mind_map_name,
                comment: $scope.data.mind_map_comment,
                data: $scope.minder.exportJson(),
            }, 0).then(function (json){
                if (json.data.errno === 0) {
                    $scope.upload_rsp = {
                        type: 'success',
                        msg: json.data.msg,
                    };
                } else {
                    $scope.upload_rsp = {
                        type: 'danger',
                        msg: json.data.msg,
                    };
                }
            });

            $modalInstance.close();
            editor.receiver.selectAll();
        };

        $scope.cancel = function () {
            $modalInstance.dismiss('cancel');
            editor.receiver.selectAll();
        };

    }]);