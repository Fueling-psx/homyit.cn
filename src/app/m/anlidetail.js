define(function(require, exports, module){
  var data = require('data');
    exports.getarticle = function (cb) {
        var url = '../public/json/anli.json';
        data.query(url, function (resp) {
            if (resp.errCode === 200) {
                cb(resp.data);
            }
            else {
                cb([]);
            }
        }, 1000);
    };
    



});