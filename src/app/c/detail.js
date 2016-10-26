define(function(require,exports,module){
      var event = require('event');
      var route = require('route');
      var service = require('m/blog');
      
      exports._init = function(){
              
              console.log('archive/talk/_init', '模块前置'); 
              var detailBody = require('v/tpl_detail').detailBody();
              var navTop_css = require('/public/css/css_nav');
              var detail_css = require('/public/css/css_detail');
              $(HY.rootDom).html(navTop_css + detail_css +detailBody);
      }
      
      exports.init = function(){
      	      console.log('archive/talk/init');
          	  var navTop = require('v/tpl_nav').navTop();
            
              $('#top').html(navTop);
              
              var timeago = require('/public/js/jquery.timeago');
              var pagination = require('/public/js/jquery.pagination');
              var detailJs = require('/public/js/detailScript');
              var navTopJs = require('/public/js/navTop');
            
              var showTime = require('/public/js/showTime')
              // var articleId = route.getParams('articleId') - 0;
            
              // service.getDetails(function(details){
              //       var essay = [];
              //        $.each(details,function(k,v){
              //             if(v.id==articleId){
              //                 essay = v;
              //             }
              //        })
              //        console.log(essay);
              //        console.log(2343);
              //       var article = require('v/tpl_essay').essay({article:essay});
              //       $("#article").html(article);

              // })
      	      var articleId = route.getParams('articleId') - 0;
              service.getDetailById(articleId,function(detail){
                      // console.log(detail);
                      var currTime = showTime.currTime(detail.create_time);
                      var essayJs = require('/public/js/showEssay');
                      var article = require('v/tpl_showEssay').essay({article:detail,time:currTime});
                      $("#article").html(article);
                      $(".timeago").timeago();
                      essayJs.showFond();
              })
              navTopJs.navInit("hide");
              detailJs.detailInit();
              
      }
})