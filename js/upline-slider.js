// слайдер thumb на стр домики

const imgs = document.querySelectorAll('.interior__image-select a');
const imgBtns = [...imgs];
let imgId = 1;

imgBtns.forEach((imgItem) => {
	imgItem.addEventListener('click', (event) => {
		event.preventDefault();
		imgId = imgItem.dataset.id;
		slideImage();
	})
});


function slideImage(){
	const displayWidth = document.querySelector('.interior__image-showcase img:first-child').clientWidth;

	document.querySelector('.interior__image-showcase').style.transform = `translateX(${-(imgId - 1) * displayWidth}px)`;
}

