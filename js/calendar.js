document.addEventListener('DOMContentLoaded', () => { 
	const startDateInput = document.getElementById('startDate');
	const endDateInput = document.getElementById('endDate');
	const nightsDivs = document.querySelectorAll('.nights'); // Выбираем все элементы с классом .nights
	const findButton = document.getElementById('findButton');

	// Инициализация Air Datepicker для обоих полей
	const datepicker = new AirDatepicker(startDateInput, {
			range: true,
			keyboardNav: true,
			dateFormat: 'd MMM',
			position: "top right",
			onSelect({date, formattedDate}) {
					if (date.length === 2) {
							startDateInput.value = formattedDate[0];
							endDateInput.value = formattedDate[1];
							const nights = calculateNights(date[0], date[1]);
							const nightsText = formatNightsText(nights);
							nightsDivs.forEach(div => {
									div.textContent = nightsText;
							});
							
					}
			},
			buttons: ['today', 'clear']
	});

	const datepicker2 = new AirDatepicker(endDateInput, {
		range: true,
		keyBoardNav: true,
		dateFormat: 'd MMM',
		
		position: "top right",
		onSelect({date, formattedDate}) {
				if (date.length === 2) {
						startDateInput.value = formattedDate[0];
						endDateInput.value = formattedDate[1];
						const nights = calculateNights(date[0], date[1]);
						const nightsText = formatNightsText(nights);
						nightsDivs.forEach(div => {
								div.textContent = nightsText;
								
						});
						
				}
		},
		buttons: ['today', 'clear']
});

findButton.addEventListener('click', () => {
	calculateNights();
		calculateTotal();
		
});

// количество ночей
	function calculateNights(startDate, endDate) {
			const diffTime = endDate - startDate;
			const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
			return diffDays;
	}

	
	function formatNightsText(nights) {
			if (nights === 1) {
					return `${nights} ночь`;
			} else if (nights >= 2 && nights <= 4) {
					return `${nights} ночи`;
			} else {
					return `${nights} ночей`;
			}
	}

// расчет суммы

	function calculateTotal() {
		const startDateStr = startDateInput.value;
		const endDateStr = endDateInput.value;

		const housePrices = document.querySelectorAll('.prise__night');
		housePrices.forEach(priceSpan => {
				const nightPriceInp = parseFloat(priceSpan.getAttribute('data-price')); // Парсим в число
				const houseId = priceSpan.getAttribute('data-house');

				if (!startDateStr || !endDateStr || isNaN(nightPriceInp)) {
						priceSpan.textContent = "";
						return;
				}

				const startDate = parseDate(startDateStr);
				const endDate = parseDate(endDateStr);

				if (startDate >= endDate) {
						priceSpan.textContent = "";
						return;
				}

				const nights = calculateNights(startDate, endDate);
				const totalPrice = nightPriceInp * nights;
				priceSpan.textContent = `${totalPrice} руб`;

		});
}

function parseDate(dateStr) {
		const months = {
				'янв': '01',
				'фев': '02',
				'мар': '03',
				'апр': '04',
				'май': '05',
				'июн': '06',
				'июл': '07',
				'авг': '08',
				'сен': '09',
				'окт': '10',
				'ноя': '11',
				'дек': '12'
		};
		const [day, month] = dateStr.split(' ');
		const year = new Date().getFullYear();
		return new Date(`${year}-${months[month.toLowerCase()]}-${day.padStart(2, '0')}`);
}
	
});