
const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

const personalDataBase = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: {},
    privat: false
};



for (let i = 0; i <2; i++) {
    const a = prompt('Один из просмотренных фильмов?', ''),
          b = prompt('На сколько его оцените?','');

    if (a != null && b != null && a != '' && b != '' && a.length < 50) {
        personalDataBase.movies[a] = b;
        console.log('done');
     
    } else {
        console.log('error');
        i--;

    }      

    
}


if (personalDataBase.count < 10) {
    console.log("not enough");
} else if (personalDataBase.count >= 10 && personalDataBase.count < 30) {
    console.log("you are normal viewer");
}else if (personalDataBase.count >= 30) {
    console.log('you are typical viewer');
} else {
    console.log("Error!");
}

 console.log(personalDataBase);

