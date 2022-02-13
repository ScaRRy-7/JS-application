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
    
    if (lastFilm != null && rateOfFilm != null && lastFilm != "" && rateOfFilm != "" && lastFilm.length < 50) {
        personsalMovieDB.movies[lastFilm] = rateOfFilm;
        console.log("done");
    } else {
        console.log("error");
        i--;
    }
}

switch (true) {
    case personsalMovieDB.count < 10:
        alert("Просмотрено довольно мало фильмов");
        break;
    case personsalMovieDB.count >= 10 && personsalMovieDB.count < 30:
        alert("Вы классический зритель");
        break;
    case personsalMovieDB.count >= 30:
        alert("Вы киноман!");
        break;
    default:
        alert("Произошла ошибка");
}


console.log(personsalMovieDB);