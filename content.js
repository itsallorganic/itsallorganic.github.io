// --- Edit your Article of the Month here ---

const currentArticle = {
    date: "December 2025 Edition",
    title: "The Solitude of the Sands",
    description: "There is a specific frequency to the silence found in the deep canyon. In this month's feature, we explore the neurological impact of visual isolation and how the stark landscape of the desert affects human creativity...",
    link: "article-full.html" // The file where the full article lives
};


// --- Do Not Touch Below (This loads it into the HTML) ---
document.getElementById('art-date').innerText = currentArticle.date;
document.getElementById('art-title').innerText = currentArticle.title;
document.getElementById('art-desc').innerText = currentArticle.description;
document.getElementById('art-link').href = currentArticle.link;