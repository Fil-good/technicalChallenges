
// AJAX function to fetch a list of movies, based on a search query (equals the text in input)
async function fetchMovieTitles(url) {
  try {
    const response = await fetch(url)
    return response.json();
  } catch(error) { console.log(error) }; // error handling 404 to be done ideally
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

function makeSelectList() {
  let sel = document.querySelector('select');
  let options = "";
  let listener = document.querySelector('input');
  let query = listener.value;

  let url = `http://www.omdbapi.com/?s=${query}&apikey=65d6a47c`;


  fetchMovieTitles(url)
    .then((data) => {
      data.Search.forEach(movie => {
        options += `<option>${movie.Title}</option>`;
      })
    })
    .then(() => {
      sel.innerHTML = options;
    })
}

// event listener, with handler = showList
// put listener on form, submit with enter, and click on button
function searchOnKeyword () {
let searchButton = document.querySelector('form');
searchButton.addEventListener("submit", (event) => {
  event.preventDefault();
  showList()
  })
}

function populateSelect () {
  let listener = document.querySelector('input');
  listener.addEventListener("keyup", makeSelectList());
}

searchOnKeyword();
populateSelect();


// postMovieImdbId(url, data = {}) {

// }

// imdbID": "tt0120737"
