let quote = document.getElementById("quote");
let character = document.getElementById("character");
let btn = document.getElementById("btn");

const url = "https://friends-quotes-api.herokuapp.com/quotes/random";

let getQuote = () => {
  fetch(url)
    .then((data) => data.json())
    .then((item) => {
      quote.innerText = item.quote;
      character.innerText = item.character;
    });
};

window.addEventListener("load", getQuote);
btn.addEventListener("click", getQuote);

