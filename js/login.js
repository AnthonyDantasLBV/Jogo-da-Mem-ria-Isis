const button = document.querySelector(".login__button");
const form = document.querySelector(".login-form");


const handleSubmit = (event) => {
	event.preventDefault();
	window.location = "pages/game.html";
};

form.addEventListener("submit", handleSubmit);
