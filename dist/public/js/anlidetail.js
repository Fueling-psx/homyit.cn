define(function(require,exports,module){exports.row=function(){$(window).scroll(function(){var o=$(this).scrollTop();if(o>=500){var s=o-500+"px";$(".project-sidebars").css("top",s)}else $(".project-sidebars").css("top","150")})}});