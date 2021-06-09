$(document).ready(function() {
    //giphs section
    let randomGifIndex = Math.floor(Math.random() * 51);
    let initGifAPI = 'https://api.giphy.com/v1/gifs/search?q=happy&api_key=SDmOSEvkMENogpqY8E44IlGAsWmz1GAw';
    $.ajax({
        url: initGifAPI,
        method: "GET"
        
        //applying GIF on the page
        }).then(function(response) {
        $(".randomGif").attr("src", response.data[(randomGifIndex)].images.fixed_height.url)
        $(".randomGif").attr("data-downsized", response.data[(randomGifIndex)].images.downsized.url)
        //set local storage
        localStorage.setItem("img", response.data[(randomGifIndex)].images.fixed_height.url);
    })

    
    
})