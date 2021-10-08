document.getElementById('submit-button').addEventListener('click', function () {
    // create the html elements
    const article = document.createElement('article')
    const h3 = document.createElement('h3')
    const p = document.createElement('p')

    // adding data to html element
    h3.innerText = document.getElementById('article-name').value;
    p.innerText = document.getElementById('article-input').value;
    article.appendChild(h3)
    article.appendChild(p)

    // where to add
    const articles = document.getElementById('top-articles')

    //append
    articles.appendChild(article)
})
