
const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

const personalDataBase = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: {},
    privat: false
};

const a = prompt('Один из просмотренных фильмов?', ''),
      b = prompt('На сколько его оцените?',''),
      c = prompt('Один из просмотренных фильмов?',''),
      d = prompt('На сколько его оцените?','');

personalDataBase.movies[a] = b;
personalDataBase.movies[c] = d;

console.log(personalDataBase);
