const numberOfFilms = prompt('Сколько фильмов смотрели?', "");

const personalMovieDb = {
    count : numberOfFilms,
    movies : {},
    actors : {},
    genres : [],
    private : false
};

let a = prompt('Posledniy film', ''),
    b = prompt('otsenka', ''),
    c = prompt('Posledniy film', ''),
    d = prompt('otsenka', '');

personalMovieDb.movies[a] = b;
personalMovieDb.movies[c] = d;

console.log(personalMovieDb);