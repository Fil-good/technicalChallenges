




// AJAX function to fetch a list of movies, based on a search query (equals the text in input)
async function fetchMovieTitles(url) {
  const response = await fetch(url)
  return response.json();
}

function showList() {
  let el = document.querySelector('input');
  let query = el.value;
  let url = `http://www.omdbapi.com/?s=${query}&apikey=65d6a47c`;
  let ul = document.querySelector('ul');
  let ulInnerHtml = "";

  fetchMovieTitles(url)
    .then((data) => {
      data.Search.forEach(movie => {
      ulInnerHtml += `<li>${movie.Title}</li>`;
    })})
    .then(() => {
      ul.innerHTML = ulInnerHtml;
    })
}

// event listener, with handler = showList
function searchOnKeyword () {
let searchButton = document.querySelector('button');
searchButton.addEventListener("click", (event) => {
  event.preventDefault();
  showList()
  });
}

searchOnKeyword();


// postMovieImdbId(url, data = {}) {

// }

// imdbID": "tt0120737"
