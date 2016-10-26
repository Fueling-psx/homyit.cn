define(function(require, exports, module){
  exports.navSide = function anonymous(it
/**/) {
var out='<nav class="navBox"><ul class="navSide nav"><li><a href="javascript:;">近期文章</a><ul class="nav" style="display:none">'; it.arrTitle.forEach(function (item) {out+=' <li> <a href="javascript:;" data-go-route-reload="/c/detail/init&articleId='+(item[2])+'">'+(item[0])+'</a> </li> '; }); out+='</ul></li><li><a href="javascript:;"">主题分类</a><ul class="nav" style="display:none">'; it.topicList.forEach(function (item) { out+=' <li> <a href="javascript:;" data-go-route-reload="/c/blog/articleList&topicId='+(item[1])+'">'+(item[0])+'</a> </li> '; }); out+='</ul></li><li><a href="javascript:;"">作者集锦</a><ul class="nav" style="display:none">'; it.userList.forEach(function (item) { out+=' <li> <a href="javascript:;" data-go-route-reload="/c/blog/articleList&userId='+(item.id)+'">'+(item.name)+'</a> </li> '; }); out+='</ul></li></ul></nav>';return out;
};
});