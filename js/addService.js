document.addEventListener('DOMContentLoaded', function() {
	const serviceButtons = document.querySelectorAll('.toggleBtn');

	// Функция для добавления услуги в список
	function addService(serviceName, servicePriceStr) {
			const selectedServices = document.getElementById('selectedServices');
			const totalPriceElement = document.getElementById('housePrice2');

			const li = document.createElement('li');
			li.className = 'booking__window-activite';

			const p1 = document.createElement('p');
			p1.textContent = serviceName;

			const p2 = document.createElement('p');
			p2.textContent = servicePriceStr;

			li.appendChild(p1);
			li.appendChild(p2);
			selectedServices.appendChild(li);

			li.style.display = 'flex';
			li.style.justifyContent = "space-between";
			li.style.listStyleType = 'none';
			li.style.fontSize = '16px';

			// Обновляем общую цену
			const servicePrice = parseFloat(servicePriceStr.replace(/\D/g, ''));
			const currentTotalPrice = parseFloat(totalPriceElement.textContent.replace(/\D/g, ''));
			const newTotalPrice = currentTotalPrice + servicePrice;

			// Форматируем и выводим новую общую цену
			totalPriceElement.textContent = `${newTotalPrice} руб`;
	}

	// Функция для удаления услуги из списка
	function removeService(serviceName, servicePriceStr) {
			const selectedServices = document.getElementById('selectedServices');
			const totalPriceElement = document.getElementById('housePrice2');

			const existingService = Array.from(selectedServices.children).find(item => item.textContent.includes(serviceName));

			if (existingService) {
					const servicePrice = parseFloat(servicePriceStr.replace(/\D/g, ''));
					existingService.remove();

					// Обновляем общую цену
					const currentTotalPrice = parseFloat(totalPriceElement.textContent.replace(/\D/g, ''));
					const newTotalPrice = currentTotalPrice - servicePrice;

					// Форматируем и выводим новую общую цену
					totalPriceElement.textContent = `${newTotalPrice} руб`;
			}
	}

	// Обработчики кликов на кнопки услуг
	serviceButtons.forEach(button => {
			button.addEventListener('click', function() {
					const serviceName = this.parentElement.getAttribute('data-activity-name');
					const price = this.parentElement.getAttribute('data-activity-price');
					const existingService = Array.from(document.getElementById('selectedServices').children).find(item => item.textContent.includes(serviceName));

					if (!existingService) {
							// Добавляем услугу
							addService(serviceName, price);
							this.classList.toggle('plus-button-light');
							this.classList.toggle('plus-button');
							this.style.transition = "all 0.5s";
					} else {
							// Удаляем услугу
							removeService(serviceName, price);
							this.classList.toggle('plus-button-light');
							this.classList.toggle('plus-button');
							this.style.transition = "all 0.5s";
					}
			});
	});
});
