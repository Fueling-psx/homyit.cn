define(function(require, exports, module){
  exports.essay = function anonymous(it
/**/) {
var out=' '; if(!it.article){ out+=' <h1>文章不存在！</h1> '; }else{ out+='<header><h1>'+(it.article.title)+'</h1><div class="personal_mes"><a href="javascript:;" class="author" data-user-id="'+(it.article.user_id)+'">'+(it.article.user_name)+'</a><span>&nbsp;·&nbsp;</span><time class="timeago" datetime="'+(it.time)+'"></time></div></header><div class="essay">'+(it.article.content)+'</div><div class="stuff"><ul><li><span></span>阅读（10036）</li><li><span></span>评论（38）</li><li><div id="myLove" class="myLove" data-disabled=""><span></span>喜欢（<b>55</b>）</div></li></ul></div>'; } return out;
};
});