/* Создаёт красивое появление текста на логотипе */

let firstHeader = document.querySelector(".logo h2");
let secondHeader = document.querySelector(".logo h1");

document.addEventListener("DOMContentLoaded", function(e) {
	firstHeader.style.transform = "translateX(0px)";
	firstHeader.style.opacity = 1;

	secondHeader.style.transform = "translateX(0px)";
	secondHeader.style.opacity = 1;
});