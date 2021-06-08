

$(document).ready(function () {

//Grabbing memes from local storage
    favMemes = JSON.parse(localStorage.getItem("memes"));
//For loop to find the liked image in the index
    for (let i = 0; i < favMemes.length; i++) {
        console.log(favMemes[i]);
        $("#favorites").append(`<img src=${favMemes[i]} class="favs">`);


    };




    favGifs = JSON.parse(localStorage.getItem("gifs"));
    for (let i = 0; i < favGifs.length; i++) {
          console.log(favGifs[i]);
        $("#favorites").append(`<img src=${favGifs[i]} class="favs">`);
    };

/*

        favQuote = JSON.parse(localStorage.getItem(""));
        for (let i = 0; i < .length; i++) {

        
            console.log(favQuote);
            $("favoriteQuotes").append(`<img src=${favQuote}>`);

        };


    };
*/
});




