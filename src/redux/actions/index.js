export const GET_MOVIES_ID = 'GET_MOVIES_ID';
export const GET_MOVIES = 'GET_MOVIES';

const requestOptions = {
  method: 'GET',
  redirect: 'follow'
};

const url = 'https://imdb-api.com/en/API/';
const search = 'SearchMovie/';
const getFilm = 'Title/';
const key = 'k_8zvk1y4n/';
const options = '/Ratings';

export const fetchMoviesId = (title) => (dispatch) => {
  fetch(`${url}${search}${key}${title}`, requestOptions)
    .then(response => response.json())
    .then(data => data.results.map(result => {
      let moviesId = [];
      moviesId.push(result.id);
      return moviesId;
    }))
    .then(moviesId => dispatch(getMoviesId(moviesId.flat())))
    .catch(error => console.log('error', error));
};

export const getMoviesId = (moviesId) => ({
  type: GET_MOVIES_ID,
  payload: moviesId
});

export const fetchMovies = (moviesId) => (dispatch) => {
  moviesId.map(movieId => (
    fetch(`${url}${getFilm}${key}${movieId}${options}`, requestOptions)
      .then(response => response.json())
      .then(data => dispatch(getMovies(data)))
      .catch(error => console.log('error', error))
  ))
};

export const getMovies = (movies) => ({
  type: GET_MOVIES,
  payload: movies
});
