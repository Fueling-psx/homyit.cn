define(function(require,exports,module){
      var event = require('event');
      var route = require('route'); 


      exports.init = function(){
          	  var tpl = require('v/tpl_gonggao');
          	  var css = require('/public/css/css_gonggao');
         
              var js = require('/public/js/gonggao');

              $('#container').html(css+tpl+js);
              js.abc();
              


             
      }
})