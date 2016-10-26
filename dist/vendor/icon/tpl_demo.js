define(function(require, exports, module){
  module.exports = '<!DOCTYPE html><html><head><meta charset="utf-8"><title>IconFont</title><link rel="stylesheet" href="demo.css"><link rel="stylesheet" href="iconfont.css"></head><body><div class="main"><h1>IconFont 图标</h1><ul class="icon_lists clear"><li><i class="icon iconfont">&#xe777;</i><div class="name">back</div><div class="code">&amp;#xe777;</div><div class="fontclass">.back</div></li><li><i class="icon iconfont">&#xe78b;</i><div class="name">enter</div><div class="code">&amp;#xe78b;</div><div class="fontclass">.enter</div></li><li><i class="icon iconfont">&#xe776;</i><div class="name">attachment</div><div class="code">&amp;#xe776;</div><div class="fontclass">.attachment</div></li><li><i class="icon iconfont">&#xe775;</i><div class="name">add</div><div class="code">&amp;#xe775;</div><div class="fontclass">.add</div></li><li><i class="icon iconfont">&#xe78c;</i><div class="name">expression</div><div class="code">&amp;#xe78c;</div><div class="fontclass">.expression</div></li><li><i class="icon iconfont">&#xe797;</i><div class="name">search</div><div class="code">&amp;#xe797;</div><div class="fontclass">.search</div></li><li><i class="icon iconfont">&#xe798;</i><div class="name">ship</div><div class="code">&amp;#xe798;</div><div class="fontclass">.ship</div></li><li><i class="icon iconfont">&#xe7cb;</i><div class="name">sale</div><div class="code">&amp;#xe7cb;</div><div class="fontclass">.sale</div></li><li><i class="icon iconfont">&#xe7c9;</i><div class="name">reduce</div><div class="code">&amp;#xe7c9;</div><div class="fontclass">.reduce</div></li><li><i class="icon iconfont">&#xe7cd;</i><div class="name">setting</div><div class="code">&amp;#xe7cd;</div><div class="fontclass">.setting</div></li><li><i class="icon iconfont">&#xe62b;</i><div class="name">fire</div><div class="code">&amp;#xe62b;</div><div class="fontclass">.fire</div></li><li><i class="icon iconfont">&#xe643;</i><div class="name">娱乐</div><div class="code">&amp;#xe643;</div><div class="fontclass">.yule</div></li><li><i class="icon iconfont">&#xe616;</i><div class="name">列表</div><div class="code">&amp;#xe616;</div><div class="fontclass">.liebiao</div></li><li><i class="icon iconfont">&#xe6a9;</i><div class="name">github</div><div class="code">&amp;#xe6a9;</div><div class="fontclass">.github</div></li><li><i class="icon iconfont">&#xe618;</i><div class="name">更多</div><div class="code">&amp;#xe618;</div><div class="fontclass">.gengduo</div></li></ul><div class="helps">第一步：使用font-face声明字体<pre>
@font-face {font-family: \'iconfont\';
    src: url(\'iconfont.eot\'); /* IE9*/
    src: url(\'iconfont.eot?#iefix\') format(\'embedded-opentype\'), /* IE6-IE8 */
    url(\'iconfont.woff\') format(\'woff\'), /* chrome、firefox */
    url(\'iconfont.ttf\') format(\'truetype\'), /* chrome、firefox、opera、Safari, Android, iOS 4.2+*/
    url(\'iconfont.svg#iconfont\') format(\'svg\'); /* iOS 4.1- */
}
</pre>第二步：定义使用iconfont的样式<pre>
.iconfont{
    font-family:"iconfont" !important;
    font-size:16px;font-style:normal;
    -webkit-font-smoothing: antialiased;
    -webkit-text-stroke-width: 0.2px;
    -moz-osx-font-smoothing: grayscale;}
</pre>第三步：挑选相应图标并获取字体编码，应用于页面<pre>
&lt;i class="iconfont"&gt;&amp;#x33;&lt;/i&gt;
</pre></div></div></body></html>'
});