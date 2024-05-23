import Game from "../models/gameModel.js";
import GameLibrary from "../models/gameLibraryModel.js";

const gameLibrary = new GameLibrary();
const addGameForm = document.getElementById('addGameForm');
const gamesContainer = document.getElementById('gamesContainer');
const saveButton = document.getElementById('saveButton');
const loadButton = document.getElementById('loadButton');

function displayGames() {
    gamesContainer.innerHTML = '';
    gameLibrary.getAllGames().forEach(game => {
        const gameItem = document.createElement('div');
        gameItem.className = 'game-item';
        gameItem.innerHTML = `
            <img src="${game.cover}" alt="${game.title} Cover">
            <p><strong>${game.description}</strong></p>
        `;
        gamesContainer.appendChild(gameItem);
    });
}

addGameForm.addEventListener('submit', event => {
    event.preventDefault();
    const title = document.getElementById('title').value;
    const genre = document.getElementById('genre').value;
    const cover = document.getElementById('cover').value;
    const year = document.getElementById('year').value;

    const game = new Game(title, genre, parseInt(year), cover);
    gameLibrary.addGame(game);
    displayGames();
    addGameForm.reset();
});

saveButton.addEventListener('click', () => {
    gameLibrary.saveToLocalStorage();
});

loadButton.addEventListener('click', () => {
    gameLibrary.loadFromLocalStorage();
    displayGames();
});

// Load games from localStorage on page load
window.onload = () => {
    gameLibrary.loadFromLocalStorage();
    displayGames();
};