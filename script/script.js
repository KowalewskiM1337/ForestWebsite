const brgBtn = document.querySelector('.brg');
const logo = document.querySelector('.logo');

brgBtn.addEventListener('click', () => {
	let menu = document.querySelector('.menu');
	menu.classList.toggle('showMenu');
});

logo.addEventListener('click', () => {
	location.href = '/index.html';
});
