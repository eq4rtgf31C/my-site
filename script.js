const quotes = {
    all: [
        "Жизнь — это путешествие, а не пункт назначения.",
        "Смейтесь чаще, чем плачете.",
        "Делай то, что любишь, и деньги придут.",
        "Каждый день — это новый шанс.",
        "Будь собой, остальные роли заняты."
    ],
    life: [
        "Жизнь — это то, что происходит, пока ты строишь планы.",
        "Время — лучший учитель, но оно убивает учеников."
    ],
    humor: [
        "Я не ленивый, я в режиме энергосбережения.",
        "Жизнь коротка, ешь десерт первым."
    ],
    motivation: [
        "Успех — это движение от неудачи к неудаче без потери энтузиазма.",
        "Мечты сбываются, если их превращать в цели."
    ]
};

function generateQuote() {
    const category = document.getElementById('category').value;
    const quoteList = (category === 'all') ? 
        quotes.all.concat(quotes.life, quotes.humor, quotes.motivation) : 
        quotes[category];
    const randomIndex = Math.floor(Math.random() * quoteList.length);
    const quoteBox = document.getElementById('quote');
    quoteBox.innerHTML = quoteList[randomIndex];
    quoteBox.style.animation = 'fadeIn 0.5s ease'; // Анимация текста
    setTimeout(() => quoteBox.style.animation = '', 500); // Сброс анимации
}

function copyQuote() {
    const quote = document.getElementById('quote').innerHTML;
    navigator.clipboard.writeText(quote).then(() => {
        alert("Цитата скопирована!");
    });
}

function shareQuote() {
    const quote = document.getElementById('quote').innerHTML;
    const url = `https://twitter.com/intent/tweet?text=${encodeURIComponent(quote)}`;
    window.open(url, '_blank');
}

generateQuote(); // Первая цитата при загрузке
