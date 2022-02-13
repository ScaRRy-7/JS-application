let numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");

let personsalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    private: false
};

let lastFilm = prompt("Один из последних просмотренных фильмов?", "");
let rateOfFilm = prompt("На сколько оцените его?", "");

personsalMovieDB.movies[lastFilm] = rateOfFilm;

console.log(personsalMovieDB);