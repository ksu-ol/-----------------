var swiper = new Swiper(".mySwiper", {
	slidesPerView: 2.3,
	spaceBetween: 10,
	freeMode: true,
	centeredSlides: false,
	loop: true,
	keyboard: {
		enabled: true,
		onlyInViewport: false,
	},
	breakpoints: {
		1023: {
			slidesPerView: 5.5,
			spaceBetween: 10,
		},
		767: {
			slidesPerView: 4.5,
			spaceBetween: 20,
		},
		480: {
			slidesPerView: 3.3,
			spaceBetween: 10,
		}
	}
});