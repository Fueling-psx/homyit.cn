define(function(require,exports,module){var i=(require("event"),require("route"),require("../v/tpl_anlidetail")),t=require("/public/js/anlidetail"),a=require("../m/anlidetail.js"),s=require("/public/js/navside"),e=require("/public/css/css_anlidetail"),l=require("../v/tpl_nav").navTop(),n=require("/public/css/css_nav"),c=require("/public/js/navTop"),o=require("v/tpl_footer").footer(),d=require("/public/css/css_footer"),r=require("/public/css/css_navside");exports._init=function(){},exports.init=function(){s._init(),t.row(),c.navInit("hide");var p=i.adetail();$(HY.rootDom).html(n+d+r+e+l+p+o);var u=HY.route.now.params.articleId-0;a.getarticle(function(t){t.forEach(function(t){if(t.id===u){var a=i.anlidetail({title:t.title,article:t.article,address:t.address,id:t.id});$(".anlidetail").html(a)}})}),$(window).scrollTop(0);var v=[],f=[],h=[];a.getarticle(function(t){t.forEach(function(t){var a=[],s=[],e=[];1===t.pid&&(a.push(t.id),a.push(t.title),v.push(a)),2===t.pid&&(s.push(t.id),s.push(t.title),f.push(s)),3===t.pid&&(e.push(t.id),e.push(t.title),h.push(e));var l=i.navsides({ecommerce:v,oms:f,Portal:h});$(".navside").html(l)})})},exports.getarticle=function(){}});