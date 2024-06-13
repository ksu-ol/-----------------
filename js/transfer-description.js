document.addEventListener('DOMContentLoaded', () => {
	

	document.querySelectorAll('.book-button').forEach(button => {
		button.addEventListener('click', function(event){
			event.preventDefault();

			const houseElement = this.closest('.interior');
			const houseId = houseElement.getAttribute('data-id'); // Получаем id дома из data-id атрибута
			const imageSrc = houseElement.querySelector('.interior__image-showcase img:not(.visually-hidden)').src;
			const description = houseElement.querySelector('.interior__title').textContent;
			const price = houseElement.querySelector('.interior__price-input').textContent;
			const night = houseElement.querySelector('.interior__night').textContent.trim();
			

			const bookingData = {
				id: houseId,
				image: imageSrc,
				description: description,
				price: price,
				night: night
			};

			sessionStorage.setItem('bookingData', JSON.stringify(bookingData));

			fetch('https://666064d45425580055b3b25c.mockapi.io/houses', {
				method: 'POST',
				headers: {
					'Content-Type' : 'application/json'
				},
				body: JSON.stringify(bookingData)
			})
			.then(response => response.json())
			.then(data => {
				sessionStorage.setItem('bookingId', data.id);
				window.location.href = 'reservation.html';
			})
		})
	})

	// получение 
	if (window.location.pathname.endsWith('reservation.html')) {
		const bookingId = sessionStorage.getItem('bookingId');
		if (bookingId) {
				fetch(`https://666064d45425580055b3b25c.mockapi.io/houses/${bookingId}`)
				.then(response => response.json())
				.then(data => {
						document.getElementById('houseImage').src = data.image;
						document.getElementById('houseImage').style.objectFit = 'cover';
						document.getElementById('houseImage').style.borderRadius = 10 + 'px';
						document.getElementById('houseDescription').textContent = data.description;
						document.getElementById('houseDescription2').textContent = data.description;
						document.getElementById('houseNights').textContent = data.night; // Отображение количества ночей
            document.getElementById('houseNights2').textContent = data.night; // Отображение количества ночей
						document.getElementById('housePrice').textContent = data.price;
						document.getElementById('housePrice2').textContent = data.price;
				})
				
		}
}
	
})