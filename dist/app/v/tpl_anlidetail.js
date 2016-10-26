define(function(require, exports, module){
  exports.adetail = function anonymous(it
/**/) {
var out=' <div class="wrapper"> <div class="anlidetail"> </div> <div class="navside"> </div> </div>';return out;
};
  exports.navsides = function anonymous(it
/**/) {
var out=' <div class="project-sidebars"> <nav class="navBox"> <ul class="navSide nav"> <li> <a href="javascript:;">电子商务</a> <ul class="nav" style="display:none"> <li> ';for(var i = 0; i<it.ecommerce.length;i++){ out+=' <a href="javascript:;" class="navsidestyle" data-go-route-reload="/c/anlidetail/init&articleId='+(it.ecommerce[i][0])+'">'+(it.ecommerce[i][1] )+'</a> '; }; out+=' </li> </ul> </li> <li> <a href="javascript:;">办公管理系统</a> <ul class="nav" style="display:none"> <li> ';for(var i = 0; i<it.oms.length;i++){ out+=' <a href="javascript:;" class="navsidestyle" data-go-route-reload="/c/anlidetail/init&articleId='+(it.oms[i][0])+'">'+(it.oms[i][1] )+'</a> '; }; out+=' </li> </ul> </li> <li> <a href="javascript:;">门户网站（官网）</a> <ul class="nav" style="display:none"> <li>';for(var i = 0; i <it.Portal.length ;i++){ out+='<a href="javascript:;" data-go-route-reload="/c/anlidetail/init&articleId='+(it.Portal[i][0])+'">'+(it.Portal[i][1] )+'</a>'; }; out+=' </li> </ul> </li> </ul> </nav> </div>';return out;
};
  exports.anlidetail = function anonymous(it
/**/) {
var out=' <article> <h1>'+(it.title)+'</h1> <p>'+(it.article)+'</p> <span class="projectadd">项目地址：'+(it.address)+'</span> <div class="function"> <div class="function-center"> <span> <a href="javascript:"> <input type="checkbox" id="you"> <label id="i" for="you"></label> </a> </span> <span> <a href="javascript:"> <i class="icon-font">&#xe654;</i> </a> </span> </div> </div> </article>';return out;
};
});