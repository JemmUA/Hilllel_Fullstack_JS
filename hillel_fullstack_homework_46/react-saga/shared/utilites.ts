export const cryAnything = ((cry: string) => console.log(cry));

export const pauseForSaga = (pause = 1000) => (new Promise(resolve =>
    setTimeout(resolve, pause)));