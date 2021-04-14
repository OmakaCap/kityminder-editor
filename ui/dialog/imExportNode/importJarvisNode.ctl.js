angular.module('kityminderEditor')
    .controller('importJarvisNode.ctrl', ['$scope', '$modalInstance', 'server', '$http', function($scope, $modalInstance, config, $http) {


    // $scope.jarvis_nodes = [
    //     {'node_name': 'ivix', 'data': {"text": "中心主题"}},
    //     {'node_name': 'ivix', 'data': {"text": "中心主题"}},
    //     {'node_name': 'ivix', 'data': {"text": "中心主题"}},
    //     {'node_name': 'ivix', 'data': {"text": "中心主题"}},
    //     {'node_name': 'ivix', 'data': {"text": "中心主题"}},
    //     {'node_name': 'ivix', 'data': {"text": "中心主题"}},
    //     {'node_name': 'ivix', 'data': {"text": "中心主题"}},
    //     {'node_name': 'ivix', 'data': {"text": "中心主题"}},
    //     {'node_name': 'ivix', 'data': {"text": "中心主题"}},
    //     {'node_name': 'ivix', 'data': {"text": "中心主题"}},
    //     {'node_name': 'ivix', 'data': {"text": "中心主题"}},
    //     {'node_name': 'ivix', 'data': {"text": "中心主题"}},
    //     {'node_name': 'ivix', 'data': {"text": "中心主题"}},
    //     {'node_name': 'ivix', 'data': {"text": "中心主题"}},
    //     {'node_name': 'ivix', 'data': {"text": "中心主题"}},
    //     {'node_name': 'ivix', 'data': {"text": "中心主题"}},
    //     {'node_name': 'ivix', 'data': {"text": "中心主题"}},
    //     {'node_name': 'ivix', 'data': {"text": "中心主题"}},
    //     {'node_name': 'ivix', 'data': {"text": "中心主题"}},
    //     {'node_name': 'ivix', 'data': {"text": "中心主题"}},
    //     {'node_name': 'ivix', 'data': {"text": "中心主题"}},
    //     {'node_name': 'ivix', 'data': {"text": "中心主题"}},
    //     {'node_name': 'ma', 'data': {
    //         "text": "分支主题",
    //         "image": "http://localhost:5000/kityminder/read_image/0fcb4bdbf06f4bd6a43e52b9d249e87a.png",
    //         "imageTitle": "",
    //             "imageSize": {"width": 200, "height": 122},
    //             "priority": 1,
    //             "progress": 5,
    //             "resource": ["标签1"]}},
    // ];
    $scope.load_all_nodes = function (){
        $http.get('/jarvis/load_nodes').then(function (response){
            $scope.jarvis_nodes = response.data;
        });
    };

    $scope.node_search = '';
    $scope.import_jarvis_node = function (json) {
        var minder = window.minder;
        var node = minder.getSelectedNode();
        for (k in json) {
            node.data[k] = json[k];
        }
        $scope.cancel();
        editText();
    };

    function editText() {
        var receiverElement = editor.receiver.element;
        var fsm = editor.fsm;
        var receiver = editor.receiver;

        receiverElement.innerText = minder.queryCommandValue('text');
        fsm.jump('input', 'input-request');
        receiver.selectAll();
    }

    $scope.cancel = function () {
        $modalInstance.dismiss('cancel');
    };

}]);