const faqs = document.querySelectorAll(".faq__item");

if (faqs.length > 0) {
	faqs[0].classList.add("active");
	faqs[0].style.color = '#F2F1ED';
	faqs[0].style.backgroundColor = '#880D1E';
}

faqs.forEach(faq => {
	faq.addEventListener("click", function() {
		if(!this.classList.contains('active')) {
			closeAllItems();
			this.classList.add("active");
			this.style.color = '#F2F1ED';
			this.style.backgroundColor = '#880D1E';
		} else {
			this.classList.remove("active");
			this.style.color = '';
			this.style.backgroundColor = '';
		}
	})
});

function closeAllItems() {
	faqs.forEach(faq => {
		faq.style.transition = 'all 0.5s';
		faq.classList.remove("active");
		faq.style.color = '';
		faq.style.backgroundColor = '';
	})
};