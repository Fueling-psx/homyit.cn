define(function(require,exports,module){var i=(require("event"),require("route")),t=require("m/blog");exports._init=function(){console.log("archive/talk/_init","模块前置");var i=require("v/tpl_detail").detailBody(),t=require("/public/css/css_nav"),a=require("/public/css/css_detail");$(HY.rootDom).html(t+a+i)},exports.init=function(){console.log("archive/talk/init");var a=require("v/tpl_nav").navTop();$("#top").html(a);var e=(require("/public/js/jquery.timeago"),require("/public/js/jquery.pagination"),require("/public/js/detailScript")),l=require("/public/js/navTop"),o=require("/public/js/showTime"),s=i.getParams("articleId")-0;t.getDetailById(s,function(i){var t=o.currTime(i.create_time),a=require("/public/js/showEssay"),e=require("v/tpl_showEssay").essay({article:i,time:t});$("#article").html(e),$(".timeago").timeago(),a.showFond()}),l.navInit("hide"),e.detailInit()}});