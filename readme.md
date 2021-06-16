# **Make My Day App**
This application was re-built using [MD Boostrap](https://mdbootstrap.com/), [CSS Gradient IO](https://cssgradient.io/), [Fox Images API](https://randomfox.ca/floof/), [GIFs API](https://api.giphy.com/v1/gifs/search?q=happy&api_key=SDmOSEvkMENogpqY8E44IlGAsWmz1GAw), [Fontawesome](https://fontawesome.com/), and [Quotes API](https://favqs.com/api).


Original group project can be found here: [First_Project](https://github.com/TheMimmzyy/First_Project)


## User Story

```
AS A user
I WANT an aplication to brighten up my day
SO THAT I can have a better mood
```

## Acceptance Criteria

```
GIVEN Make My Day App
WHEN I load the homepage
THEN I am presented with a series of carousels showcasing the application's images, gifs, and quotes. 
WHEN I click on the gif button
THEN I am succesfully routed to the gif page
WHEN I click on the images button
THEN I am successfully routed to the images page
WHEN I click on the quotes button
THEN I am successfully routed to the quotes page
WHEN I visit each page 
THEN I am presented with a generate button and a save button
WHEN I click on the generate button
THEN I am presented with a respective new gif, image, or quote 
WHEN I click the save button
THEN I the saved gif, image, or quote is saved to the Favorite Page for later use
WHEN I visit the Favorites Page
THEN I see all my saved gifs, images, and quotes in a single page
```


## _Deployed URL:_ https://rubiocode.github.io/Make_My_Day/index.html

## _Github URL:_ https://github.com/rubiocode/Make_My_Day


## App Look

### Homepage 
![ezgif com-gif-maker (6)](https://user-images.githubusercontent.com/78938193/122134045-bb1dbc80-cdf2-11eb-83c5-19f702af1298.gif)

### Gifs Page 
![image](https://user-images.githubusercontent.com/78938193/122134492-8e1dd980-cdf3-11eb-8355-b631a1a0f325.png)

### Foxy Images Page
![image](https://user-images.githubusercontent.com/78938193/122134693-ff5d8c80-cdf3-11eb-9451-e1e9ca2ce8a9.png)

### Inspirational Quotes Page
![image](https://user-images.githubusercontent.com/78938193/122134616-d2a97500-cdf3-11eb-98ce-06a0aa29bae6.png)

### Favorites Page
![image](https://user-images.githubusercontent.com/78938193/122134531-a1c94000-cdf3-11eb-9368-d72bf2a485c5.png)



## User Experience 


* Users are able to scroll through randomly generated pictures, gifs and sayings to brighten their mood and get a laugh.

* Users are then able to favorite pictures, gifs or sayings that they like which will then be displayed on a favorites page they can view them at any time!

* The Gif, Images and Saying pages are using API calls to display randomly generated content for the user to view.

* When the user clicks on the favorite button , the images and API urls are saved to local storage. The Favorites page then pulls the saved images and gifs from local storage and       appends it to the html for the user to view. 

* On the homepage we have a navbar so the user can click on either the images, gifs, sayings or favorites pages which will then take them to the designated page. Three MBD carasoules are on the homepage with random pictures from each catergory to give the user some samples of the content available. 


# Technologies Used

* Javascript
* jQuery
* MDBoostrap (Bootstap Material Design)
* Server-Side API Calls
* CSS
* HTML
