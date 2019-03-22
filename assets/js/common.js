$(document).ready(function() {
	$('.popup-with-form').magnificPopup({
		type: 'inline',
		preloader: false,
		focus: '#name',

		// When elemened is focused, some mobile browsers in some cases zoom in
		// It looks not nice, so we disable it:
		callbacks: {
			beforeOpen: function() {
				if($(window).width() < 700) {
					this.st.focus = false;
				} else {
					this.st.focus = '#name';
				}
			}
		}
    });
    $('.popup-with-commits').magnificPopup({
		type: 'inline',
		preloader: false,

	});
});

$(document).ready(function(){
    $('.comments-carousel').owlCarousel({
        loop:true,
        margin:0,
        autoplay:true,
        autoplayTimeout:2000,
        autoplayHoverPause:true,
        responsiveClass:false,
        responsive:{
            0:{
                items:1,
                nav:true,
                dots:false,
                loop:true
            },
            600:{
                items:1,
                dots:false,
                nav:true
            },
            1000:{
                items:1,
                nav:true,
                dots:false,
                loop:true
            }
        }
    });
})