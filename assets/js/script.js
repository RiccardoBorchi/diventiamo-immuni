jQuery(function($) {

	"use strict";

	var win = $(window);
	var doc = $(document);

   $('.navbar').localScroll({
      target: $('.navbar').attr('id')
   });

   /*---------------------*/
	/* MAIN NAVIGATION     */
	/*---------------------*/

	var position = win.scrollTop();

	function scrollNavbar() {
		var scroll = win.scrollTop();
		if(scroll > position) { // Scroll Down
			if(scroll > 0) {
				$('.navbar').css('top', '-150px');
			}
		}
		if(scroll < position) { // Scroll Up
			if(scroll > 0) {
				$('.navbar').addClass('navbar-small');
				$('.navbar').css('top', '0');
			}else{
				$('.navbar').removeClass('navbar-small');
			}
		}
		position = scroll;
	}

	win.on('scroll', function() {
		scrollNavbar();
	});

   /*---------------------*/
   /* SCROLL TO TOP       */
   /*---------------------*/

   if(win.width() > 1200) {
      win.on('scroll', function(e) {
         e.preventDefault();

         if($(this).scrollTop() > 1000) {
            $('.back-to-top').fadeIn(300);
            e.stopPropagation();
         } else {
            $('.back-to-top').fadeOut(300);
            e.stopPropagation();
         }

      });

      $('.back-to-top').on('click', function(e) {
         e.preventDefault();

         $('body, html').animate({
            scrollTop: 0
         }, 3000);

         e.stopPropagation();
      });
   }

});
