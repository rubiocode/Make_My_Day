let randomQuote;
let saying = document.getElementById("sayings");
let qText = document.getElementById("quote");
let aText = document.getElementById("author");
let favoriteQuotes = [];

// set a function to get a new quote each time the page loads
function getQuotes() {
  let quote;
  let author;
  fetch("https://type.fit/api/quotes")
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log("something");
      randomQuote = data[Math.floor(Math.random() * data.length)];
      console.log(randomQuote);
      quote = randomQuote.text;
      author = randomQuote.author;
      qText.append(quote);
      aText.append(author);
      let tag = document.createElement("p");
      let quoteText = document.createTextNode(randomQuote);
      tag.appendChild(quoteText);
});
}
getQuotes();

  // On Fav click, save quote to local storage
function setStorage(q) {
  var existing = localStorage.getItem('favQuotes');
  existing = existing ? existing.split(',') : [];
  // const favStored = JSON.parse(localStorage.getItem('favQuotes')) || [];
  existing.push(q);
  console.log(existing);
  localStorage.setItem('favQuotes', existing.toString());

}

const favbutton = document.querySelector(".fav-button");
favbutton.addEventListener("click", function(){
  favoriteQuotes.push(saying.textContent);
  console.log(favoriteQuotes);
  setStorage(saying.textContent);
  // console.log(saying.textContent);

  // pull what is in local storage, set it as an array, save to local storage
});

// when clicking refresh button, refresh the page with a new saying
const refreshButton = document.querySelector(".refresh-button");
const refreshPage = () => {
  location.reload();
};
refreshButton.addEventListener("click", refreshPage);
