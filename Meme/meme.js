$(document).ready(function (){


    $("#generateMeme").on('click', async function (event){
        event.preventDefault();
    
        const memeData= await fetch(
            "https://randomfox.ca/floof/", {
                headers: { 
                'Accept': 'application/'
        
        }
    
    
    });
    const memeObj= await memeData.json();
    
    console.log(memeObj);
    $('.memeResults').html("")
    for (i=0; i<memeObj.image.length; i++) {
        
        if(memeObj.image[i]>0){
            const $img = $('<img/>', {
                src: `${memeObj.image}`,
                class:'imgFormat',
            });
            
            return $('.memeResults').append($img);
    
        }
        
    
    
    }
    
    
    })
    
    // setting up local storage upon favorite button click to append to favorite HTML page
    let memes= {};
    let localMemes = JSON.parse(localStorage.getItem('memes')) || [];
    localMemes;
    
    
    //click event to save liked images
    $('#saveMeme').on('click', function(){
        const memeImg= $('.memeResults img').attr('src');
        const liked= $('.liked');
    
        //if already liked click again to remove saved feature
        if(liked.length!==0){
            localMemes=localMemes.filter(meme => meme!==memeImg);
            $(this).removeClass('liked');
        } else{
            // send images to array and add liked class to button
            localMemes.push(memeImg);
    
            $(this).addClass('liked');
        }
        //send pic to local storage
        localStorage.setItem("memes", JSON.stringify(localMemes))
        
        
        console.log(memes)
        
        
        })
    
    })
        