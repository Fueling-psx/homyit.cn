define(function(require, exports, module){

    var data = require('data');

    exports.getTopicList = function (cb) {
        var url = '/public/json/way.json';
        data.query(url, function (resp) {
            // console.log(url,resp);
            if (resp.errCode === 200) {
                cb(resp.data || []);
            }
            else { 
                cb([]); 
            }
        }, 60000);  
    }; 
  
    exports.getArticleList = function (topicId, cb) {
        var url = '/mock/article-list-' + topicId + '.json';
        data.query(url, function (resp) {
            if (resp.errCode === 200) {
                cb(resp.data || []);
            }
            else {
                cb([]);
            }
        }, 5000);
    };

    exports.getArticleDetail = function (articleId, cb) {
        var url = '/mock/article-detail-' + articleId + '.json';
        data.query(url, function (resp) {
            if (resp.errCode === 200) {
                cb(resp.data || []);
            }
            else {
                cb([]);
            }
        }, 5000);
    };
    exports.getAnLiList = function (cb) {
        var url = '/public/json/anli.json';
        var arr = new Array();
        var i = 0;
        data.query(url, function (resp) {
            if (resp.errCode === 200) {
                resp.data.forEach(function(v){
                    if(v.pid === 3) {
                        i++;
                        arr[i] = v;
                    }
                })
                cb(arr);
            }
            else {

                cb([]);
            }
        }, 5000);
    };
    exports.getAnLi = function (cb) {
        var url = '/public/json/anli.json';
        data.query(url, function (resp) {
            if (resp.errCode === 200) {
                cb(resp.data);
            }
            else {
                cb([]);
            }
        }, 5000);
    };

    exports.getGongGao = function (ma) {
        var url = '/public/json/gonggao.json';
        data.query(url, function (resp) {
            if (resp.errCode === 200) {
                ma(resp.data);

            }
            else {

                ma([7]);
            }
        }, 5000);
    };

     exports.getMessage = function (cb) {
        var url = '/public/json/message.json';
        data.query(url, function (resp) {
            if (resp.errCode === 200) {
                cb(resp.data);

            }
            else {

                cb([]);
            }
        }, 5000);
    };

    

    exports.getMembers = function (cb) {
        var url = '/public/json/members.json';
        data.query(url, function (resp) {
            if (resp.errCode === 200) {
                cb(resp.data);

            }
            else {

                cb([]);
            }
        }, 5000);
    };

    exports.getSideDetail = function (ma){
        var url = '/public/json/gonggao.json';
        data.query(url, function (resp) {
            if (resp.errCode === 200) {
                ma(resp.data);

            }
            else {

                ma([7]);
            }
        }, 5000);
    };

    exports.getBlogTitle = function (cb) {
        var url = '/public/json/articleDetail.json';
        data.query(url, function (resp) {
            if(resp.errCode === 200) {
                cb(resp.data);
            }else {
                cb([]);
            }
            // console.log(cb);
        },5000)
    }
/*    exports.getShc = function(cb) {
        var url ='/public/json/shcategory.json';
        data.query(url,function (resp) {
            var arr = new Array();
            if(resp.errCode === 200) {
                resp.data.forEach(function(v){
                    var children = new Array();
                   if(0 === v.pid ){
                       resp.data.forEach(function(vv){
                           if(vv['pid'] == v['id']){
                               children.push(vv);
                           }
                       });
                        v['children'] =children;
                       arr.push(v);
                   }
                });
                cb(arr)
            }else{
                cb([]);
            }
        },500)
    };*/
    exports.getShc = function(cb) {
        var url ='/public/json/shcategory.json';
        data.query(url,function (resp) {
            var arr = new Array();
            var i =0;
            if(resp.errCode === 200) {
                var children = new Array();
                resp.data.forEach(function(v){
                    if(v.pid === 0){
                        i++;
                       arr[i] = v;
                    }
                })
                cb(arr);
            }else{
                cb([]);
            }
        },500)
        };
    exports.getShchild = function(cb) {
        var url ='/public/json/shcategory.json';
        data.query(url,function (resp) {
            if(resp.errCode === 200) {
                cb(resp.data);
            }else{
                cb([]);
            }
        },500)
    };
    exports.getArt = function(cb) {
        var url ='/public/json/shcategory.json';
        data.query(url,function (resp) {
            if(resp.errCode === 200) {
                var arr = new Array();
                var i = 0;
            resp.data.forEach(function(v){
                if(v.pid === 1){
                    i++;
                    arr[i] = v;
                }
            })
                cb(arr);

            }else{
                cb([]);
            }
        },500)
    };
    exports.getFart = function(cb) {
        var url ='/public/json/shenghuo.json';
        data.query(url,function (resp) {
            if(resp.errCode === 200) {
                var arr = new Array();
                var i = 0;
                resp.data.forEach(function(v){
                    if(v.id === 1){
                        i++;
                        arr[i] = v;
                    }
                })
                cb(arr);
            }else{
                cb([]);
            }
        },500)
    };
    exports.shcategory = function(cb) {
        var url ='/public/json/shcategory.json';
        data.query(url,function (resp) {
            if(resp.errCode === 200) {
                cb(resp.data);
            }else{
                cb([]);
            }
        },500)
    };
    exports.getShenghuo = function(cb) {
        var url ='/public/json/shenghuo.json';
        data.query(url,function (resp) {
            if(resp.errCode === 200) {
                cb(resp.data);
            }else{
                cb([]);
            }
        },500)
    }
});