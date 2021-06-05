

$(document).ready(function () {
   

    favMemes = JSON.parse(localStorage.getItem("memes"));
    for (let i = 0; i < favMemes.length; i++) {
        console.log(favMemes[i]);
        $("#favoriteMemes").append(`<img src=${favMemes[i]}>`);


    };


/*

    favMemes = JSON.parse(localStorage.getItem(""));
    for (let i = 0; i < .length; i++) {

        favGif = JSON.parse(localStorage.getItem(""));
        console.log(favGif);
        $("#favoriteGifs").append(`<img src=${favGif}>`);



        favMemes = JSON.parse(localStorage.getItem(""));
        for (let i = 0; i < .length; i++) {

            favQuote = JSON.parse(localStorage.getItem(""));
            console.log(favQuote);
            $("favoriteQuotes").append(`<img src=${favQuote}>`);

        };


    };
*/
});




