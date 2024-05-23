export default class Game {
    constructor(title, genre, year, cover) {
        this.title = title;
        this.genre = genre;
        this.year = year;
        this.cover = cover;
    }

    get description() {
        return `${this.title} (${this.genre}, ${this.year})`;
    }
}