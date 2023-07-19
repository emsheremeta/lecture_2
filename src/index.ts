interface IMovie {
  poster_path: string,
  original_title: string,
  overview : string,
  popularity? : number,
  title: string,
  vote_average :number,
  release_date : Date,
  id :string 

};
let movies: IMovie[];
const IMG_HOST:string = 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2';

 function createParagraph(innerText:string | number, className: string, date? : Date) :HTMLParagraphElement {
  const paragraph = document.createElement('p');
    paragraph.innerText = innerText.toString();
  paragraph.setAttribute('class', className);
  return paragraph;
 }

 function createRealiseDate (innerText: Date, className: string) : HTMLElement {
  const realiseDate = document.createElement('span');
 realiseDate.innerText = innerText.toString();
 realiseDate.className=className
 return realiseDate;
 }
// Popular-----------------------------------------------------------------------------------------------------------------

// async function getPopularMovie<T>(): Promise<T[]> {
//     const options = {
//       method: 'GET',
//       headers: {
//         accept: 'application/json',
//         Authorization:
//           'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlOGU3NDE4ZDBjOTAyYTc4YWNhYWJhYzQ2ZWNjOTc5ZSIsInN1YiI6IjYzOTRhOTlhNmU5MzhhMDA5ZjVhN2NlOSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.xbOkRnX5HrLukZ6ne0DioRGL4R29m-kldLHsTfpqZ_g',
//       },
//     };

//   const response = await fetch( 'https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc',
//   options);

//   if (!response.ok) {
//     throw new Error(`HTTP error! Status: ${response.status}`);
//   }

//   const data = await response.json();
//   return data.results as T[];
// }

// async function getMovie() {
// try {
//   const movie: IMovie[] = await getPopularMovie<IMovie>();
//   console.log(movie);

//  const content = document.getElementById('content') as HTMLDivElement;

//  movie.map((el) => {
//  const movieTitle = document.createElement('p') as HTMLParagraphElement;
//  movieTitle.innerText=el.title;
//  content.appendChild(movieTitle)
// })
// } catch (error) {
//   console.log(error)
// }
// }

// getMovie();


// Highest rated

// async function getPopularMovie<T>(): Promise<T[]> {
//     const options = {
//       method: 'GET',
//       headers: {
//         accept: 'application/json',
//         Authorization:
//           'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlOGU3NDE4ZDBjOTAyYTc4YWNhYWJhYzQ2ZWNjOTc5ZSIsInN1YiI6IjYzOTRhOTlhNmU5MzhhMDA5ZjVhN2NlOSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.xbOkRnX5HrLukZ6ne0DioRGL4R29m-kldLHsTfpqZ_g',
//       },
//     };

//   const response = await fetch( 'https://api.themoviedb.org/3/movie/top_rated',
//   options);

//   if (!response.ok) {
//     throw new Error(`HTTP error! Status: ${response.status}`);
//   }

//   const data = await response.json();
//   return data.results as T[];
// }

// async function getMovie() {
// try {
//   const movie: IMovie[] = await getPopularMovie<IMovie>();
//   console.log(movie);

//  const content = document.getElementById('content') as HTMLDivElement;
//   //create UL
//   const contentMovieList = document.createElement('ul') as HTMLElement;
//   content.appendChild(contentMovieList)

//  movie.map((el) => {
  
//   const movieListElement = document.createElement('li') as HTMLLIElement;

//   const movieImg = document.createElement('img') as HTMLImageElement;
//   movieImg.setAttribute('class', 'movie_img')
//   movieImg.src =IMG_HOST + el.poster_path;

//   movieListElement.appendChild(movieImg);
 
//  const movieTitle = createParagraph(el.title, 'movie_title');
//  const movieOverview = createParagraph(el.overview, 'movie_overview');
//  const movieRelease = createRealiseDate(el.release_date, 'movie_realise');
//  const movieVoteAverage = createParagraph(el.vote_average, 'movie_voteAvarage')

 
//  movieListElement.appendChild(movieTitle);
//  movieListElement.appendChild(movieOverview);
//  movieListElement.appendChild(movieRelease);
// movieListElement.appendChild(movieVoteAverage);



//  contentMovieList.appendChild(movieListElement);

// })
// } catch (error) {
//   console.log(error)
// }
// }

// getMovie();

  // Upcoming movies-----------------------------------------------------------------------------------------------------------

//   async function getPopularMovie<T>(): Promise<T[]> {
//     const options = {
//       method: 'GET',
//       headers: {
//         accept: 'application/json',
//         Authorization:
//           'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlOGU3NDE4ZDBjOTAyYTc4YWNhYWJhYzQ2ZWNjOTc5ZSIsInN1YiI6IjYzOTRhOTlhNmU5MzhhMDA5ZjVhN2NlOSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.xbOkRnX5HrLukZ6ne0DioRGL4R29m-kldLHsTfpqZ_g',
//       },
//     };

//   const response = await fetch( 'https://api.themoviedb.org/3/movie/upcoming',
//   options);

//   if (!response.ok) {
//     throw new Error(`HTTP error! Status: ${response.status}`);
//   }

//   const data = await response.json();
//   return data.results as T[];
// }

// async function getMovie() {
// try {
//   const movie: IMovie[] = await getPopularMovie<IMovie>();
//   console.log(movie);

//  const content = document.getElementById('content') as HTMLDivElement;

//   const contentMovieList = document.createElement('ul') as HTMLElement;
//   content.appendChild(contentMovieList)

//  movie.map((el) => {
  
//   const movieListElement = document.createElement('li') as HTMLLIElement;

//   const movieImg = document.createElement('img') as HTMLImageElement;
//   movieImg.setAttribute('class', 'movie_img')
//   movieImg.src =IMG_HOST + el.poster_path;

//   movieListElement.appendChild(movieImg);
 
//  const movieTitle = createParagraph(el.title, 'movie_title');
//  const movieOverview = createParagraph(el.overview, 'movie_overview');
//  const movieRelease = createRealiseDate(el.release_date, 'movie_realise');
//  const movieVoteAverage = createParagraph(el.vote_average, 'movie_voteAvarage')

 
//  movieListElement.appendChild(movieTitle);
//  movieListElement.appendChild(movieOverview);
//  movieListElement.appendChild(movieRelease);
// movieListElement.appendChild(movieVoteAverage);



//  contentMovieList.appendChild(movieListElement);

// })
// } catch (error) {
//   console.log(error)
// }
// }

// getMovie();

// BY NAME ---------------------------------------------------------------------------------------------------


// async function getPopularMovie<T>(): Promise<T[]> {
//   const input = (document.getElementById('input') as HTMLInputElement).value;
//   console.log(input)
//   const options = {
//     method: 'GET',
//     headers: {
//       accept: 'application/json',
//       Authorization:
//         'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlOGU3NDE4ZDBjOTAyYTc4YWNhYWJhYzQ2ZWNjOTc5ZSIsInN1YiI6IjYzOTRhOTlhNmU5MzhhMDA5ZjVhN2NlOSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.xbOkRnX5HrLukZ6ne0DioRGL4R29m-kldLHsTfpqZ_g',
//     },
//   };

// const response = await fetch( `https://api.themoviedb.org/3/search/movie?query=${input}`,
// options);

// if (!response.ok) {
//   throw new Error(`HTTP error! Status: ${response.status}`);
// }

// const data = await response.json();
// console.log(data.results)
// return data.results as T[];
// }

// const button = document.getElementById('button') as HTMLButtonElement;
// button.addEventListener("click", getMovie);

// async function getMovie() {
// try {
// const movie: IMovie[] = await getPopularMovie<IMovie>();
// console.log('getMovie', movie);

// const content = document.getElementById('content') as HTMLDivElement;

// const contentMovieList = document.createElement('ul') as HTMLElement;
// content.appendChild(contentMovieList)

// movie.map((el) => {

// const movieListElement = document.createElement('li') as HTMLLIElement;

// const movieImg = document.createElement('img') as HTMLImageElement;
// movieImg.setAttribute('class', 'movie_img')
// movieImg.src =IMG_HOST + el.poster_path;

// movieListElement.appendChild(movieImg);

// const movieTitle = createParagraph(el.title, 'movie_title');
// const movieOverview = createParagraph(el.overview, 'movie_overview');
// const movieRelease = createRealiseDate(el.release_date, 'movie_realise');
// const movieVoteAverage = createParagraph(el.vote_average, 'movie_voteAvarage')


// movieListElement.appendChild(movieTitle);
// movieListElement.appendChild(movieOverview);
// movieListElement.appendChild(movieRelease);
// movieListElement.appendChild(movieVoteAverage);



// contentMovieList.appendChild(movieListElement);

// })
// } catch (error) {
// console.log(error)
// }
// }

// getMovie();

//Favorite --------------------------------------------------------------------------------------

function saveMovieIdToLocalStorage(movieId: string): void {
  let storedMovieIds: string[] = JSON.parse(localStorage.getItem('favMovieIds') || '[]');
  storedMovieIds.push(movieId);
  localStorage.setItem('favMovieIds', JSON.stringify(storedMovieIds));
}

function removeMovieIdFromLocalStorage(movieId: string): void {
  let storedMovieIds: string[] = JSON.parse(localStorage.getItem('favMovieIds') || '[]');

  storedMovieIds.splice(storedMovieIds.findIndex(el => el === movieId), 1);
  localStorage.setItem('favMovieIds', JSON.stringify(storedMovieIds));
}


async function fetchData<T>(endpoint: string, pageNumber: number): Promise<T[]> {
  const HOST_URL : string = `https://api.themoviedb.org/3/movie`;
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization:
        'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlOGU3NDE4ZDBjOTAyYTc4YWNhYWJhYzQ2ZWNjOTc5ZSIsInN1YiI6IjYzOTRhOTlhNmU5MzhhMDA5ZjVhN2NlOSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.xbOkRnX5HrLukZ6ne0DioRGL4R29m-kldLHsTfpqZ_g',
    },
  };

const response = await fetch( HOST_URL + endpoint + `?page=${pageNumber}`,
options);

if (!response.ok) {
  throw new Error(`HTTP error! Status: ${response.status}`);
}

const data = await response.json();
console.log(data.results)
return data.results as T[];
}

async function displayMovies(movies: IMovie[]) {
try {

const content = document.getElementById('content') as HTMLDivElement;

const contentMovieList = document.createElement('ul') as HTMLElement;
content.appendChild(contentMovieList)

movies.map((el) => {

const movieListElement = document.createElement('li') as HTMLLIElement;

const movieImg = document.createElement('img') as HTMLImageElement;
movieImg.setAttribute('class', 'movie_img')
movieImg.src =IMG_HOST + el.poster_path;

movieListElement.appendChild(movieImg);

const movieTitle = createParagraph(el.title, 'movie_title');
const movieOverview = createParagraph(el.overview, 'movie_overview');
const movieRelease = createRealiseDate(el.release_date, 'movie_realise');
const movieVoteAverage = createParagraph(el.vote_average, 'movie_voteAvarage')


movieListElement.appendChild(movieTitle);
movieListElement.appendChild(movieOverview);
movieListElement.appendChild(movieRelease);
movieListElement.appendChild(movieVoteAverage);



contentMovieList.appendChild(movieListElement);

// favorite button ----------------------------------------------------

const favButton = document.createElement('button') as HTMLButtonElement;
movieListElement.appendChild(favButton);

let toggleFavorite = isFavorite(el.id);
console.log('initial text')
favButton.textContent = toggleFavorite ? 'Remove from favorites' : 'Add to favorites';


favButton.addEventListener('click', function() {
  toggleFavorite = isFavorite(el.id);
if(toggleFavorite) {
  favButton.textContent ='Add to favorites';
 removeFromFav();
} if(!toggleFavorite) {
  favButton.textContent= 'Remove from favorites';
  addToFav();
}
})
function removeFromFav() {
  const movieId: string = el.id ?? '';
  console.log("remove", movieId, "from favorites");
  removeMovieIdFromLocalStorage(movieId )
}

function isFavorite(id: string): boolean {
  const favorites : string[] = JSON.parse(localStorage.getItem('favMovieIds') ?? '[]');
  console.log(favorites, id, favorites.includes(id));
  if (favorites.includes(id)) {
    return true;
  } else {
    return false;
  }
}
function addToFav() {
  const movieId: string = el.id ?? '';
  console.log("add", movieId, "to favorites");
  saveMovieIdToLocalStorage(movieId )
}
})
} catch (error) {
console.log(error)
}
}

// load more
const loadMoreButton = document.getElementById('loadmore') as HTMLButtonElement;
console.log('button')
loadMoreButton.addEventListener('click', loadMore)
async function loadMore() {
  console.log('load more');
  loadMoreButton.value = (Number(loadMoreButton.value) + 1).toString();
  let nextPage = await fetchData<IMovie>('/top_rated', Number(loadMoreButton.value));
  console.log(nextPage);
  // movies.push(...nextPage);
  displayMovies(nextPage);
}


async function main() : Promise<void> {
  movies = await fetchData<IMovie>('/top_rated', 1);
console.log('getMovie', movies);
displayMovies(movies);
}

main();
