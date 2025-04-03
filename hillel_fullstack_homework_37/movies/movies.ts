'use strict';
const API_KEY: string = '29f0bbd3';
const API_URL: string = 'https://www.omdbapi.com/';
const searchButtonElement: HTMLElement = document.getElementById("searchButton") as HTMLElement;
const inputMovieElement: HTMLInputElement = document.getElementById("inputMovie") as HTMLInputElement;
const searchMovieResultElement: HTMLElement = document.getElementById("searching__movie__results") as HTMLElement;
const errorMovieSearchElement: HTMLElement = document.querySelector(".searching__movie__error") as HTMLElement;
type Movie = {
    Poster: string,
    Title: string,
    Type: string,
    Year: string,
    imdbID: string
}
type DataMovie = {
    Response: boolean,
    Search: Movie[],
    totalResults: string
}

searchButtonElement.addEventListener("click", async ():Promise<void> => {
    // console.log("Movie? I like to movie it, movie it!!!", inputMovieElement.value);
    searchMovieResultElement.innerHTML = "";
    errorMovieSearchElement.innerText = "Searching error... repeat late, please";
    const foundMovie: Movie[] = await searchMovie(inputMovieElement.value);
    // console.log(foundMovie);
    try {
        searchMovieResultElement.innerHTML = foundMovie.map((movie: Movie) => {
        //     console.log("Movie:", movie);
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
                // console.log("movieHtml: ", movieHtml);
                return movieHtml;
        }).join("");
        errorMovieSearchElement.innerHTML = "";

    } catch (caughtError: unknown) {
        const error = caughtError as Error;
        errorMovieSearchElement.innerHTML = `Facepalm: ${error.message}`;
    }
});

async function searchMovie(requestString: string):Promise<Movie[]> {
    const searchLink: string = (`${API_URL}?apikey=${API_KEY}&s=${requestString}`);
    const dataMovie: DataMovie = await fetch(searchLink)
        .then(response => {
            if (!response.ok) {
                throw new Error("Відповідь на запит невдала");
            } else {
                // console.log("Response: ", response);
                return response.json();
            }
        });
    // console.log("DataMovie: ",dataMovie);
    // console.log("DataMovie search: ",dataMovie.Search);
    return dataMovie?.Search;
}