 define(function(require, exports, module){
     var event = require('event');
     var route = require('route');
	 var tpl = require('../v/tpl_anlidetail');
	 var anlidetail = require('/public/js/anlidetail');
	 var manlidetail = require('../m/anlidetail.js');
	 var jsnavside = require("/public/js/navside");
	 var css = require('/public/css/css_anlidetail');
	 var nav = require('../v/tpl_nav').navTop();
	 var cssnav = require('/public/css/css_nav');
	 var jsnav = require('/public/js/navTop');
	 var footer = require('v/tpl_footer').footer();
	 var cssfooter = require('/public/css/css_footer');
	 var cssnavside = require('/public/css/css_navside');

    exports._init = function(){
			
		
	 };

	exports.init = function(){
		jsnavside._init();
		anlidetail.row();
		jsnav.navInit("hide");
		var body = tpl.adetail();
		$(HY.rootDom).html(cssnav+cssfooter+cssnavside+css+nav+body+footer);
 		var articleID = HY.route.now.params.articleId - 0;
		 manlidetail.getarticle(function(item){
			item.forEach(function (v) {
				 if(v.id === articleID ){
					 var articles = tpl.anlidetail({
						 title:v.title,
						 article:v.article,
						 address:v.address,
						 id:v.id
					 });
					 $(".anlidetail").html(articles);
				 }
			 });

		 });
		$(window).scrollTop(0);
			
			var a = [];
			var b = [];
			var c = [];
		manlidetail.getarticle(function(article){
			article.forEach(function (v) {
				var ecommerce = [];
				var oms = [];
				var Portal = [];
				if (v.pid === 1) {
					ecommerce.push(v.id);
					ecommerce.push(v.title);
					a.push(ecommerce);
			}
				if (v.pid === 2) {
					oms.push(v.id);
					oms.push(v.title);
					b.push(oms);
			}
				if (v.pid === 3) {
					Portal.push(v.id);
					Portal.push(v.title);
					c.push(Portal);
			}
				var navsidedetail = tpl.navsides({
					ecommerce:a,
					oms:b,
					Portal:c
				});
			$('.navside').html(navsidedetail);
			});
      });

	};

	 exports.getarticle = function () {
		

		
	 };






 }); 