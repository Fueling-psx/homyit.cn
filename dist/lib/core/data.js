define(function(require,exports,module){function n(n,e,u,r){if(!n)return!1;!$.isPlainObject(e)&&$.isFunction(e)&&(r=u,u=e,e={});var c=r;if(r&&!$.isFunction(r)&&(c=function(){return r}),c){var o=t.getItem(n);if(o)return $.isFunction(u)&&u(o)}e=$.extend({},e,i.get("?")),$.ajax({url:n,data:e,success:function(i){c&&t.setItem(n,i,c(i)),$.isFunction(u)&&u(i)},error:function(n){$.isFunction(u)&&u(!1)}})}var t=require("cache"),i=require("url");module.exports={query:n}});