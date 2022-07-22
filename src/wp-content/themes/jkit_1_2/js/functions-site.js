
			var topcarousel;
			var pagecarousel;
			var $productsContainer;
			var timeout;
			jQuery.noConflict();
			jQuery(document).ready(function($) {
				$.localScroll({hash:false, offset: 0,duration: 1200,easing:'easeInOutExpo'});
				
				if(isMobile.any){
					setContentHeight();
				}
				
				$('#parallax-block-image').parallax({speed : 0.3});
				
				$('#header-wrapper').scrollToFixed({ marginTop: 0, minWidth: 1200 });
				
				
				
				var logoSrc = $('#site-logo').attr("src");
				var logoOnScrollSrc = $('#site-logo').data("on-scroll-src");
				
				if($(document).width() > 1200){					
					if($(document).scrollTop() > 200){					
						$('#header-wrapper').data('size','small');
						$('#header-wrapper').addClass('small');
						$('#site-logo').attr('src',logoOnScrollSrc);
					}else{
						$('#header-wrapper').data('size','big');
						$('#header-wrapper').removeClass('small');
					}
				}else{
					$('#header-wrapper').data('size','big');
					$('#header-wrapper').removeClass('small');
				}
				
				
				$(window).scroll(function(){
					//console.log(document.elementFromPoint(800, 100).id);
					if($(document).width() > 1200){			
						console.log('hello2');		
						if($(document).scrollTop() > 200){
							if($('#header-wrapper').data('size') == 'big'){
								$('#header-wrapper').data('size','small');
								$('#header-wrapper').addClass('small');
								$('#header-top').slideUp('slow');
								$('#site-logo').attr('src',logoOnScrollSrc);
							}
						}else{
							if($('#header-wrapper').data('size') == 'small'){
								$('#header-wrapper').data('size','big');
								$('#header-wrapper').removeClass('small');
								$('#header-top').slideDown('fast');
								$('#site-logo').attr('src',logoSrc);
							}  
						}
					}else if($('#header-wrapper').data('size') == 'small'){
						$('#header-wrapper').data('size','big');
						$('#header-wrapper').removeClass('small');
						$('#header-top').slideUp('slow');
						$('#site-logo').attr('src',logoSrc);
					}else{
						$('#header-top').slideDown('fast');
						$('#site-logo').attr('src',logoSrc);
					}
				});
				
				
				
				
				$('.service-height-block').matchHeight();
				$('.service-box .details').matchHeight();
				//$('.page-col').matchHeight();
				$('.page-block-col').matchHeight();

				$('.product-block').matchHeight();
				$('.footer_nav_block').matchHeight();
	
				$('.mega-col').matchHeight();
				
				$('.careers-block').matchHeight();
				
				$('.feature-block').matchHeight();
				
				$('.blog-featured-post-height').matchHeight();
				
				$('.articles article .details h3').matchHeight();
				$('.articles article .details .text').matchHeight();
				
				
				
			
				$('#info-hub .info-hub-blocks .info-hub-block .img-holder').imagefill();
				
				$('.services .service-block .img-holder').imagefill();
				$('.personalized-solutions .img-holder').imagefill();
				
				$('.next-prev-blog-post .img-holder').imagefill();
				
				
				$(".iframe").fancybox({
					'padding': 10,
					'width'				: '365',
					'height'			: '75%',
					'autoScale'     	: true,
					'transitionIn'		: 'none',
					'transitionOut'		: 'none',
					'type'				: 'iframe'
				});
				
				
				$(".fancybox-media").fancybox({
					'padding': 0,
					'autoScale'     	: false,
					'transitionIn'		: 'none',
					'transitionOut'		: 'none',
					'type'				: 'iframe',
					helpers : {
					   title: { type: 'inside'},
					   overlay: {locked: false}
					}
				});
				
				
				$('.btn-inquiry').fancybox({
					padding: 5,openEffect : 'elastic',
					openSpeed  : 300,
					closeEffect : 'elastic',
					closeSpeed  : 200,
					helpers : {
					   title: { type: 'inside'},
					   overlay: {locked: false}
					}
				});
				
				$('#expand-side-nav').click(function(e){
					$('#side-nav').slideToggle('fast');
					
					$('#expand-icon').toggleClass('fa-bars');
					$('#expand-icon').toggleClass('fa-arrow-circle-up');
					
				});
				
				
				if(jQuery(window).width() >= 767){
					timeout = setTimeout(doIsotope,1000);
				}
				
					//$(".tagline1").lettering();
				
					topcarousel = $("#top-carousel"); 
					topcarousel.owlCarousel({items : 1,
											itemsDesktop : [1200,1],
											itemsDesktopSmall : [960,1],
											itemsTablet: [767,1],
											itemsMobile : [480,1],
											paginationSpeed: 800,
											slideSpeed: 200,
											autoPlay: true,
											addClassActive:true,
											transitionStyle : "fade",
											pagination: true});
					$("#imagecarousel-navigation .next").click(function(){pagecarousel.trigger('owl.next');})
					$("#imagecarousel-navigation .prev").click(function(){pagecarousel.trigger('owl.prev');})
					
					
					
					pagecarousel = $("#page-carousel"); 
					pagecarousel.owlCarousel({items : 1,
											itemsDesktop : [1200,1],
											itemsDesktopSmall : [960,1],
											itemsTablet: [767,1],
											itemsMobile : [480,1],
											paginationSpeed: 800,
											slideSpeed: 200,
											autoPlay: false,
											addClassActive:true,
											transitionStyle : "fade",
											pagination: false});
					$("#imagecarousel-navigation .next").click(function(){pagecarousel.trigger('owl.next');})
					$("#imagecarousel-navigation .prev").click(function(){pagecarousel.trigger('owl.prev');})
					
					
					iotcarousel = $("#iot-carousel"); 
					iotcarousel.owlCarousel({items : 1,
											itemsDesktop : [1200,1],
											itemsDesktopSmall : [960,1],
											itemsTablet: [767,1],
											itemsMobile : [480,1],
											paginationSpeed: 800,
											slideSpeed: 200,
											autoPlay: true,
											addClassActive:true,
											transitionStyle : "fade",
											pagination: true});
					$("#iotcarousel-navigation .next").click(function(){iotcarousel.trigger('owl.next');})
					$("#iotcarousel-navigation .prev").click(function(){iotcarousel.trigger('owl.prev');})
					
					
					infoslidercarousel = $("#infoslider-carousel"); 
					infoslidercarousel.owlCarousel({items : 1,
											itemsDesktop : [1200,1],
											itemsDesktopSmall : [960,1],
											itemsTablet: [767,1],
											itemsMobile : [480,1],
											paginationSpeed: 800,
											slideSpeed: 200,
											autoPlay: true,
											addClassActive:true,
											transitionStyle : "fade",
											pagination: true});
					$("#infoslider-navigation .next").click(function(){infoslidercarousel.trigger('owl.next');})
					$("#infoslider-navigation .prev").click(function(){infoslidercarousel.trigger('owl.prev');})
					
					
					galleryslidercarousel = $("#galleryslider-carousel"); 
					galleryslidercarousel.owlCarousel({items : 1,
											itemsDesktop : [1200,1],
											itemsDesktopSmall : [960,1],
											itemsTablet: [767,1],
											itemsMobile : [480,1],
											paginationSpeed: 800,
											slideSpeed: 200,
											autoPlay: true,
											addClassActive:true,
											transitionStyle : "fade",
											pagination: true});
					$("#galleryslider-navigation .next").click(function(){galleryslidercarousel.trigger('owl.next');})
					$("#galleryslider-navigation .prev").click(function(){galleryslidercarousel.trigger('owl.prev');})
					
					
					testimonialscarousel = $("#testimonials-carousel"); 
					testimonialscarousel.owlCarousel({items : 3,
											itemsDesktop : [1200,3],
											itemsDesktopSmall : [960,3],
											itemsTablet: [767,2],
											itemsMobile : [480,1],
											paginationSpeed: 800,
											slideSpeed: 200,
											autoPlay: false,
											addClassActive:true,
											transitionStyle : "fade",
											pagination: true});
					$("#imagecarousel-navigation .next").click(function(){testimonialscarousel.trigger('owl.next');})
					$("#imagecarousel-navigation .prev").click(function(){testimonialscarousel.trigger('owl.prev');})
					
					
					testimonialslargecarousel = $("#testimonials-large-carousel"); 
					testimonialslargecarousel.owlCarousel({items : 1,
											itemsDesktop : [1200,1],
											itemsDesktopSmall : [960,1],
											itemsTablet: [767,1],
											itemsMobile : [480,1],
											paginationSpeed: 800,
											slideSpeed: 200,
											autoPlay: true,
											addClassActive:true,
											transitionStyle : "fade",
											pagination: true});
					$("#testimonials-largecarousel-navigation .next").click(function(){testimonialslargecarousel.trigger('owl.next');})
					$("#testimonials-largecarousel-navigation .prev").click(function(){testimonialslargecarousel.trigger('owl.prev');})
					
					
					offerscarousel = $("#offer-slider"); 
					offerscarousel.owlCarousel({items : 1,
											itemsDesktop : [1200,1],
											itemsDesktopSmall : [960,1],
											itemsTablet: [767,1],
											itemsMobile : [480,1],
											paginationSpeed: 800,
											slideSpeed: 200,
											autoPlay: true,
											addClassActive:true,
											pagination: true});
					$("#offerscarousel-navigation .next").click(function(){offerscarousel.trigger('owl.next');})
					$("#offerscarousel-navigation .prev").click(function(){offerscarousel.trigger('owl.prev');})
					
					
					
				var wow = new WOW({boxClass:     'wow', animateClass: 'animated', offset: 0,mobile: true});
				wow.init();
				
				
				//dropdown nav modification (change behavior)
				$('ul.nav li.dropdown').hover(function(){
						if(jQuery(window).width() > 982){		
					   		jQuery(this).children('ul.dropdown-menu').stop().fadeIn('fast'); 
							//jQuery(this).children('ul.dropdown-menu').stop().show(); 
						}else{
							return true;	
						}
					}, function(){
						if(jQuery(window).width() > 982){
					   		jQuery(this).children('ul.dropdown-menu').stop().fadeOut(); 
							//jQuery(this).children('ul.dropdown-menu').stop().hide(); 
						}else{
							return true;	
						}
				});
	

				//dropdown nav modification
				if ( $(window).width() > 982) {
					$('.dropdown-toggle').removeAttr('data-toggle');
					$('.dropdown-menu').removeAttr('style');
					$('.dropdown').removeClass('open');
				}
				else{
					$('.dropdown-toggle').attr("data-toggle","dropdown");
	
				}
				
				//dropdown nav modification
				$(window).resize(function () {
					if ( $(window).width() > 982) {
						$('.dropdown-toggle').removeAttr('data-toggle');
						$('.dropdown-menu').removeAttr('style');
						$('.dropdown').removeClass('open');
					}
					else    {
						$('.dropdown-toggle').attr("data-toggle","dropdown");
		
					}
				});
				
				
				
				
				$('.side-navigation .dropdown-toggle').attr("data-toggle","dropdown");
				
				$(window).resize(function () {
					$('.side-navigation .dropdown-toggle').attr("data-toggle","dropdown");
				});
			
				$('.side-navigation .inner  ul > li.current-menu-ancestor > .dropdown-toggle').click();
				$('.side-navigation .inner  ul > li.current-menu-item > .dropdown-toggle').click();
				
				$(document).on('click', '.side-navigation', function (e) {
				  e.stopPropagation();
				});
	
	
				$('.description-component .description-block .title').click(function(){
					$(this).next().slideToggle('fast');
					$(this).parent().toggleClass('closed');
				})
				
	
			
				var bgss = new bgsrcset();
				bgss.callonce = false;
				bgss.init('.bgimg', function(a){
				  a.node.className += ' loaded';
				} );
				
				
				//showWidth();
				
			});
			
			
			function doIsotope(){	
					$productsContainer = jQuery('#product-items').isotope({
					  // options
					});
				}
			
			function setContentHeight(){
					var content_height = jQuery(window).height();
						
						jQuery(".home #slider-wrapper").height(content_height);
						
						jQuery('.home-desktop-carousel').height(content_height);
						jQuery('.home-desktop-carousel .item').height(content_height);
						
				}
			
			jQuery(window).resize(function() {
				if(isMobile.any){
					setContentHeight();
				}
			});
			
			
			function showWidth(){
				jQuery('#debuginfo').css({'position': 'fixed','top':0,'right':40,'color':'#f00','z-index':10000,'opacity':1});
				jQuery('#debuginfo').html(jQuery(window).width());
				jQuery(window).resize(function() {
					jQuery('#debuginfo').html(jQuery(window).width() + 15);	
				});
				
			}
			
			