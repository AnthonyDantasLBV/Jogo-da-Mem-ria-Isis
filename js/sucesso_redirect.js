if (document.title == "Memory Game - Sucesso na Fase 1") {
	const redirectNextGame = () => {
		window.location = `../pages/game_fase2.html`;
	};

	setTimeout(redirectNextGame, 5000);
} else if (document.title == "Memory Game - Sucesso na Fase 2") {
	const redirectNextGame = () => {
		window.location = `../pages/game_fase3.html`;
	};

	setTimeout(redirectNextGame, 5000);
} else {
	const redirectNextGame = () => {
		window.location = `../index.html`;
	};

	setTimeout(redirectNextGame, 10000);
}
