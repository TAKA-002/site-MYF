(()=>{"use strict";$.ajax({url:"/site-MYF/includes/mod_header.html",cache:!1,dataType:"html",success:function(e){$("#header").html(e)}}),$.ajax({url:"/site-MYF/includes/mod_footer.html",cache:!1,dataType:"html",success:function(e){$("#footer").html(e)}}),$((function(){var e=$("#toPageTop");e.hide(),$(window).scroll((function(){$(this).scrollTop()>100?e.fadeIn():e.fadeOut()})),e.click((function(){$("body,html").animate({scrollTop:0},500)}))})),$(document).on("mouseover","#ch-Lang",(function(){$("ul:not(:animated)",this).slideDown()})),$(document).on("mouseleave","#ch-Lang",(function(){$("ul.l-navi--chengeLang__list-item__wrap",this).slideUp()})),$((function(){$(document).on("click","#menu__btn",(function(){$(this).hasClass("active")?($(this).removeClass("active"),$(this).text("MENU"),$("#menu").removeClass("open"),$(".menu__background").removeClass("open")):($(this).addClass("active"),$(this).text("CLOSE"),$("#menu").addClass("open"),$(".menu__background").addClass("open"))})),$(document).on("click",".menu__background",(function(){$(this).hasClass("open")&&($(this).removeClass("open"),$("#menu__btn").removeClass("active").text("MENU"),$("#menu").removeClass("open"))}))}))})();