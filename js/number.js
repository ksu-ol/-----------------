const phoneInput = document.getElementById('telephone');

phoneInput.addEventListener('input', function() {
		let input = phoneInput.value.replace(/\D/g, ''); // Удаляем все нечисловые символы
		let formattedInput = '+7 9';

		if (input.length > 2) {
				formattedInput += input.substring(2, 4); // Код оператора
		}
		if (input.length >= 5) {
				formattedInput += '-' + input.substring(4, 7); // Первые три цифры после кода оператора
		}
		if (input.length >= 8) {
				formattedInput += '-' + input.substring(7, 9); // Следующие две цифры
		}
		if (input.length >= 10) {
				formattedInput += '-' + input.substring(9, 11); // Последние две цифры
		}

		phoneInput.value = formattedInput;
});