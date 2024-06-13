document.addEventListener('DOMContentLoaded', function() {
	const serviceButtons = document.querySelectorAll('.toggleBtn');


serviceButtons.forEach(button => {
	button.addEventListener('click', function() {
			const serviceName = this.parentElement.getAttribute('data-activity-name');
			const price = this.parentElement.getAttribute('data-activity-price');
			const selectedServices = document.getElementById('selectedServices');
			const existingService = Array.from(selectedServices.children).find(item => item.textContent.includes(serviceName));

			if (!existingService) {
					// Add service to the booking window
					const li = document.createElement('li');
					li.className = 'booking__window-activite';
					
					const p1 = document.createElement('p');
					p1.textContent = serviceName;
					
					const p2 = document.createElement('p');
					p2.textContent = price;
					
					li.appendChild(p1);
					li.appendChild(p2);
					selectedServices.appendChild(li);
					
					li.classList.add('.booking__window-activite');
					li.style.display = 'flex';
					li.style.justifyContent = "space-between";
					li.style.listStyleType = 'none';
					li.style.fontSize = '16px';
					this.classList.toggle('plus-button-light');
					this.classList.toggle('plus-button');
					this.style.transition = "all 0.5s"
					} else {
					
						existingService.remove();
						
						this.classList.toggle('plus-button-light');
						this.classList.toggle('plus-button');
						this.style.transition = "all 0.5s"
					}
	});
});
});