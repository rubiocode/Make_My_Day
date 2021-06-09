

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



        favQuote = localStorage.getItem("favQuotes");
        for (let i = 0; i < favQuote.length; i++) {
            console.log(favQuote[i]);
            document.getElementById("quotes").innerHTML=favQuote
         

        };


    });




