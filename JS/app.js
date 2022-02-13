"use strict";

let numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");

let personsalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    private: false
};



for (let i = 0; i < 2; i++) {
    const lastFilm = prompt("Один из последних просмотренных фильмов?", ""),
          rateOfFilm = prompt("На сколько оцените его?", "");
          
    personsalMovieDB.movies[lastFilm] = rateOfFilm;
}



console.log(personsalMovieDB);