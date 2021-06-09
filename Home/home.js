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

    $(".button").click(function(event) {
        event.preventDefault()
        console.log(event)
        let randomGifIndex = Math.floor(Math.random() * 51);
        
            //calling API
            $.ajax({
                url: initGifAPI,
                method: "GET"
                
                //applying GIF on the page
                }).then(function(response) {
                $(".randomGif").attr("src", response.data[(randomGifIndex)].images.fixed_height.url)
                $(".randomGif").attr("data-downsized", response.data[(randomGifIndex)].images.downsized.url)
             })
             
            })

    //pics section
    let randomIndex = Math.floor(Math.random() * 51);
    let initPicAPI = "https://randomfox.ca/floof/";
    $.ajax({
        url: initPicAPI,
        method: "GET"
        
        //applying pic on the page
        }).then(function(response) {
        $(".randomPic").attr("src", response.data[(randomIndex)].images.fixed_height.url)
        $(".randomPic").attr("data-downsized", response.data[(randomIndex)].images.downsized.url)
        //set local storage
        localStorage.setItem("img", response.data[(randomIndex)].images.fixed_height.url);
     })

    $(".button").click(function(event) {
        event.preventDefault()
        console.log(event)
        let randomIndex = Math.floor(Math.random() * 51);
        
            //calling API
            $.ajax({
                url: initPicAPI,
                method: "GET"
                
                //applying GIF on the page
                }).then(function(response) {
                $(".randomPic").attr("src", response.data[(randomIndex)].images.fixed_height.url)
                $(".randomPic").attr("data-downsized", response.data[(randomIndex)].images.downsized.url)
             })
             
            })
    
    
})