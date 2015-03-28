$(document).ready(function() {

//-----------------------------------------------------------------//
//-------------------------- SITE ACTIONS -------------------------//
//-----------------------------------------------------------------//
 	$('#cover').show();
	
	
	// Window function on page load, scroll, and resize events	
 	//---------------------------------------------------//	
	$(window).on("resize scroll load",function(e){		
		// Force #cover to fill whole page
		var winHeight = $(window).height();
		$('#cover').css('min-height', winHeight );
	});

	$('.arrowdown').live('click',function(event){
		$('#cover').addClass('swipe');
		scrollRevealSettings();
		setTimeout( function() {
			$('body, html').css('overflow-y', 'visible');
		}, 1000);
	});

 	// Detect direction of scrolling on page	
 	//---------------------------------------------------//
	function coverControl() {		
		$('body, html').css('overflow-y', 'hidden');
		$(window).on('mousewheel DOMMouseScroll', function (e) {
			var scrollPos 	= $(document).scrollTop();
			var direction = (function () {
			
				var delta = (e.type === 'DOMMouseScroll' ?
					e.originalEvent.detail * -40 :
					e.originalEvent.wheelDelta);
		
					return delta > 0 ? 0 : 1;
			}());
			
			if( direction === 0 ) {
				//scroll up
			} else {
				//scroll down
				$('#cover').addClass('swipe');
				setTimeout( function() {
					$('body, html').css('overflow-y', 'visible');
				}, 1000);				
			}
		});	
	};
	coverControl();

});


