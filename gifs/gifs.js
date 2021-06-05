$(document).ready(function(){

    let gifArray = {};
    let localGifs =  JSON.parse(localStorage.getItem('gifs')) || [];
  
  
  
  
  $(".redoBtn").click(function(event) {
    event.preventDefault()
      let randomIndex = Math.floor(Math.random() * 51);
      let initGifAPI = 'https://api.giphy.com/v1/gifs/search?q=happy&api_key=SDmOSEvkMENogpqY8E44IlGAsWmz1GAw';
      console.log(randomIndex);
  
      $.ajax({
        url: initGifAPI,
        method: "GET"
        }).then(function(response) {
          $("#gifHolder").attr("src", response.data[(randomIndex)].images.original.url)
  
          
    // setting up local storage upon favorite button click to append to favorite HTML page
  
    //click event to save liked images
    $('#saveGif').on('click', function(){
      const gif= $("#gifHolder").attr("src")
      // console.log()
      const liked= $('.liked');
      //if already liked click again to remove saved feature
      if(liked.length!==0){
          localGifs=localGifs.filter(meme => meme!==gif);
          $(this).removeClass('liked');
      } else{
          // send images to array and add liked class to button
          localGifs.push(gif);
          $(this).addClass('liked');
      }
      //send pic to local storage
      localStorage.setItem("gifs", JSON.stringify(localGifs))
      console.log(gifArray)
      })
        })
  
      })
  
    
  
  
  
  
  })