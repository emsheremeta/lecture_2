import IMovie from "./imovie";


function saveMovieIdToLocalStorage(movieId: string): void {
    let storedMovieIds: string[] = JSON.parse(localStorage.getItem('favMovieIds') || '[]');
    storedMovieIds.push(movieId);
    localStorage.setItem('favMovieIds', JSON.stringify(storedMovieIds));
  }
  
  function saveMoviesToLocalStorage(movies: IMovie[]): void {
    localStorage.setItem('movies', JSON.stringify(movies));
  }
  
  function removeMoviesFromLocalStorage(): void {
    localStorage.removeItem('movies');
  }
  
  function removeMovieIdFromLocalStorage(movieId: string): void {
    let storedMovieIds: string[] = JSON.parse(localStorage.getItem('favMovieIds') || '[]');
  
    storedMovieIds.splice(storedMovieIds.findIndex(el => el === movieId), 1);
    localStorage.setItem('favMovieIds', JSON.stringify(storedMovieIds));
  }

  export {saveMovieIdToLocalStorage, saveMoviesToLocalStorage, removeMovieIdFromLocalStorage, removeMoviesFromLocalStorage}