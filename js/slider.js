document.addEventListener('DOMContentLoaded', () => {
		const slider = document.querySelector('.free-time__body');
		const slider2 = document.querySelector('.house__body');

		function sliders(slider){
			let isDown = false;  // определяет перетаскивание слайдера
			let startX; // для сохранения начальной позиции мыши относительно слайда
			let scrollLeft;  // для сохранения тек значения горизонтального скролла
		
			slider.addEventListener('mousedown', (e) => {
				isDown = true;
				slider.classList.add('active');
				startX = e.pageX - slider.offsetLeft; // вычисляется позиция мыши относительно слайдера
				scrollLeft = slider.scrollLeft; // сохраняется текущее значение горизонтального скролла, для плавного прокручивания
			});

			const clearSliderState = () => {
				isDown = false;
				slider.classList.remove('active');
			}
			
			slider.addEventListener('mouseleave', clearSliderState);
			slider.addEventListener('mouseup', clearSliderState);

			slider.addEventListener('mousemove', (e) => {
				if(!isDown) return;
				e.preventDefault();
				e.stopPropagation();
				const x = e.pageX - slider.offsetLeft;
				const speed = x - startX;
				slider.scrollLeft = scrollLeft - speed;
			});
		}
		sliders(slider);
		sliders(slider2);
});