document.body.addEventListener('click', function (e) {
	let target = e.target;

	if (target.closest('.menu-icon') || target.classList.contains('menu-icon')) {
		let localTarget = target.classList.contains('menu-icon')
			? target
			: target.closest('.menu-icon');

		localTarget.classList.toggle('_active');

		let headerLinks = document.querySelector('.header__links-wrapper');
		headerLinks.classList.toggle('_active');

		document.body.classList.toggle('_lock');
	}

	if (target.classList.contains('header__link')) {
		e.preventDefault();

		let clickedTabName = target.dataset.section;
		let clickedTab = document.querySelector(`.${clickedTabName}`);
		let clickedTabTop = clickedTab.getBoundingClientRect().top;

		document.body.scrollTo({
			top: clickedTabTop,
			behavior: 'smooth',
		});
	}
});

let hoverLink = document.querySelectorAll('.header__link');
hoverLink.forEach((element) => {
	let hoverBlock = element.parentElement;

	if (hoverBlock) {
		let headerDropdown = hoverBlock.querySelector('.header__dropdown');

		hoverBlock.addEventListener('mouseenter', () => {
			headerDropdown.classList.add('_active');
		});

		hoverBlock.addEventListener('mouseleave', () => {
			headerDropdown.classList.remove('_active');
		});
	}
});
