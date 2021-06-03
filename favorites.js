//Images
//Pulling from the favs or if there are no liked items create an empty array
const myFavs = JSON.parse(localStorage.getItem("favs")) || [];

//Api call and button function to get images
fetch("www.imageAPI")
    .then(res => res.json())
    .then(data => {
        //For each item in the arry append the image url to the container
        data.arr.forEach(item => {
            $(".container").append(`<img src=${item.imgURL} /><button data-images=${item.imgURL}>favoriteBtn</button`)

//When favorites button is clicked, prevent the page from refreshing as default and create a variable that that holds the item.imgURL for the liked photo
            $(".container").on("click", "button", function (event) {
                event.preventDefault();
                let favImage = $(this).attr("data-images")
//Create an object of the liked images
                let imageObject = {
                    imageSrc: favImage,

                }
                //Push the items in the image object to the myFavs object
                myFavs.push(imageObject)
                //Save to local storage 
                localStorage.setItem("fav", JSON.stringify(myFavs))

            });
        });
    });




//GIFS api call and click function
fetch("www.gifAPI")
    .then(res => res.json())
    .then(data => {
        data.arr.forEach(item => {
            $(".container").append(`<img src=${item.gifURL} /><button data-gifs=${item.gifURL}>favorite</button`)

            $(".container").on("click", "button", function (event) {
                event.preventDefault();
                let favGif = $(this).attr("data-gifs")

                let gifObject = {
                    gifSrc: favGif,
                }

                myFavs.push(gifObject)
                localStorage.setItem("fav", JSON.stringify(myFavs));
            });
        });
    });



//Text/Quotes api call and click function

fetch("www.quotesAPI")
    .then(res => res.json())
    .then(data => {
        data.arr.forEach(item => {
            $(".container").append(`<img src= ${item.quoteURL}/><button data-quotes=${item.quotesURL}>favorite</button`)

            $(".container").on("click", "button", function (event) {
                event.preventDefault();
                let favQuote = $(this).attr("data-quotes")

                let quoteObject = {
                    quoteSrc: favQuote,
                }

                myFavs.push(quoteObject)
                localStorage.setItem("fav", JSON.stringify(myFavs));
            });
        });
    });



