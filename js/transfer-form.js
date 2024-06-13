// перенос данных с одной страницы на другую

document.addEventListener('DOMContentLoaded', () => { 

	const bookingF = document.getElementById('saveLink');

	if(bookingF){
		bookingF.addEventListener('click', function(event) {
			event.preventDefault();
		
			const fields = ['startDate', 'endDate', 'name'];
			fields.forEach((field) => {
					const value = document.getElementById(field).value;
					sessionStorage.setItem(`booking${field.charAt(0).toUpperCase()}`, value);
			});	
			window.location.href = 'interior.html';
		})
	}
	// Список полей формы
	const fields = [ 'startDate', 'endDate', 'name'];

	// Перебор каждого поля и заполнение значениями из sessionStorage
	fields.forEach(field => {
			const value = sessionStorage.getItem(`booking${field.charAt(0).toUpperCase()}`);
			if (value) {
					document.getElementById(field).value = value;
			}
	});
	

// перенос количества человек с одной строки на другую
const peopleInput = document.getElementById('number');
const selectInput = document.getElementById('selectnum');

peopleInput.addEventListener('input', function() {
	selectInput.value = peopleInput.value;
})

});




