const quotes = [
    "Жизнь — это путешествие, а не пункт назначения.",
    "Смейтесь чаще, чем плачете.",
    "Делай то, что любишь, и деньги придут."
];

function generateQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    document.getElementById('quote').innerHTML = quotes[randomIndex];
}

generateQuote();
