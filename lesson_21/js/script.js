document.addEventListener("click", function (e) {
	const targetElement = e.target;
	// .icon-menu це клас кнопки при кліку на яку буде спрацьовувати код додаватись до тегу html клас menu-open 
	if (targetElement.closest('.icon-menu')) {
		document.documentElement.classList.toggle('open-menu');
		e.preventDefault();
	}
})
// ---------VIDEO---------
// пошук кнопки
const playButton = document.querySelector("#play");
// перевірка на наявність кнопки
if (playButton) {
	// відстежування кліку по кнопці
	playButton.addEventListener("click", () => {
		// пошук елемента з id #video
		const video = document.querySelector("#video");
		// керування відтворенням відео
		if (video.paused) {
			video.play();
		} else {
			video.pause();
		}
	});
}
// якщо кнопки нема вивід в консоль повідомлення
else {
	console.error("Елемент #play не знайдено на сторінці.");
}