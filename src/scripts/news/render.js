import newstoHTML from "./htmlfactory.js"



function getAndRenderAllArticles() {
  mainSection.innerHTML = ""
  newsApi.getAllArticles().then(news => {
      news.sort(sortAZ).map(newstoHTML).forEach(renderToDOM)
  })
}

getAndRenderAllArticles()


function renderToDOM(htmlRep) {
  mainSection.innerHTML += htmlRep;
  }


function sortAZ(a, b) {
  return a.title.localeCompare(b.title)
}

export default renderNews