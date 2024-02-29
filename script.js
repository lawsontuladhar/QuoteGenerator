let currentCategory = "happiness";
let currentQuoteIndex = 0;
let fontSize = 16;

console.log("hello");

function fetchData() {
  fetch("./quotes.json")
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
    })
    .catch((err) => {
      console.error("Something went wrong with retrieving the quote!");
      console.error(err);
    });
}

const quote = fetchData();

// console.log(quote);

function displayQuote() {
  const quoteElement = document.getElementById("quote");
  const authorElement = document.getElementById("author");
  const categoryElement = (document.getElementById("category").innerHTML =
    "Category");
  const categoryQuotes = quote[currentCategory];
}

function nextQuote() {
  currentQuoteIndex = (currentQuoteIndex + 1) % quote[currentCategory].length;
  displayQuote;
}

function prevQuote() {
  currentQuoteIndex =
    (currentQuoteIndex - 1 + quote[currentCategory].length) %
    quote[currentCategory].length;
  displayQuote();
}

function randomQuote() {
  currentQuoteIndex = Math.floor(Math.random() * quote[currentCategory].length);
  displayQuote();
}

function changeCategory() {
  currentCategory = document.getElementById("category").ariaValueMax;
  currentQuoteIndex = 0;
  displayQuote();
}

function toggleDarkMode() {
  const body = document.body;
  body.classList.toggle("dark-mode");
}

function increaseFontSize() {
  fontSize += 2;
  displayQuote();
}

function decreaseFontSize() {
  fontSize = Math.max(10, fontSize - 2);
  displayQuote();
}

// displayQuote();
