define(function(require, exports, module){
    module.exports = {
        _init: _init,
        init: init,
        side: side,
        blog: blog
        // _destroy: _destroy
        // getside: getside
    };
    var event = require('event'); 
    var route = require('route');
    var archive = require('m/archive');
    var base = require('/public/js/base');

    function _init(){                                                                                                                                                  
        var css = require('/public/css/css_app');
        var tpl = require('v/tpl_app');
        var nav2 = require('v/tpl_nav2');
        // 初始化页面  
        archive.getTopicList(function (topicList) {
            base.nav(topicList,function (navPk) {
                var header = nav2.header({topicList: navPk});
                // console.log(navPK);
                var body = tpl.body();
                var footer = tpl.footer();
                $(HY.rootDom).html(css + header + body + footer);         
            });        
        });  
 
    };

    function init(){
        // var ggtpl = require('v/tpl_gonggao'); 
        // var ggcss = require('/public/css/css_gonggao');
        // var ggjs = require('/public/js/gonggao');
        // archive.getGongGao(function(gao){
        //     var gong = ggtpl.gonggao({'aa':gao});
        //     //console.log(gao);
        //     // $("#gonggao").html(ggcss + gong);
        //     $(".page-body").html();
        //     ggjs.abc();
        // })
         
        // var anli = require('v/tpl_anli');
        // archive.getAnLiList(function(details){
        //     var de =anli.main({'article':details});
        //     $('#anli').html(de);

        // })
        // var shcss = require('/public/css/css_shenghuo');
        // var shenghuo = require('v/tpl_shenghuo');
        // var shjs = require('/public/js/shenghuo.js');
        // $('#shenghuo').html(shcss+shenghuo);
        // shjs.main();
        
    }

    function side(){
        var sideid = HY.route.now.params.id;
        var text = "";
        archive.getSideDetail(function(detail){
            detail.forEach(function(v){
                if (v.id == sideid) text = v.title;
            });
            $(".curbg").html(text);
        })
    }

    function blog(){
        var con = require('../v/tpl_blog').body();
        var css = require('/public/css/css_blog');
        $(".page-body").html(css+con);
    }
});