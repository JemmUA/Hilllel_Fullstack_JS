// console.log("Movie?");
const API_KEY = '29f0bbd3';
const API_URL = 'https://www.omdbapi.com/';

const searchButtonElement = document.getElementById("searchButton");
const inputMovieElement = document.getElementById("inputMovie");
const searchMovieResultElement = document.getElementById("searching__movie__results");
const errorMovieSearchElement = document.querySelector(".searching__movie__error");
searchButtonElement.addEventListener("click", async () => {
    // console.log("Movie? I like to movie it, movie it!!!", inputMovieElement.value);
    searchMovieResultElement.innerHTML = "";
    errorMovieSearchElement.innerText = "Searching error... repeat late, please";
    // console.log(searchMovieResultElement);
    const foundMovie = await searchMovie(inputMovieElement.value);
    // console.log("Found Movie!:", foundMovie);
    try {
        // searchMovieResultElement.innerHTML = foundMovie.map(movie => getMovieHtml(movie).slice(1, -1));
        searchMovieResultElement.innerHTML = foundMovie.map(movie => {
            // getMovieHtml(movie);
            const posterUrl = movie.Poster?.startsWith("http") ? movie.Poster : "images/no-image.svg";

            const movieHtml = `
                <div class="movie__result">
                    <img
                        alt="${movie.Title}"
                        src="${posterUrl}"
                    >
                    <div class="movie__title">${movie.Title}</div>
                    <div class="movie__year">${movie.Year}</div>
                </div>`
                console.log("movieHtml: ", movieHtml);
                return movieHtml;



        //     return `
        // <div class="movie__result">
        //     <img
        //         alt="${movie.Title}"
        //         src="${posterUrl}"
        //     >
        //     <div class="movie__title">${movie.Title}</div>
        //     <div class="movie__year">${movie.Year}</div>
        // </div>`

        });
        // searchMovieResultElement.innerHTML = foundMovie.map(movie => getMovieHtml(movie).join(""));
        errorMovieSearchElement.innerHTML = "";

    } catch (error) {
        errorMovieSearchElement.innerHTML = `Facepalm: ${error.message}`;
    }
    // console.log(searchMovieResultElement);
});

async function searchMovie(requestString) {
    const searchLink = (`${API_URL}?apikey=${API_KEY}&s=${requestString}`);
    const dataMovie = await fetch(searchLink)
        .then(response => {
            if (!response.ok) {
                throw new Error("Відповідь на запит невдала: ", response);
            } else {
                // console.log("Response: ", response);
                return response.json();
            }
        });
    console.log("DataMovie: ",dataMovie);
    return dataMovie?.Search;
}

function getMovieHtml(dataMovie) {
    // console.log("dataMovie: ", dataMovie);
    const posterUrl = dataMovie.Poster?.startsWith("http") ? dataMovie.Poster : "images/no-image.svg";
    // console.log("posterUrl: ", posterUrl);
    // console.log("dataMovie.title: ", dataMovie.Title);
    // console.log("dataMovie.year: ", dataMovie.Year);

    // const movieHtml = `
    // <div class="movie__result">
    //     <img
    //         alt="${dataMovie.Title}"
    //         src="${posterUrl}"
    //     >
    //     <div class="movie__title">${dataMovie.Title}</div>
    //     <div class="movie__year">${dataMovie.Year}</div>
    // </div>`;
    // console.log("movieHtml: ", movieHtml);
    // return movieHtml;
    //

    return `
        <div class="movie__result">
            <img 
                alt="${dataMovie.Title}" 
                src="${posterUrl}"
            >
            <div class="movie__title">${dataMovie.Title}</div>
            <div class="movie__year">${dataMovie.Year}</div>
        </div>`
}
