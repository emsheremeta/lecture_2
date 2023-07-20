 import { fetchData } from "./fetchData";
import IMovie from "./imovie";
import { saveMoviesToLocalStorage, saveMovieIdToLocalStorage, removeMovieIdFromLocalStorage, removeMoviesFromLocalStorage } from "./favorites";
import { getMovie, getPopularMovie } from "./movieByName";
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
// Popular

const menuPopular = document.getElementById('popular') as HTMLLinkElement;
menuPopular.addEventListener('click', async function () {
  const urlParams = new URLSearchParams(window.location.search);

  urlParams.set('mode', 'popular');
  urlParams.set('page', '1');
  removeMoviesFromLocalStorage();

  window.location.search = urlParams.toString();
})

const menuUpcoming = document.getElementById('upcoming') as HTMLLinkElement;
menuUpcoming.addEventListener('click', async function () {
  const urlParams = new URLSearchParams(window.location.search);

  urlParams.set('mode', 'upcoming');
  urlParams.set('page', '1');
  removeMoviesFromLocalStorage();

  window.location.search = urlParams.toString();
  (window.location.search);
});

const menuTop = document.getElementById('top') as HTMLLinkElement;
menuTop.addEventListener('click', async function () {
  const urlParams = new URLSearchParams(window.location.search);

  urlParams.set('mode', 'top');
  urlParams.set('page', '1');
  removeMoviesFromLocalStorage();

  window.location.search = urlParams.toString();
  
});

const byName = document.getElementById('button') as HTMLButtonElement;
byName.addEventListener('click', async function () {
  const input = document.getElementById('input') as HTMLInputElement;
const inputValue = input.value

  
});


async function displayMovies(movies: IMovie[]) {
try {

const content = document.getElementById('content') as HTMLDivElement;

const contentMovieList = document.createElement('ul') as HTMLElement;
contentMovieList.setAttribute('class', 'movie_list')
content.appendChild(contentMovieList)

movies.map((el) => {

const movieListElement = document.createElement('li') as HTMLLIElement;

const movieImg = document.createElement('img') as HTMLImageElement;
movieImg.setAttribute('class', 'movie_img')
movieImg.src =IMG_HOST + el.poster_path;

movieListElement.appendChild(movieImg);

const movieTitle = createParagraph(el.title, 'movie_title');
const movieOverview = createParagraph(el.overview, 'movie_overview');
const movieRelease = createRealiseDate(el.release_date, 'movie_release');
const movieVoteAverage = createParagraph(el.vote_average, 'movie_voteAvarage')


movieListElement.appendChild(movieTitle);
movieListElement.appendChild(movieOverview);
movieListElement.appendChild(movieRelease);
movieListElement.appendChild(movieVoteAverage);



contentMovieList.appendChild(movieListElement);

// favorite button ----------------------------------------------------

const favButton = document.createElement('button') as HTMLButtonElement;
favButton.setAttribute('class', 'fav_btn')
movieListElement.appendChild(favButton);

let toggleFavorite = isFavorite(el.id);

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
  removeMovieIdFromLocalStorage(movieId )
}

function isFavorite(id: string): boolean {
  const favorites : string[] = JSON.parse(localStorage.getItem('favMovieIds') ?? '[]');
  if (favorites.includes(id)) {
    return true;
  } else {
    return false;
  }
}
function addToFav() {
  const movieId: string = el.id ?? '';
  saveMovieIdToLocalStorage(movieId )
}
})
} catch (error) {
(error)
}
}

// load more
const loadMoreButton = document.getElementById('loadmore') as HTMLButtonElement;
loadMoreButton.setAttribute('class', 'load_more_btn')
loadMoreButton.addEventListener('click', loadMore)
async function loadMore() {
  const urlParams = new URLSearchParams(window.location.search);
  let page: number = Number(urlParams.get('page'));
  if (page === 0) {
    page = 1;
  }
  (page+1)
  urlParams.set('page', (page+1).toString());
  saveMoviesToLocalStorage(movies);
  window.location.search = urlParams.toString();
}


async function main() : Promise<void> {
  const urlParams = new URLSearchParams(window.location.search);
  
  let page: number = Number(urlParams.get('page'));
  if (page === 0) {
    page = 1;
  }
  movies = JSON.parse(localStorage.getItem('movies') || '[]');
  let mode: string = urlParams.get('mode') ?? 'popular';
  switch (mode) {
    case 'popular':
      movies.push(...await fetchData<IMovie>('/popular', page));
      break;
      case 'top':
        movies.push(...await fetchData<IMovie>('/top_rated', page));
        break;
        case 'upcoming':
          movies.push(...await fetchData<IMovie>('/upcoming', page));
          break;

       

            
  
            
  }
displayMovies(movies);
}

main();
