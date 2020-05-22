/*
    Author: Roxanne
    Purpose: Renders news articles dynamically so they can be called in our index.html 
*/

const newsHTML = {

  createNewsArticle (news) {
    return `
    <div id="news-form">
    <section class="news--${news.id}">
    <h3><a href="${news.url}"></h3>
    <h1><em><a href="${news.title}</em></a></h1>
    <p>${news.synopsis}</p>
    <button class="add--news--btn" id="addNews--btn">Add News Article</button>
        </div>
    `
  },

  createNewsAddForm ()  {
    return `
<article id="createNewsform">
<header>Add New Article</header>
<div class="news-form__input">
<input type="text" id="newsTitle" placeholder="title" />
          <input type="url" id="newsURL" placeholder="Link to Article" />
        </div>
<div class="news-form__submit">
<button id="saveNews--btn">Save</button></div>
</article>
`
  },

articleObject (url, title, synopsis) {
  return {
      "link": url,
      "title": title,
      "synopsis": synopsis
  }
}

}

export default {
  newsHTML
}