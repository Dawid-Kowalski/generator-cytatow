const quoteUrl = "https://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1";

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

    console.log(quoteText);
    console.log(quoteAuthor);
    console.log(tweetText);
}

