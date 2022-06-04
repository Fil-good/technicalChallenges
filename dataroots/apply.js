


async function fetchMovieTitles(url='') {

  const response = await fetch(url)
  return response.json();

}

let url = `http://www.omdbapi.com/?s=lord&apikey=65d6a47c`;
let ul = document.querySelector('ul');
let ulInnerHtml = "";


fetchMovieTitles(url)
  .then((data) => {
    data.Search.forEach(movie => {
    let liUlInnerHtml = `<li>${movie.Title}</li>`;
    ulInnerHtml += liUlInnerHtml;
  })})
  .then(() => {
    console.log(ulInnerHtml);
    ul.innerHTML = ulInnerHtml })
