define(function(require, exports, module){
  exports.body = function anonymous(it
/**/) {
var out=' <div class="blog"> <div class="content"> <div class="left" > <div class="navLeft"> </div> <div id="article"> </div> <div class="navFooter"> </div> </div> <div class="rightNav"> </div> </div> </div>';return out;
};
  exports.article = function anonymous(it
/**/) {
var out=' '; if (!it.details.length) { out+=' <p>该话题下，暂无文章！</p> '; } out+=' '; var n=0;it.details.forEach(function (item) { out+=' '; if(n>4){ out+=' <div class="article_box" style="display:none"> '; }else{ out+=' <div class="article_box"> '; }n++; out+=' <div class="article_content"> <span class="article_box_date">'+(item.create_time)+'</span> <h3> <a href="javascript:;" data-go-route-reload="/c/detail/init&articleId='+(item.id)+'">'+(item.title)+'</a> </h3> <P>'+(item.content)+'</P> </div> <div class="article_box_footer"> <span><a href="javascript:;" data-go-route-reload="/c/detail/init&articleId='+(item.id)+'">阅读</a></span> </div> </div> '; }); return out;
};
  exports.navFooter = function anonymous(it
/**/) {
var out=' '; if( it.pageSum>=2 ){ out+=' <nav> <ul class="pagination"> <li> <a href="javascript:;" aria-label="Previous" class="prev" id="prev"> <span aria-hidden="true" id="prev">&laquo;</span> </a> </li> <li class="pagesNum"><a href="javascript:;" class="focus" id="2">1</a> </li> '; for(var i=2;i<=it.pageSum;i++){ out+=' '; if(i>5){ out+=' <li class="pagesNum" style="display:none"><a href="javascript:;" id="'+(i+1)+'">'+(i)+'</a></li> '; }else{ out+=' <li class="pagesNum"><a href="javascript:;" id="'+(i+1)+'">'+(i)+'</a></li> '; } out+=' '; } out+=' <li> <a href="javascript:;" aria-label="Next" class="next" id="'+(it.pageSum+2)+'"> <span aria-hidden="true" id="'+(it.pageSum+2)+'">&raquo;</span> </a> </li> </ul> <p>TOTLE:<strong><mark>'+(it.pageSum)+'</mark></strong></p> </nav> '; } return out;
};
  exports.navLeft = function anonymous(it
/**/) {
var out=' <ul class="nav nav-pills"> <li class="dropdown-header" style="margin-left:0;">'+(it.title)+'</li> '; it.indexDetail.forEach(function (item) { out+=' <li><code><a href="javascript:;" data-go-route-reload="/c/blog/articleList&indexId='+(item[0])+'"><span class="navLeftTopLeft"></span><span class="navLeftTopRight"></span>'+(item[1])+'</a></code></li> '; }); out+=' </ul>';return out;
};
});