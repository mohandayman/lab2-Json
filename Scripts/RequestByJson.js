
import { apiUrl, imgPath } from "./Vars.js";

$.get(
    "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=9813ce01a72ca1bd2ae25f091898b1c7"
  ).done((data) => {
    showMovie(data.results);
  });
  function showMovie(data) {
    // main.innerHTML = "";
    data.forEach((movie) => {
      const { title, poster_path, id } = movie;
      const movieElement = document.createElement("div");
      movieElement.classList.add("movie");
      movieElement.innerHTML = `
      <a href="./DetailsPage.html?id=${id}">
      <img src="${imgPath + poster_path}" alt="Move" />
          <h4 id="moveName">${title}</h4>
      </a>
      
      `;
      // console.log(title);
      main.appendChild(movieElement);
    });
  }