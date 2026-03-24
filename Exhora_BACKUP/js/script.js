(function($) {
	
	"use strict";
	
	$('.preloader').html('<svg class="pl1" height="128px" viewBox="0 0 128 128" width="128px"><defs><linearGradient id="pl-gradient" x1="0" x2="1" y1="0" y2="1"><stop offset="0%" stop-color="#D51C55"/><stop offset="100%" stop-color="#9914CB"/></linearGradient></defs><g class="pl1__g"><g transform="translate(20,20) rotate(0,44,44)"><g class="pl1__rect-g"><rect height="40" width="40" class="pl1__rect" rx="8" ry="8"/><rect height="40" width="40" class="pl1__rect" rx="8" ry="8" transform="translate(0,48)"/></g><g class="pl1__rect-g" transform="rotate(180,44,44)"><rect height="40" width="40" class="pl1__rect" rx="8" ry="8"/><rect height="40" width="40" class="pl1__rect" rx="8" ry="8" transform="translate(0,48)"/></g></g></g></svg>');

	//Hide Loading Box (Preloader)
	function handlePreloader() {
		if($('.preloader').length){
			$('.preloader').delay(200).fadeOut(500);
		}
	}
	
	//Update Header Style and Scroll to Top
	function headerStyle() {
		if($('.main-header').length){
			var windowpos = $(window).scrollTop();
			var siteHeader = $('.header-style-one');
			var scrollLink = $('.scroll-to-top');
			var sticky_header = $('.main-header .sticky-header');
			if (windowpos > 100) {
				sticky_header.addClass("fixed-header animated slideInDown");
				scrollLink.fadeIn(300);
			}else {
				sticky_header.removeClass("fixed-header animated slideInDown");
				scrollLink.fadeOut(300);
			}
			if (windowpos > 1) {
				siteHeader.addClass("fixed-header");
			}else {
				siteHeader.removeClass("fixed-header");
			}
		}
	}
	headerStyle();

	//Submenu Dropdown Toggle
	if($('.main-header li.dropdown ul').length){
		$('.main-header .navigation li.dropdown').append('<div class="dropdown-btn"><i class="fa fa-angle-down"></i></div>');
	}

	//Mobile Nav Hide Show
	if($('.mobile-menu').length){
		
		var mobileMenuContent = $('.main-header .main-menu .navigation').html();

		$('.mobile-menu .navigation').append(mobileMenuContent);
		$('.sticky-header .navigation').append(mobileMenuContent);
		$(document).on('click', '.mobile-menu .close-btn', function() {
			$('body').removeClass('mobile-menu-visible');
		});
		
		//Dropdown Button
		$(document).on('click', '.mobile-menu li.dropdown .dropdown-btn', function() {
			$(this).prev('ul').slideToggle(500);
			$(this).toggleClass('active');
			$(this).prev('.mega-menu').slideToggle(500);
		});

		//Menu Toggle Btn
		$(document).on('click', '.mobile-nav-toggler', function() {
			$('body').addClass('mobile-menu-visible');
		});

		//Menu Toggle Btn
		$(document).on('click', '.mobile-menu .menu-backdrop, .mobile-menu .close-btn', function() {
			$('body').removeClass('mobile-menu-visible');
		});

	}
	
	//Header Search
	if($('.search-btn').length) {
		$(document).on('click', '.search-btn', function() {
			$('.main-header').addClass('moblie-search-active');
		});
		$(document).on('click', '.close-search, .search-back-drop', function() {
			$('.main-header').removeClass('moblie-search-active');
		});
	}
	
	//Hidder bar
	if ($('.hidden-bar').length){
		//Menu Toggle Btn
		$('.toggle-hidden-bar').on('click', function() {
			$('body').addClass('active-hidden-bar');
		});

		//Menu Toggle Btn
		$('.hidden-bar-back-drop, .hidden-bar .close-btn').on('click', function() {
			$('body').removeClass('active-hidden-bar');
		});
	}


	$(document).on('mouseenter', '.has-active .inner-box', function() {
		$(this).parents().siblings().find('.inner-box').removeClass('active');
		$(this).addClass('active');
	});

	

	//team-Swiper
	if ($('.team-slider').length) {
		var swiper = new Swiper(".team-slider", {
			slidesPerView: 4,
			spaceBetween: 30,
			breakpoints: {
				320: {
					slidesPerView: 1,
				},
				768: {
					slidesPerView: 2,
				},
				1024: {
					slidesPerView: 3,
				},
				1400: {
					slidesPerView: 4,
				},
			},
			pagination: {
				el: ".swiper-pagination",
				type: "progressbar",
			},
		});
	}

	// Testimonial One Slider
	if ($('.testi-swiper').length) {  
		var swiper = new Swiper(".testi-swiper", {
			slidesPerView: 2,
			spaceBetween: 98,
			loop: true,
			navigation: {
				nextEl: ".swiper-button-next",
				prevEl: ".swiper-button-prev",
			},
			breakpoints: {
				1100: {
					slidesPerView: 2,
					spaceBetween: 60,
				},
				768: {
					slidesPerView: 2,
					spaceBetween: 30,
				},
				576: {
					slidesPerView: 1,
					spaceBetween: 10,
				},
				0: {
					slidesPerView: 1,
					spaceBetween: 10,
				},
			},
		});
	}


	// Gallery Slider
	if ($('.gallery-swiper').length) {  
		var swiper = new Swiper(".gallery-swiper", {
			slidesPerView: 6,
			spaceBetween: 10,
			loop: true,
			navigation: {
				nextEl: ".swiper-button-next",
				prevEl: ".swiper-button-prev",
			},
			breakpoints: {
				1200: {
					slidesPerView: 6,
				},
				1100: {
					slidesPerView: 8,
				},
				768: {
					slidesPerView: 7,
				},
				576: {
					slidesPerView: 5,
				},
				330: {
					slidesPerView: 4,
				},
				0: {
					slidesPerView: 3,
				},
			},
		});
	}

	// Gallery Slider
	if ($('.gallery-swiper-two').length) {  
		var swiper = new Swiper(".gallery-swiper-two", {
			slidesPerView: 6,
			loop: true,
			autoplay: {
				delay: 2000,
				disableOnInteraction: false,
			},
			speed: 1000,
			breakpoints: {
				1200: {
					slidesPerView: 6,
				},
				1100: {
					slidesPerView: 6,
				},
				768: {
					slidesPerView: 5,
				},
				400: {
					slidesPerView: 3,
				},
				0: {
					slidesPerView: 2,
				},
			},
		});
	}

	// Blog Slider
	if ($('.blog-swiper').length) {  
		var swiper = new Swiper(".blog-swiper", {
			slidesPerView: 1,
			spaceBetween: 0,
			loop: true,
			navigation: {
				nextEl: ".swiper-button-next",
				prevEl: ".swiper-button-prev",
			},
		});
	}


	// Testimonial One Slider
	if ($('.post-swiper').length) {  
		var swiper = new Swiper(".post-swiper", {
			slidesPerView: 1,
			spaceBetween: 98,
			loop: true,
			navigation: {
				nextEl: ".swiper-button-next",
				prevEl: ".swiper-button-prev",
			},
		});
	}

	// Testinomials Three Slider
	if ($('.testi-swiper-three').length) {  
		var swiper = new Swiper(".testi-swiper-three-thumb", {
			loop: true,
			slidesPerView: 1,
			slidesPerView: "auto",
			centeredSlides: true,
			thumbs: {
				swiper: swiper2,
			},
		});
		var swiper2 = new Swiper(".testi-swiper-three", {
			loop: true,
			slidesPerView: 1,
			spaceBetween: 10,
			centeredSlides: true,
			navigation: {
				nextEl: ".swiper-button-next",
				prevEl: ".swiper-button-prev",
			},
			thumbs: {
				swiper: swiper,
			},
		});
	}


	var swiper = new Swiper(".product-detail-thumbs-swiper", {
		spaceBetween: 10,
		slidesPerView: 4,
		freeMode: true,
		watchSlidesProgress: true,
	  });
	  var swiper2 = new Swiper(".product-detail-swiper", {
		spaceBetween: 10,
		thumbs: {
		  swiper: swiper,
		},
	  });


	// Banner Tying Effect
	class Typewriter {
		constructor(element, words, delay = 2000) {
			this.element = element;
			this.words = words;
			this.txt = '';
			this.wordIndex = 0;
			this.isDeleting = false;
			this.delay = parseInt(delay, 10) || 2000;
			this.typingSpeed = 100;
			this.type();
		}
	
		type() {
			const currentWord = this.words[this.wordIndex % this.words.length];
			
			this.txt = this.isDeleting 
				? currentWord.substring(0, this.txt.length - 1) 
				: currentWord.substring(0, this.txt.length + 1);
	
			this.element.innerHTML = `<span class="wrap">${this.txt}</span>`;
	
			let speed = this.isDeleting ? this.typingSpeed / 2 : this.typingSpeed;
	
			if (!this.isDeleting && this.txt === currentWord) {
				speed = this.delay;
				this.isDeleting = true;
			} else if (this.isDeleting && this.txt === '') {
				this.isDeleting = false;
				this.wordIndex++;
				speed = 500;
			}
	
			requestAnimationFrame(() => setTimeout(() => this.type(), speed));
		}
	}
	
	document.addEventListener("DOMContentLoaded", () => {
		document.querySelectorAll(".banner-typing").forEach(element => {
			const words = JSON.parse(element.getAttribute("data-type"));
			const delay = parseInt(element.getAttribute("data-period"), 10) || 0;
			if (words) new Typewriter(element, words, delay);
		});
	
		// Inject CSS
		const style = document.createElement("style");
		style.textContent = ".banner-typing > .wrap { border-right: 0.08em solid #fff; transition: border-color 0.3s ease-in-out; }";
		document.head.appendChild(style);
	});


	  document.addEventListener("DOMContentLoaded", function () {
		document.querySelectorAll(".increment").forEach(button => {
			button.addEventListener("click", function () {
				let input = this.closest(".bootstrap-touchspin").querySelector(".quantity-spinner");
				input.value = parseInt(input.value) + 1;
			});
		});
	
		document.querySelectorAll(".decrement").forEach(button => {
			button.addEventListener("click", function () {
				let input = this.closest(".bootstrap-touchspin").querySelector(".quantity-spinner");
				if (parseInt(input.value, 10) > 1) {
					input.value = parseInt(input.value) - 1;
				}
			});
		});
	});
	
	
	$(document).ready(function () {
		$('a[data-rel="lightcase"]').lightcase();
	});
	
	

	// Event Countdown Timer 
	if ($('.time-countdown').length) {  
		$('.time-countdown').each(function() {
			var $this = $(this), finalDate = $(this).data('countdown');
			$this.countdown(finalDate, function(event) {
				var $this = $(this).html(event.strftime(
					'' +
					'<div class="counter-column"><span class="count">%D</span><sub>Days</sub></div>' +
					'<span class="separator">:</span>' +
					'<div class="counter-column"><span class="count">%H</span><sub>Hours</sub></div>' +
					'<span class="separator">:</span>' +
					'<div class="counter-column"><span class="count">%M</span><sub>Minutes</sub></div>' +
					'<span class="separator">:</span>' +
					'<div class="counter-column"><span class="count">%S</span><sub>Seconds</sub></div>'
				));
			});
		});
	}

	// Coming Soon Clock
	if($('.clock-wrapper').length){  
		(function(){
			//generate clock animations
			var now       = new Date(),
				hourDeg   = now.getHours() / 12 * 360 + now.getMinutes() / 60 * 30,
				minuteDeg = now.getMinutes() / 60 * 360 + now.getSeconds() / 60 * 6,
				secondDeg = now.getSeconds() / 60 * 360,
				stylesDeg = [
					"@-webkit-keyframes rotate-hour{from{transform:rotate(" + hourDeg + "deg);}to{transform:rotate(" + (hourDeg + 360) + "deg);}}",
					"@-webkit-keyframes rotate-minute{from{transform:rotate(" + minuteDeg + "deg);}to{transform:rotate(" + (minuteDeg + 360) + "deg);}}",
					"@-webkit-keyframes rotate-second{from{transform:rotate(" + secondDeg + "deg);}to{transform:rotate(" + (secondDeg + 360) + "deg);}}",
					"@-moz-keyframes rotate-hour{from{transform:rotate(" + hourDeg + "deg);}to{transform:rotate(" + (hourDeg + 360) + "deg);}}",
					"@-moz-keyframes rotate-minute{from{transform:rotate(" + minuteDeg + "deg);}to{transform:rotate(" + (minuteDeg + 360) + "deg);}}",
					"@-moz-keyframes rotate-second{from{transform:rotate(" + secondDeg + "deg);}to{transform:rotate(" + (secondDeg + 360) + "deg);}}"
				].join("");
			document.getElementById("clock-animations").innerHTML = stylesDeg;
		})();
	}

	//Accordion Box
	if ($('.accordion-box').length) {
		$(".accordion-box").on('click', '.acc-btn', function () {

			var outerBox = $(this).parents('.accordion-box');
			var target = $(this).parents('.accordion');

			if (!$(this).hasClass('active')) {
				$(outerBox).find('.accordion .acc-btn').removeClass('active ');
			}

			if ($(this).next('.acc-content').is(':visible') === true) {
				return false;
			} else {
				$(this).addClass('active');
				$(outerBox).children('.accordion').removeClass('active-block');
				$(outerBox).find('.accordion').children('.acc-content').slideUp(300);
				target.addClass('active-block');
				$(this).next('.acc-content').slideDown(300);
			}
		});
	}
	
	//Event Image Hover
	if ($('.event-block-inner').length) {
		const eventImgItems = document.querySelectorAll(".event-block-inner");
		function followImageCursor(event, hoverElement) {
		const contentBox = hoverElement.parentElement.getBoundingClientRect();
		const dx = event.clientX - contentBox.x;
		const dy = event.clientY - contentBox.y;
		hoverElement.style.transform = `translate(${dx - hoverElement.offsetWidth / 2}px, ${dy - hoverElement.offsetHeight / 4}px)`;}
		eventImgItems.forEach((item) => {
			const hoverElement = item.querySelector(".event-hover");
			item.addEventListener("mousemove", (event) => {
				followImageCursor(event, hoverElement);
			});
			item.addEventListener("mouseleave", () => {
				hoverElement.style.transform = "translate(0, 0)";
			});
		});
	}

	//Fact Counter + Text Count
	if($('.count-box').length){
		$('.count-box').appear(function(){
			var $t = $(this),
				n = $t.find(".count-text").attr("data-stop"),
				r = parseInt($t.find(".count-text").attr("data-speed"), 10);
			if (!$t.hasClass("counted")) {
				$t.addClass("counted");
				$({
					countNum: $t.find(".count-text").text()
				}).animate({
					countNum: n
				}, {
					duration: r,
					easing: "linear",
					step: function() {
						$t.find(".count-text").text(Math.floor(this.countNum));
					},
					complete: function() {
						$t.find(".count-text").text(this.countNum);
					}
				});
			}
			
		},{accY: 0});
	}

	//Tabs Box
	if ($('.tabs-box').length) {
		$('.tabs-box .tab-buttons .tab-btn').on('click', function (e) {
			e.preventDefault();
			var target = $($(this).attr('data-tab'));

			if ($(target).is(':visible')) {
				return false;
			} else {
				target.parents('.tabs-box').find('.tab-buttons').find('.tab-btn').removeClass('active-btn');
				$(this).addClass('active-btn');
				target.parents('.tabs-box').find('.tabs-content').find('.tab').fadeOut(0);
				target.parents('.tabs-box').find('.tabs-content').find('.tab').removeClass('active-tab animated fadeIn');
				$(target).fadeIn(300);
				$(target).addClass('active-tab animated fadeIn');
			}
		});
	}

	//Progress Bar
	if ($('.progress-line').length) {
		$('.progress-line').appear(function () {
			var el = $(this);
			var percent = el.data('width');
			$(el).css('width', percent + '%');
		}, { accY: 0 });
	}

	//LightBox / Fancybox
	if($('.lightbox-image').length) {
		$('.lightbox-image').fancybox({
			openEffect  : 'fade',
			closeEffect : 'fade',
			helpers : {
				media : {}
			}
		});
	}



	if($('.circle-follow').length){		
		// Mouse Circle Animation 
		var $circle = $('.circle'),
		$follow = $('.circle-follow');
		function moveCircle(e) {
			TweenLite.to($circle, 0.3, {
				x: e.clientX,
				y: e.clientY
			});
			TweenLite.to($follow, 0.7, {
				x: e.clientX,
				y: e.clientY
			});
		}
		function hoverFunc(e) {
			TweenLite.to($circle, 0.3, {
				opacity: 1,
				scale: 0
			});
			TweenLite.to($follow, 0.3, {
				scale: 1.2
			});
		}
		function unhoverFunc(e) {
			TweenLite.to($circle, 0.3, {
				opacity: 1,
				scale: 1
			});
			TweenLite.to($follow, 0.3, {
				scale: 1
			});
		}
		$(window).on('mousemove', moveCircle);
		$("a, .clink").hover(hoverFunc, unhoverFunc);
	}

	// Elements Animation
	if($('.wow').length){
		var wow = new WOW(
		  {
			boxClass:     'wow',      // animated element css class (default is wow)
			animateClass: 'animated', // animation css class (default is animated)
			offset:       0,          // distance to the element when triggering the animation (default is 0)
			mobile:       false,       // trigger animations on mobile devices (default is true)
			live:         true       // act on asynchronously loaded content (default is true)
		  }
		);
		wow.init();
	}
	
	//Image Reveal Animation
	if($('.reveal').length){
		gsap.registerPlugin(ScrollTrigger);
		let revealContainers = document.querySelectorAll(".reveal");
		revealContainers.forEach((container) => {
			let image = container.querySelector("img");
			let tl = gsap.timeline({
				scrollTrigger: {
				trigger: container,
				toggleActions: "play none none none"
				}
			});
			tl.set(container, { autoAlpha: 1 });
			tl.from(container, 1.5, {
				xPercent: -100,
				ease: Power2.out
			});
			tl.from(image, 1.5, {
				xPercent: 100,
				scale: 1.3,
				delay: -1.5,
				ease: Power2.out
			});
		});
	}


	// Gsap Text Animations
	window.addEventListener("DOMContentLoaded", (event) => {
		// Split text into spans
		if ($(".text-split").length) {
			let typeSplit = new SplitType(".text-split", {
				types: "words, chars",
				tagName: "span"
			});
		}
			
		//Title Animations
		var tl = gsap.timeline(),
		mySplitText = new SplitText(".title-anim", { type: "words,chars" }),
		chars = mySplitText.chars;
		tl.from(chars, {
			duration: 0.8,
			opacity: 0,
			scale: 0,
			delay:2,
			y: 80,
			rotationX: 180,
			transformOrigin: "0% 50% -50",
			ease: "back",
			stagger: 0.08
		});

		// Link timelines to scroll position
		function createScrollTrigger(triggerElement, timeline) {
			// Reset tl when scroll out of view past bottom of screen
			ScrollTrigger.create({
				trigger: triggerElement,
				start: "top bottom",
				onLeaveBack: () => {
					timeline.progress(0);
					timeline.pause();
				}
			});
			// Play tl when scrolled into view (60% from top of screen)
			ScrollTrigger.create({
				trigger: triggerElement,
				start: "top 60%",
				onEnter: () => timeline.play()
			});
		}

		$(".words-slide-up").each(function (index) {
			let tl = gsap.timeline({ paused: true });
			tl.from($(this).find(".word"), { opacity: 0, yPercent: 100, duration: 0.5, ease: "back.out(2)", stagger: { amount: 0.5 } });
			createScrollTrigger($(this), tl);
		});

		$(".words-rotate-in").each(function (index) {
			let tl = gsap.timeline({ paused: true });
			tl.set($(this).find(".word"), { transformPerspective: 1000 });
			tl.from($(this).find(".word"), { rotationX: -90, duration: 0.6, ease: "power2.out", stagger: { amount: 0.6 } });
			createScrollTrigger($(this), tl);
		});

		$(".words-slide-from-right").each(function (index) {
			let tl = gsap.timeline({ paused: true });
			tl.from($(this).find(".word"), { opacity: 0, x: "1em", duration: 0.6, ease: "power2.out", stagger: { amount: 0.2 } });
			createScrollTrigger($(this), tl);
		});

		$(".letters-slide-up").each(function (index) {
			let tl = gsap.timeline({ paused: true });
			tl.from($(this).find(".char"), { yPercent: 100, duration: 0.2, ease: "power1.out", stagger: { amount: 0.6 } });
			createScrollTrigger($(this), tl);
		});

		$(".letters-slide-down").each(function (index) {
			let tl = gsap.timeline({ paused: true });
			tl.from($(this).find(".char"), { yPercent: -120, duration: 0.3, ease: "power1.out", stagger: { amount: 0.7 } });
			createScrollTrigger($(this), tl);
		});

		$(".letters-fade-in").each(function (index) {
			let tl = gsap.timeline({ paused: true });
			tl.from($(this).find(".char"), { opacity: 0, duration: 0.2, ease: "power1.out", stagger: { amount: 0.8 } });
			createScrollTrigger($(this), tl);
		});

		$(".letters-fade-in-random").each(function (index) {
			let tl = gsap.timeline({ paused: true });
			tl.from($(this).find(".char"), { opacity: 0, duration: 0.05, ease: "power1.out", stagger: { amount: 0.4, from: "random" } });
			createScrollTrigger($(this), tl);
		});

		$(".scrub-each-word").each(function (index) {
			let tl = gsap.timeline({
				scrollTrigger: {
					trigger: $(this),
					start: "top 90%",
					end: "top center",
					scrub: true
				}
			});
			tl.from($(this).find(".word"), { opacity: 0.2, duration: 0.2, ease: "power1.out", stagger: { each: 0.4 } });
		});

		// Avoid flash of unstyled content
		if ($(".text-split").length) {
			gsap.set(".text-split", { opacity: 1 });
		}
	});
	
	// Text Invert
	function initTextReveal() {
		const tagetedElementContainer =
			document.querySelectorAll(".text-reveal-anim");
		if (tagetedElementContainer?.length) {
			tagetedElementContainer.forEach(e => {
				var t = new SplitType(e, {
					types: "chars",
				});
				gsap.from(t.chars, {
					scrollTrigger: {
						trigger: e,
						start: "top 75%",
						end: "top 25%",
						scrub: !0,
						duration: 0.5
					},
					opacity: 0.1,
					stagger: 5,
					ease: "back.out",
				});
			});
		}
	}
	initTextReveal();

	gsap.to(".parallax-bg", {
		yPercent: -50, // Moves the background up
		ease: "none",
		scrollTrigger: {
			trigger: ".parallax-section",
			start: "top bottom",
			end: "bottom top",
			scrub: true
		}
	});

	if ($(".expand-section").length) {
		gsap.to(".expand-section", {
			width: "100%",  // Expands to full width
			borderRadius: 0,
			ease: "power2.out",
			scrollTrigger: {
				trigger: ".expand-section",
				start: "top 70%",
				end: "top 5%",
				scrub: true
			}
		});
	}
	


	//Contact Form Validation
	if ($('#email-form').length) {
		$(document).on('click', '#submit', function(event) {
			event.preventDefault(); // Prevent default form submission
	
			var form = '#email-form';
	
			var firstname = $('#email-form .firstname').val().trim();
			var lastname = $('#email-form .lastname').val().trim();
			var email = $('#email-form .email').val().trim();
			var phone = $('#email-form .phone').val().trim();
			var message = $('#email-form .message').val().trim();
	
			if (firstname === "" || lastname === "" || email === "" || phone === "" || message === "") {
				$('#email-form .response').html('<div class="failed">Please fill in all required fields.</div>');
				return false;
			}
	
			$.ajax({
				url: "sendemail.php",
				method: "POST",
				data: $(form).serialize(),
				beforeSend: function () {
					$('#email-form .response').html('<div class="text-info"><img src="images/icons/preloader.gif"> Loading...</div>');
				},
				success: function (data) {
					$(form).trigger("reset");
					$('#email-form .response').fadeIn().html(data);
					setTimeout(function () {
						$('#email-form .response').fadeOut("slow");
					}, 5000);
				},
				error: function () {
					$('#email-form .response').fadeIn().html('<div class="failed">Error: Could not send email.</div>');
				}
			});
		});
	}

	
/* ==========================================================================
   When document is Scrollig, do
   ========================================================================== */
	
    $(window).on('scroll', function() {
		headerStyle();
	});
	
/* ==========================================================================
   When document is loading, do
   ========================================================================== */
	
    $(window).on('load', function() {
		handlePreloader();
	});	

})(window.jQuery);

