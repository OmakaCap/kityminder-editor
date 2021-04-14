/**
 * @fileOverview
 *
 *  与后端交互的服务
 *
 * @author: zhangbobell
 * @email : zhangbobell@163.com
 *
 * @copyright: Baidu FEX, 2015
 */
angular.module('kityminderEditor')
    .service('server', ['config', '$http',  function(config, $http) {

        return {
            uploadImage: function(file) {
                var url = config.get('imageUpload');
                var fd = new FormData();

                // 这里是附件的名称，服务器端用 key 来获取文件
                fd.append('upload_file', file);

                return $http.post(url, fd, {
                    transformRequest: angular.identity,
                    headers: {'Content-Type': undefined}
                    // headers: {'Content-Type': 'application/x-www-form-urlencoded'}
                });
            },

            upLoadJson: function (json_data, is_publish) {
                var url = config.get('jsonUpload') + is_publish;
                return $http.post(url, json_data);
            },

            loadAllJson: function (){
                return $http.get(config.get('loadAllJson'));
            }
        };
    }]);