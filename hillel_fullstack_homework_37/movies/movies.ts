'use strict';
const API_KEY: string = '29f0bbd3';
const API_URL: string = 'https://www.omdbapi.com/';

const searchButtonElement: HTMLElement = document.getElementById("searchButton") as HTMLElement;
const inputMovieElement: HTMLInputElement = document.getElementById("inputMovie") as HTMLInputElement;
const searchMovieResultElement: HTMLElement = document.getElementById("searching__movie__results") as HTMLElement;
const errorMovieSearchElement: HTMLElement = document.querySelector(".searching__movie__error") as HTMLElement;
searchButtonElement.addEventListener("click", async () => {
    // console.log("Movie? I like to movie it, movie it!!!", inputMovieElement.value);
    searchMovieResultElement.innerHTML = "";
    errorMovieSearchElement.innerText = "Searching error... repeat late, please";
    // TODO ANY
    const foundMovie = await searchMovie(inputMovieElement.value);
    try {
        // TODO ANY
        searchMovieResultElement.innerHTML = foundMovie.map((movie: any) => {
            const posterUrl: string | undefined = movie.Poster?.startsWith("http") ? movie.Poster : "images/no-image.svg";

            const movieHtml: string = `
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
        }).join("");
        errorMovieSearchElement.innerHTML = "";

    } catch (caughtError: unknown) {
        const error = caughtError as Error;
        errorMovieSearchElement.innerHTML = `Facepalm: ${error.message}`;
    }
});

async function searchMovie(requestString: string) {
    const searchLink: string = (`${API_URL}?apikey=${API_KEY}&s=${requestString}`);
    // TODO ANY
    const dataMovie = await fetch(searchLink)
        .then(response => {
            if (!response.ok) {
                // TODO: SOLVE RESPONSE
                // throw new Error("Відповідь на запит невдала: ", response);
                throw new Error("Відповідь на запит невдала: ");
            } else {
                // console.log("Response: ", response);
                return response.json();
            }
        });
    // console.log("DataMovie: ",dataMovie);
    return dataMovie?.Search;
}