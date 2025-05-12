let quotes = [
  { text: "Believe in yourself.", author: "Unknown" },
  { text: "Every day is a second chance.", author: "Oprah Winfrey" },
  { text: "Don't watch the clock; do what it does. Keep going.", author: "Sam Levenson" },
  { text: "Success is not final, failure is not fatal.", author: "Winston Churchill" },
  { text: "You are stronger than you think.", author: "Unknown" },
  { text: "Dream big and dare to fail.", author: "Norman Vaughan" },
  { text: "Hard work beats talent when talent doesn’t work hard.", author: "Tim Notke" },
  { text: "Stay positive, work hard, make it happen.", author: "Unknown" },
  { text: "Difficult roads often lead to beautiful destinations.", author: "Zig Ziglar" },
  { text: "Never give up on a dream just because of the time it will take to accomplish it.", author: "Earl Nightingale" },
  { text: "Success usually comes to those who are too busy to be looking for it.", author: "Henry David Thoreau" },
  { text: "Push yourself, because no one else is going to do it for you.", author: "Unknown" },
  { text: "Don’t stop when you’re tired. Stop when you’re done.", author: "David Goggins" },
  { text: "If you can dream it, you can do it.", author: "Walt Disney" },
  { text: "Great things never come from comfort zones.", author: "George Addair" }
];


    // Save to localStorage if not already saved
    if (!localStorage.getItem("motivationalQuotes")) {
      localStorage.setItem("motivationalQuotes", JSON.stringify(quotes));
    }

let displayQuotes = document.getElementById("displayQuotes");
let generatBtn = document.getElementById("generatBtn");
let quoteList = document.getElementById("quotes");
let author = document.getElementById("author");


// function changeQuotes(){
//     let storedQuotes = JSON.parse(localStorage.getItem("motivationalQuotes"));
//     let randomIndex = Math.floor(Math.random() * storedQuotes.length);
//     let randomQuote = storedQuotes[randomIndex];
//     displayQuotes.textContent = randomQuote;
// }

function changeQuotes() {
  let storedQuotes = JSON.parse(localStorage.getItem("motivationalQuotes"));
  let randomIndex = Math.floor(Math.random() * storedQuotes.length);
  let randomQuote = storedQuotes[randomIndex];

  console.log(randomQuote.text);
  quoteList.textContent = `"${randomQuote.text}"`;
  author.textContent = `– ${randomQuote.author}`;
}
