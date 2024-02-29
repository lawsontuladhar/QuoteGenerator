let currentCategory = "happiness";
let currentQuoteIndex = 0;
let fontSize = 16;

fetch("./quotes.json")
  .then((res) => res.json())
  .then((data) => {
    console.log(data);
  });
