$(document).ready(function(){

    let gifArray = {};
    let localGifs =  JSON.parse(localStorage.getItem('gifs')) || [];


//click function for 'redo' button
    $(".redoBtn").click(function(event) {
        event.preventDefault()
        let randomIndex = Math.floor(Math.random() * 51);
        let initGifAPI = 'https://api.giphy.com/v1/gifs/search?q=happy&api_key=SDmOSEvkMENogpqY8E44IlGAsWmz1GAw';
        
            //calling API
            $.ajax({
                url: initGifAPI,
                method: "GET"
                
                //applying GIF on the page
                }).then(function(response) {
                $("#gifHolder").attr("src", response.data[(randomIndex)].images.fixed_height.url)
                $("#gifHolder").attr("data-downsized", response.data[(randomIndex)].images.downsized.url)
           //     $("#gifHolder").removeClass("gifHolderSize");


                // setting up local storage upon favorite button click to append to favorite HTML page

                //click event to save liked images
                $('#saveGif').on('click', function(){
                let gif= $("#gifHolder").attr("data-downsized")

                const liked= $('.liked');
                //add a class of 'liked' to the gif being liked
                $(this).addClass(liked);

                //if already liked click again to remove saved feature
                if(liked.length!==0){
                    localGifs=localGifs.filter(meme => meme!==gif);
                    $(this).removeClass('liked');
                } else{
                    // send gifs to array and add liked class to button
                    localGifs.push(gif);
                    $(this).addClass('liked');
                }
                //send pic to local storage
                localStorage.setItem("gifs", JSON.stringify(localGifs))
                
                })
                
                })

    })

})