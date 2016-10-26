/**
 * Created by 小熊 on 2016/7/17.
 */
define(function(require, exports, module){
    exports._init = function(){
        console.log('archive/contact/_init', '模块前置');
        //$('#navbar-nav li').removeClass('active');
        //$('#navbar-nav li[data-nav="talk"]').addClass('active');
    };

    exports.init = function(){
        console.log('archive/contact/init');
        var tpl = require('v/tpl_contact');
        var css = require('/public/css/css_contact');
        var navtpl = require('v/tpl_nav').navTop();
        var navcss = require('/public/css/css_nav');
        var navjs = require('/public/js/navTop');
        var contact_x = require('/public/js/contact_x');
        var foo = require('v/tpl_footer').footer();
        var foojs = require('/public/js/anli');
        var footerCss = require('/public/css/css_footer');
        $(HY.rootDom).html(navcss+navtpl+css+tpl.main()+footerCss+foo);
        contact_x.checkH();
        navjs.navInit();
        foojs.footer();
        //$(function() {
        //    $('#contact-submit').click(function() {
        //        var d = {};
        //        var t = $('form').serializeArray();
        //        $.each(t, function() {
        //            d[this.name] = this.value;
        //        });
        //        alert(JSON.stringify(d));
        //    });
        //});

    };
})