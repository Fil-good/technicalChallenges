

let ul = document.querySelector('ul')

http://www.omdbapi.com/?t=lord


fetch(`http://www.omdbapi.com/?t=lord&apikey=65d6a47c`)
  .then(response => response.json())
  .then((data) => {
    console.log(data.Title)
    ul.innerHTML = `<li>${data.Title}</li>`


  })


// let results = document.querySelector("ul");
// let query = "i=tt3896198";

// const searchMovies = () => {
//   fetch(`http://www.omdbapi.com/?i=tt3896198&apikey=65d6a47c`)
//     .then(response => response.json())
//     .then((data) => {

//       console.log(data)
//       const title = `<li>${data.Title}</li>`
//       // data.Search.forEach((result) => {
//         // const movie = `<li class="list-inline-item">
//         //   <img src="${result.Poster}" alt="">
//         //   <p>${result.Title}</p>
//         // </li>`
//         console.log(`title: ${title}`)
//         results.innerHTML += title
//       })
//     // })
// }


// http://www.omdbapi.com/?i=tt3896198&apikey=65d6a47c
