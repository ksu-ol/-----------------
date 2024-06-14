document.addEventListener('DOMContentLoaded', function() {
	const submitButton = document.getElementById('submitBtn');
	const modal = document.getElementById('myModalmini');

	// Показать модальное окно при клике на кнопку "Забронировать"
	submitButton.addEventListener('click', function() {
			// Проверяем поддержку showModal() у браузера
			if (typeof modal.showModal === 'function') {
					modal.showModal();
			} else {
					modal.style.display = 'block';
			}

			// Закрыть модальное окно через 5 секунд (5000 мс)
			setTimeout(function() {
					closeModal();
			}, 5000);
	});

	// Закрыть модальное окно по клику вне модального окна
	window.addEventListener('click', function(event) {
			if (event.target === modal) {
					closeModal();
			}
	});

	// Функция для закрытия модального окна
	function closeModal() {
			if (typeof modal.close === 'function') {
					modal.close();
			} else {
					modal.style.display = 'none';
			}
			window.location.href = '../index.html';
	}
});

document.addEventListener('DOMContentLoaded', function() {
	const submitButtonDesktop = document.getElementById('submitBtnDesktop');
	const submitButtonMobile = document.getElementById('submitBtnMobile');
	const modalDesktop = document.getElementById('myModalDesktop');
	const modalMobile = document.getElementById('myModalMobile');

	// Показать модальное окно для компьютерной версии при клике на кнопку "Забронировать"
	submitButtonDesktop.addEventListener('click', function() {
			showModal(modalDesktop);
			setTimeout(function() {
					closeModal(modalDesktop);
			}, 5000);
	});

	// Показать модальное окно для мобильной версии при клике на кнопку "Забронировать"
	submitButtonMobile.addEventListener('click', function() {
			showModal(modalMobile);
			setTimeout(function() {
					closeModal(modalMobile);
			}, 5000);
	});

	// Закрыть модальное окно по клику вне модального окна
	window.addEventListener('click', function(event) {
			if (event.target === modalDesktop) {
					closeModal(modalDesktop);
			} else if (event.target === modalMobile) {
					closeModal(modalMobile);
			}
	});

	// Функция для показа модального окна
	function showModal(modal) {
			if (typeof modal.showModal === 'function') {
					modal.showModal();
			} else {
					modal.style.display = 'block';
			}
	}

	// Функция для закрытия модального окна
	function closeModal(modal) {
			if (typeof modal.close === 'function') {
					modal.close();
			} else {
					modal.style.display = 'none';
			}
			window.location.href = '../index.html'; // Переадресация на главную страницу
	}
});
