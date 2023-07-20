import IMovie from "./imovie";
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


async function getPopularMovie<T>(): Promise<T[]> {
  const input = (document.getElementById('input') as HTMLInputElement).value;
  (input)
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization:
        'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlOGU3NDE4ZDBjOTAyYTc4YWNhYWJhYzQ2ZWNjOTc5ZSIsInN1YiI6IjYzOTRhOTlhNmU5MzhhMDA5ZjVhN2NlOSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.xbOkRnX5HrLukZ6ne0DioRGL4R29m-kldLHsTfpqZ_g',
    },
  };

const response = await fetch( `https://api.themoviedb.org/3/search/movie?query=${input}`,
options);

if (!response.ok) {
  throw new Error(`HTTP error! Status: ${response.status}`);
}

const data = await response.json();
(data.results)
return data.results as T[];
}

const button = document.getElementById('button') as HTMLButtonElement;
button.addEventListener("click", getMovie);

async function getMovie() {
try {
const movie: IMovie[] = await getPopularMovie<IMovie>();


const content = document.getElementById('content') as HTMLDivElement;

const contentMovieList = document.createElement('ul') as HTMLElement;
content.appendChild(contentMovieList)

movie.map((el) => {

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

})
} catch (error) {
(error)
}
}


export {getPopularMovie, getMovie}