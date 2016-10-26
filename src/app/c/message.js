define(function(require, exports, module){
    var event = require('event');
      var route = require('route')
      var messageTools = require('../c/messageTools');
      exports._init = function(){
      };
    exports.init = function(){              
        console.log('archive/message/init');
        var messagetpl = require('v/tpl_message');
        var messagecss = require('/public/css/css_message');
        var navtpl = require('v/tpl_nav').navTop();
        var navcss = require('/public/css/css_nav');
        var navjs = require('/public/js/navTop');
        var messagejs = require('/public/js/message');
        var foo = require('v/tpl_footer').footer();
        var foojs = require('/public/js/anli');
        var footerCss = require('/public/css/css_footer');
         // $(HY.rootDom).html(navcss+navtpl+messagecss+messagetpl.main());
                var archive = require('m/archive');  
                    archive.getMessage(function(messages){
                        archive.getMembers(function(members){
                        // console.log("23333");
                        // console.log(messages);
                        // console.log(members);
                        var messagecss = require('/public/css/css_message');
                        var messagetpl = require('v/tpl_message');
                          var foo = require('v/tpl_footer').footer();
                        var foojs = require('/public/js/anli');
                        var footerCss = require('/public/css/css_footer');
                        $(HY.rootDom).html(navcss+navtpl+messagecss+messagetpl.main({messages : messages,members : members}));
                        // $(".message").html(messagecss+messaged);
                        $("#foot").html(footerCss+foo);

                        messagejs.message();
                        navjs.navInit();
                        foojs.footer();
                 }); 
                }); 
    };
    exports.membersList = function(){
        console.log('archive/message/init');
        var messagetpl = require('v/tpl_message');
        var messagecss = require('/public/css/css_message');
        var navtpl = require('v/tpl_nav').navTop();
        var navcss = require('/public/css/css_nav');
        var navjs = require('/public/js/navTop');
        var messagejs = require('/public/js/message');
        var foo = require('v/tpl_footer').footer();
        var foojs = require('/public/js/anli');
        var footerCss = require('/public/css/css_footer');
         // $(HY.rootDom).html(navcss+navtpl+messagecss+messagetpl.main());

          var id=route.getParams('id') - 0;
          var key='id';
          // console.log(id);
                var archive = require('m/archive');  
                    archive.getMessage(function(message){
                        archive.getMembers(function(members){
                        // console.log("222233");
                        messageTools.getMessageByField(message, key, id, function(message){
                        var messagecss = require('/public/css/css_message');
                        var messagetpl = require('v/tpl_message');
                        $(HY.rootDom).html(navcss+navtpl+messagecss+messagetpl.main({message : message,members : members}));
                        // $(".message").html(messagecss+messaged);
                        $("#foot").html(footerCss+foo);
                        messagejs.message();
                        navjs.navInit();
                        foojs.footer();
                    });
                 }); 
            }); 

    }
})