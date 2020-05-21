
let numberOfFilms;

function start () {
    numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

    while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

    }
}

start();

const personalDataBase = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};





function rememberMyFilms() {
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

}

//rememberMyFilms();



function detectPersonalLevel () {
    if (personalDataBase.count < 10) {
        console.log("not enough");
    } else if (personalDataBase.count >= 10 && personalDataBase.count < 30) {
        console.log("you are normal viewer");
    }else if (personalDataBase.count >= 30) {
        console.log('you are typical viewer');
    } else {
        console.log("Error!");
    }
}
//detectPersonalLevel();

function showMyDB (hidden) {
    if (!hidden) {
        console.log(personalDataBase);
    }
}


 showMyDB(personalDataBase.privat);

 function writeYourGenres() {
     for (let i = 1; i <= 3; i++) {
         personalDataBase.genres[i - 1] = prompt(`ваш любимый жанр под номером ${i}`);
     }
 }
 writeYourGenres();

