document.addEventListener('DOMContentLoaded', () => {
	const form = document.getElementById('booking');
	const startDate = document.getElementById('startDate');
	const endDate = document.getElementById('endDate');
	const name = document.getElementById('name');
	const number = document.getElementById('number');
	const phone = document.getElementById('telephone');
	const agreement = document.getElementById('checkbox1');
	const submitBtn = document.getElementById('submitBtn');

	function validateForm() {
			const isFormValid = [startDate.value, endDate.value,name.value,number.value,phone.value,].every(val => val.trim() !== '') &&
													agreement.checked;
			
			submitBtn.disabled = !isFormValid;
			submitBtn.classList.toggle('btn-disabled', !isFormValid);
			submitBtn.classList.toggle('btn-enabled', isFormValid);
	}

	[startDate,endDate,name,number,phone,agreement].forEach(field => {
			field.addEventListener('input', validateForm);
			field.addEventListener('change', validateForm);
	});

	form.addEventListener('submit', (event) => {
			if (!validateForm()) {
					event.preventDefault();
			}
	});
});


