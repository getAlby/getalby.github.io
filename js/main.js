/**
 * 
 * Animation of the scrolls in the same page
 */
$(function () {
  $('a[href*=\\#]:not([href=\\#])').click(function () {
    // DurÃ©e en milli-seconde du scroll
    var scroll_duration = 700;

    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {      
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        // Nouvelle position ciblÃ©e = [Position de la cible] - [Hauteur du header] - [Une marge d'esthÃ©tique (optionnal because scrollspy bugs)] 
        var vertical_delta = target.offset().top - $('header').height() -30;
        $('html,body').animate({scrollTop: vertical_delta}, scroll_duration);
        return false;
      }
    }
  });
});


$(document).ready(function () {
	// Not display "Back to top" button before the scroll
	$(".bottom-link").css({"display":"none"});

	//Display the tooltips
	$('[data-toggle="tooltip"]').tooltip();

	//Display the icones
	feather.replace();

});



var bottom_link_offset = 200;
var fixed_menu_header_offset = 20;
var card_content_offset = 120;

$(window).scroll(function(){
	if(bottom_link_offset > $(this).scrollTop()){
		$(".bottom-link").css({"display":"none"});
	}
	else{
		$(".bottom-link").removeAttr('style');
	}

	// Fixed and scrollspy menus WITHOUT a streamer
	if( $(this).scrollTop() > card_content_offset+fixed_menu_header_offset ){
		$("aside #toc").css({"position":"fixed", "top": $("header").height()+fixed_menu_header_offset, "width":"inherit", "max-width":"inherit"});
	}
	else{
		$("aside #toc").removeAttr('style');
	}

	// Fixed and scrollspy menus WITH a streamer
	if( $(this).scrollTop() > $("section#streamer").height()+card_content_offset+fixed_menu_header_offset ){
		$("aside nav#streamer-toc").css({"position":"fixed","top": $("header").height()+fixed_menu_header_offset});
	}
	else{
		$("aside nav#streamer-toc").removeAttr('style');
	}
});

