const accordion = document.querySelectorAll('.js-accordion');
console.log(accordion);

accordion.forEach(acc => {
	acc.addEventListener('click', () => {
		let fel = acc.parentElement;
		fel.classList.toggle('active');
	});
});
