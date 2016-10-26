!function($){function t(){var t=e(this);return isNaN(t.datetime)||$(this).text(r(t.datetime)),this}function e(t){if(t=$(t),!t.data("timeago")){t.data("timeago",{datetime:a.datetime(t)});var e=$.trim(t.text());!(e.length>0)||a.isTime(t)&&t.attr("title")||t.attr("title",e)}return t.data("timeago")}function r(t){return a.inWords(i(t))}function i(t){return(new Date).getTime()-t.getTime()}$.timeago=function(t){return r(t instanceof Date?t:"string"==typeof t?$.timeago.parse(t):"number"==typeof t?new Date(t):$.timeago.datetime(t))};var a=$.timeago;$.extend($.timeago,{settings:{refreshMillis:6e4,allowFuture:!1,strings:{prefixAgo:null,prefixFromNow:"从现在开始",suffixAgo:"前",suffixFromNow:null,seconds:"不到 1 分钟",minute:"大约 1 分钟",minutes:"%d 分钟",hour:"大约 1 小时",hours:"大约 %d 小时",day:"1 天",days:"%d 天",month:"大约 1 个月",months:"%d 个月",year:"大约 1 年",years:"%d 年",numbers:[],wordSeparator:""}},inWords:function(t){function e(e,i){var a=$.isFunction(e)?e(i,t):e,n=r.numbers&&r.numbers[i]||i;return a.replace(/%d/i,n)}var r=this.settings.strings,i=r.prefixAgo,a=r.suffixAgo;this.settings.allowFuture&&t<0&&(i=r.prefixFromNow,a=r.suffixFromNow);var n=Math.abs(t)/1e3,o=n/60,s=o/60,u=s/24,m=u/365,d=n<45&&e(r.seconds,Math.round(n))||n<90&&e(r.minute,1)||o<45&&e(r.minutes,Math.round(o))||o<90&&e(r.hour,1)||s<24&&e(r.hours,Math.round(s))||s<42&&e(r.day,1)||u<30&&e(r.days,Math.round(u))||u<45&&e(r.month,1)||u<365&&e(r.months,Math.round(u/30))||m<1.5&&e(r.year,1)||e(r.years,Math.round(m)),f=void 0===r.wordSeparator?" ":r.wordSeparator;return $.trim([i,d,a].join(f))},parse:function(t){var e=$.trim(t);return e=e.replace(/\.\d+/,""),e=e.replace(/-/,"/").replace(/-/,"/"),e=e.replace(/T/," ").replace(/Z/," UTC"),e=e.replace(/([\+\-]\d\d)\:?(\d\d)/," $1$2"),new Date(e)},datetime:function(t){var e=a.isTime(t)?$(t).attr("datetime"):$(t).attr("title");return a.parse(e)},isTime:function(t){return"time"===$(t).get(0).tagName.toLowerCase()}}),$.fn.timeago=function(){var e=this;e.each(t);var r=a.settings;return r.refreshMillis>0&&setInterval(function(){e.each(t)},r.refreshMillis),e},document.createElement("abbr"),document.createElement("time")}(jQuery);