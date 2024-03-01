const quotes = {};

fetch("quotes.json")
  .then((response) => response.json())
  .then((data) => {
    data.forEach((quote) => {
      if (!quotes[quote.category]) {
        quotes[quote.category] = [];
      }
      quotes[quote.category].push({
        text: quote.quote,
        author: quote.author,
        category: quote.category
      });
    });
    displayQuote();
  })
  .catch((error) => console.error("Error loading quotes:", error));

let currentCategory = "happiness";
let currentQuoteIndex = 0;
let darkMode = false;
let fontSize = 22;
let categoryQuotes;

function displayQuote() {
  const quoteContainer = document.getElementById("quoteContainer");
  const quoteText = document.getElementById("quoteText");
  const quoteAuthor = document.getElementById("quoteAuthor");
  const quoteCategory = document.getElementById("quoteCategory");

  categoryQuotes = quotes[currentCategory];

  const currentQuote = categoryQuotes[currentQuoteIndex];

  quoteText.innerHTML = `<p>"${currentQuote.text}"</p>`;
  quoteAuthor.innerHTML = `<p>- ${currentQuote.author}</p>`;
  quoteContainer.style.fontSize = `${fontSize}px`;
  quoteCategory.innerHTML = `<p>"${currentQuote.category}"</p>`;
  quoteContainer.style.fontSize = `${fontSize}px`;

  if (darkMode) {
    quoteGenerator.classList.add("dark-mode");
    container.classList.add("dark-mode1");
    quoteContainer.classList.add("dark-mode2");
    fontControls.classList.add("dark-mode2");
  } else {
    quoteGenerator.classList.remove("dark-mode");
    container.classList.remove("dark-mode1");
    quoteContainer.classList.remove("dark-mode2");
    fontControls.classList.remove("dark-mode2");
  }
}

function nextQuote() {
  document.getElementById("prevButton").removeAttribute("disabled");
  currentQuoteIndex++;
  if (currentQuoteIndex === categoryQuotes.length - 1) {
    document.getElementById("nextButton").setAttribute("disabled", "");
  }

  displayQuote();
}

function prevQuote() {
  document.getElementById("nextButton").removeAttribute("disabled");
  if (currentQuoteIndex === 0) {
    document.getElementById("prevButton").setAttribute("disabled", "");
    return;
  }
  currentQuoteIndex--;
  displayQuote();
}

function randomQuote() {
  const categories = Object.keys(quotes);
  const randomCategory =
    categories[Math.floor(Math.random() * categories.length)];
  const categoryQuotes = quotes[randomCategory];

  if (categoryQuotes) {
    currentCategory = randomCategory;
    currentQuoteIndex = Math.floor(Math.random() * categoryQuotes.length);
    displayQuote();
  }
}

function changeCategory() {
  currentCategory = document.getElementById("category").value;
  currentQuoteIndex = 0;
  displayQuote();
}

function toggleDarkMode() {
  darkMode = !darkMode;
  displayQuote();
}

function increaseFontSize() {
  fontSize += 2;
  document.getElementById("decreaseFontSize").removeAttribute("disabled");
  if (fontSize === 36) {
    document.getElementById("increaseFontSize").setAttribute("disabled", "");
  }
  displayQuote();
}

function decreaseFontSize() {
  document.getElementById("increaseFontSize").removeAttribute("disabled");
  fontSize = Math.max(10, fontSize - 2);
  if (fontSize === 10) {
    document.getElementById("decreaseFontSize").setAttribute("disabled", "");
  }
  displayQuote();
}
