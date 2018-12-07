import articleFetching from "./fetching"
import articleContentDOM from "./articleDisplay"
function postToAPI() {
  let titleValue = document.querySelector("#articleTitle").value
  let synopsisValue = document.querySelector("#synopsis").value
  let dateValue = document.querySelector("#articleDate").value
  let URLvalue = document.querySelector("#articleURL").value

  let object = {
    newsTitle: titleValue,
    synopsis: synopsisValue,
    date: dateValue,
    articleURL: URLvalue
  }
  articleFetching.postFunction(object).then(() => {
    articleContentDOM()
  })
}
export default postToAPI