/*
    Author: Roxanne
    Purpose: Renders news articles dynamically so they can be called in our index.html 
*/

const newsHTML = {

  createNewsArticle(news) {
    return `
    <div id="news-form">
    <h3><a href="${news.url}"></a></h3>
    <h1><em>${news.title}</em></h1>
    <p>${news.synopsis}</p>
    <p>${news.timestamp}</p>
    <button class="add--news--btn" id="addNews--btn">Add News Article</button>
        </div>
    `
  },

  createNewsAddForm() {
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
  articleObject(url, title, synopsis, timestamp) {
    return {
      "link": url,
      "title": title,
      "synopsis": synopsis,
      "timestamp": timestamp
    }
  }

}

export default newsHTML
