const createNewsArticle = (news) => {
  `
    <section class="news--${news.id}">
    <h3><a href="${news.url}"></h3>
    <h1><em><a href="${news.title}</em></a></h1>
    <p>${news.synopsis}</p>
        </div>
    `
}

const createNewsAddForm = () => {
  `
<article id="createNewsform">
<header>Add New Article</header>
<div class="news-form__input">
<input type="text" id="newsTitle" placeholder="title" />
          <input type="url" id="newsURL" placeholder="Link to Article" />
        </div>
<div class="news-form__submit">
<button id="saveNews">Save</button></div>
</article>
`
}


export default {
  createNewsArticle,
  createNewsAddForm
}