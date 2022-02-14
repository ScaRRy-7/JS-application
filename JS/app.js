"use strict";

let numberOfFilms;

function start() {
    numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");

    while (numberOfFilms == "" || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");

    }
}

start();

let personsalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    private: false
};

function rememerMyFilms() {
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
}

rememerMyFilms();

function detectPersonalLevel() {
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
}

detectPersonalLevel();

function showMyDB(obj) {
    if (obj.private == false) {
        console.log(obj);
    }
}

showMyDB(personsalMovieDB);

function writeYourGenres() {
    let favouriteGenres = [];

    for (let i = 0; i < 3; i++) {
        let item = prompt(`Ваш любимый жанр под номером ${i+1}`);
        favouriteGenres.push(item);
    }
    console.log(favouriteGenres);
}

writeYourGenres();