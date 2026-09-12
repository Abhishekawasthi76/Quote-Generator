const url = "https://www.drivebird.com/api/quotes/random";

const Quote = document.querySelector(".quote");
const Author = document.querySelector(".author");

async function getquote(url) {

    const response = await fetch(url);
    const data = await response.json();

    console.log(data);

    Quote.innerHTML = data.data[0].quote;
    Author.innerHTML = data.data[0].author;
}

getquote(url);