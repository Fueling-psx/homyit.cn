define(function(require, exports, module){
  exports.gonggao = function anonymous(it
/**/) {
var out=' <div class="bordered"> <div class="container-fluid"> <div class="row"> <div class=" col-md-2"> <div class="laba"> <i class="icon iconfont">&#xe606;</i> </div> <div class="homyi">宏奕动态</div> </div> <div class=" col-md-8 col-md-offset-1"> <div id="gdong">  <ul id="con1"> '; it.aa.forEach(function(item){ out+=' <li> <a href="javascript:;" data-go-route-reload="/c/detail/init&articleId='+(item.id)+'"> <img src="'+(item.img[0])+'" alt="0">&nbsp;'+(item.title)+' </a></li> '; }); out+=' </ul> <ul id="con2" style="margin-top:-10px;"> </ul>  </div> </div> <div class=" col-md-1"> <div id="tup" onclick="up()"> <span class="glyphicon glyphicon-triangle-top" aria-hidden="true"></span> </div> <div id="tdown" onclick="down()"> <span class="glyphicon glyphicon-triangle-bottom" aria-hidden="true"></span> </div> </div> </div> </div> </div>';return out;
};
  exports.main = function anonymous(it
/**/) {
var out=' <div id="picture"> <div class="row"> <div class="col-md-1 col-left">  <button class="paginate left"><i></i><i></i></button> </div> <div class="col-md-10"> <div class="picrow"> <div class="dianzi"> <ul id="roll"> '; it.main.forEach(function(item){ out+=' <li> <div class="port-3 effect-1"> <div class="image-box"> <img src="'+(item.img[0])+'" alt="Image-1"> </div> <div class="text-desc"> <h3>'+(item.title)+'</h3> <p>'+(item.expInfo)+'</p> <a href="javascript:;" class="btna" data-go-route-reload="/c/anlidetail/init&articleId='+(item.id)+'">项目详情</a> </div> </div> </li> '; }); out+=' </ul> </div> </div> </div> <div class="col-md-1">  <button class="paginate right"><i></i><i></i></button> </div></div></div>';return out;
};
  exports.shenghuo = function anonymous(it
/**/) {
var out=' <div class="art-area"> <div class="col-md-10">'; it.art.forEach(function(item){ out+=' <div class="row"> <div class="art-content"> <div class="col-md-5"> <a href="#" class="thumbnail"> <img src="'+(item.img)+'" alt="梅岭爬山"> </a> </div> <div class="col-md-7"> <h1>'+(item.title)+'</h1> <br> <p>'+(item.info)+'</p> </div> </div> </div>'; });  it.art.forEach(function(item){ out+=' <div class="row"> <div class="art-content"> <div class="col-md-5"> <a href="#" class="thumbnail"> <img src="'+(item.img)+'" alt="梅岭爬山"> </a> </div> <div class="col-md-7"> <h1>'+(item.title)+'</h1> <p>'+(item.info)+'</p> </div> </div> </div>'; }); out+=' '; it.art.forEach(function(item){ out+=' <div class="row"> <div class="art-content-hidden1"> <div class="col-md-5"> <a href="#" class="thumbnail"> <img src="'+(item.img)+'" alt="梅岭爬山"> </a> </div> <div class="col-md-7"> <h1>'+(item.title)+'</h1> <p>'+(item.info)+'</p> </div> </div> </div> '; }); out+=' </div> <div class="art-menu"> <div class="col-md-2"> <ul> '; it.child.forEach(function(item){ out+=' <li class="item'+(item.id)+' item" index="'+(item.id)+'"><a href="javascript:;" class="" data-go-route-reload="/c/app/gshchild&sid='+(item.pid)+'&id='+(item.id)+'">'+(item.name)+'</a></li> '; }); out+=' <li></li> <li></li> <li></li> <li></li> <li></li> </ul> </div> </div> </div>';return out;
};
  exports.member = function anonymous(it
/**/) {
var out=' <div class="all-carouse"> <div class="title"> <i></i>宏奕成员 </div> <div class="all-grade"> <ul> <li class="grade" value="2012">2012</li> <li class="grade" value="2013">2013</li> <li class="grade" value="2014">2014</li> <li class="grade" value="2015">2015</li> <li class="grade" value="2016">2016</li> </ul> </div> <div class="carouse-img"> <div class="big-img"> <span class="btn1 prevL"><a href="javascript:">&lt;</a></span> <span class="btn1 nextL"><a href="javascript:">&gt;</a></span> <ul class="moveL"> </ul> </div> <div class="small-img"> <div class="btn prevS"><a href="javascript:">&lt;</a></div> <div class="btn nextS"><a href="javascript:">&gt;</a></div> <div class="five-img"> <ul class="moveS"> </ul> </div> </div> </div> <div class="member-introduction"> <div class="intro-title"> 人物简介 </div> <div class="intro-content"> </div> <div class="intro-bottom"> <div class="intro-name"> </div> </div> </div> </div>';return out;
};
  exports.footer = function anonymous(it
/**/) {
var out='';return out;
};
});