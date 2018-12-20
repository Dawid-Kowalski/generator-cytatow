const quoteUrl = "https://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1";
const tweetLink = "https://twitter.com/intent/tweet?text=";

function getQuote() {
	fetch(quoteUrl, { cache: "no-store" })

	.then(function(resp) {
		return resp.json();
	})

	.then(createTweet);
}

function createTweet(input) {
    let data = input[0];

    let dataElement = document.createElement("div");
    dataElement.innerHTML = data.content;
    let quoteText = dataElement.innerText.trim();
    let quoteAuthor = data.title;

    if (!quoteAuthor.length) {
        quoteAuthor = "Unknown author";
    }

    let tweetText = "Cytat dnia - " + quoteText + " Autor: " + quoteAuthor;

    if(tweetText.length > 140) {
    	getQuote();
    } else {
    	let tweet = tweetLink + encodeURIComponent(tweetText);
    	document.getElementById("quote-text").innerText = quoteText;
   		document.getElementById("quote-author").innerText = "Autor: " + quoteAuthor;
    	document.getElementById("tweet").setAttribute("href", tweet);
    }
}

document.addEventListener("DOMContentLoaded", function() {
    getQuote();
});