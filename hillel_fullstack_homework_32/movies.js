// console.log("Movie?");
const API_KEY = '29f0bbd3';
const API_URL = 'https://www.omdbapi.com/';


const searchButtonElement = document.getElementById("searchButton");
let inputMovie = document.getElementById("inputMovie");
searchButtonElement.addEventListener("click", async () => {
    console.log("Movie?", inputMovie.value);
    const foundMovie = await searchMovie(inputMovie.value);
    console.log("Found Movie!:", foundMovie);
});

async function searchMovie(requestString) {
    const searchLink = (`${API_URL}?apikey=${API_KEY}&s=${requestString}`);
    const dataMovie = await fetch(searchLink)
        .then(response => {
            if (!response.ok) {
                throw new Error ("Відповідь на запит невдала: ", response);
            } else {
                return response.json();
            }
        });
        return dataMovie?.Search;
    }