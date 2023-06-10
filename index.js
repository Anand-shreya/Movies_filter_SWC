const API_KEY = "api_key=373646a461620fb586683b938763f5a9";
const BASE_URL = "https://api.themoviedb.org/3";
const API_URL = BASE_URL + "/discover/movie?sort_by=popularity.desc&" + API_KEY;
const IMG_URL = "https://image.tmdb.org/t/p/w500";
const search_URL = BASE_URL + "/search/movie?" + API_KEY;

let films = [];

fetch(API_URL)
  .then((res) => {
    return res.json();
  })
  .then((res) => {
    return res.results;
  })
  .then((data) => {
    films = data;
    films.forEach((element) => {
      const image = `<img src="${IMG_URL + element.poster_path}" alt="" class="img" />`;
        // const title = `<p class="movie_name">${element.title}</p>`
        const movie = `<div>${image}</div`
        const ele = `<li class="ele">${movie}</li>`;
        document.querySelector("ul").insertAdjacentHTML("beforeend",ele);
        console.log(element);
    });
  })
  .catch((error) => console.log(error));

function myFunction() {
  var x = document.getElementById("myText").value;
  fetch(
    `https://api.themoviedb.org/3/search/movie?query=${x}&include_adult=false&language=en-US&page=1&${API_KEY}`
  )
    .then(res=>{
        return res.json();
    })
    .then(res=>{
        return res.results;
    })
    .then((data) => {
        films.length = 0;
        console.log(films);
        films = data;
        document.querySelector("ul").innerHTML="";
      films.forEach((element) => {
      const image = `<img src="${IMG_URL + element.poster_path}" alt="" class="img"/>`;
      const ele = `<li class = "ele">${image}</li>`;
      document.querySelector("ul").insertAdjacentHTML("beforeend", ele);
      // console.log(element);
      });
    })
    .catch((err) => console.error(err));
}
