

const personalDataBase = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
    start: function() {
        personalDataBase.count = +prompt('Сколько фильмов вы уже посмотрели?', '');
    
        while (personalDataBase.count == '' || personalDataBase.count == null || isNaN(personalDataBase.count)) {
            personalDataBase.count = +prompt('Сколько фильмов вы уже посмотрели?', '');
    
        }
    },
    rememberMyFilms: function() {
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
    
    },
    detectPersonalLevel: function () {
        if (personalDataBase.count < 10) {
            console.log("not enough");
        } else if (personalDataBase.count >= 10 && personalDataBase.count < 30) {
            console.log("you are normal viewer");
        }else if (personalDataBase.count >= 30) {
            console.log('you are typical viewer');
        } else {
            console.log("Error!");
        }
    },
    showMyDB: function (hidden) {
        if (!hidden) {
            console.log(personalDataBase);
        }
    },
    toggleVisMyDB: function() {
        if (personalDataBase.privat) {
            personalDataBase.privat = false;
        } else {
            personalDataBase.privat = true;
        }
    },
    writeYourGenres: function() {
        for (let i = 1; i <= 3; i++) {
            let genre = prompt(`ваш любимый жанр под номером ${i}`)

            if (genre === ''|| genre == null) {
                console.log('вы ввели некорректные данные или их нет:(');
                i--;
            } else {
                personalDataBase.genres[i - 1] = genre;    
        }
    }    
            
    personalDataBase.genres.forEach((item, i) => {
        console.log(`Любимый жанр ${i +1} - это ${item}`);
    });    
    }
};


















    








