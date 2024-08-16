document.addEventListener('DOMContentLoaded', () => {
    const games = [
        { title: 'Grand Theft Auto V', image: 'imagens/fiven.jpg' },
        { title: 'Forza Horizon 5', image: 'imagens/hori.jpg' },
        { title: 'Free Fire', image: 'imagens/ff.jpg' },
    ];

    const gameContainer = document.querySelector('.game-container');

    games.forEach(game => {
        const gameCard = document.createElement('div');
        gameCard.classList.add('game-card');
        
        gameCard.innerHTML = `
            <img src="${game.image}" alt="${game.title}">
            <h3>${game.title}</h3>
        `;
        
        gameContainer.appendChild(gameCard);
    });

    document.getElementById('start-game').addEventListener('click', () => {
        alert('Iniciando o jogo...');
        // Lógica para iniciar o jogo
    });
});