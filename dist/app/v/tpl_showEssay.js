define(function(require, exports, module){
  exports.essay = function anonymous(it
/**/) {
var out=' '; if(!it.article){ out+=' <h1>文章不存在！</h1> '; }else{ out+='<header><h1>'+(it.article.title)+'</h1>'; if(it.article.sub_title){ out+='<h3>'+(it.article.sub_title)+'</h3>'; }  if(it.article.user_name){ out+='<div class="personal_mes"><a href="javascript:;" class="author" data-user-id="'+(it.article.user_id)+'">'+(it.article.user_name)+'</a><span>&nbsp;·&nbsp;</span><time class="timeago" datetime="'+(it.time)+'"></time></div>'; } out+='</header>'; if(it.article.theme_img){ out+='<div class="theme_img"><img src="'+(it.article.theme_img )+'"/></div>'; } out+='<div class="essay">'+(it.article.content)+'</div><div class="stuff"><ul> <li><div id="myLove" class="myLove" data-disabled=""><span>&#xe608;</span>喜欢（<b>55</b>）</div></li><li><span>&#xf006e;</span>评论（38）</li><li><span>&#xe603;</span>阅读（10036）</li></ul></div>'; } return out;
};
});