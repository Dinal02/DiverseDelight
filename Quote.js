let quote = document.getElementById("quote");
let author = document.getElementById("author");
let quoteBtn = document.getElementById("quoteBtn");

const url2 = "https://api.quotable.io/random";

let getQuote = () => {
  fetch(url2)
    .then((data) => data.json())
    .then((item) => {
      console.log(item.content);
      console.log(item.author);
      quote.innerText = item.content;
      author.innerText = item.author;
    });
};

window.addEventListener("load", getQuote);
quoteBtn.addEventListener("click", getQuote);
