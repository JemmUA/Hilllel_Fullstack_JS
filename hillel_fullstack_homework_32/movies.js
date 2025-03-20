// console.log("Movie?");
const API_KEY = '29f0bbd3';
const API_URL = 'https://www.omdbapi.com/';


const searchButton = document.getElementById("searchButton");
let inputMovie = document.getElementById("inputMovie");
searchButton.addEventListener("click", () => {
    console.log("Movie?");
    console.log("і?", inputMovie.value);
});