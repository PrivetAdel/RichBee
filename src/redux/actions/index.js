export const GET_MOVIES_ID = 'GET_MOVIES_ID';
export const SET_MOVIE = 'SET_MOVIE';
export const GET_MOVIE = 'GET_MOVIE';
export const SET_SIMILAR_MOVIE = 'SET_SIMILAR_MOVIE';
export const SET_TRAILER = 'SET_TRAILER';
export const DELETE_TRAILER = 'DELETE_TRAILER';

const requestOptions = {
  method: 'GET',
  redirect: 'follow'
};

// const key = 'k_8zvk1y4n';
// const key = 'k_xrjol9cl';

export const fetchMoviesId = (title) => (dispatch) => {
  const url = 'https://imdb-api.com/en/API/SearchMovie/k_8zvk1y4n/';

  fetch(`${url}${title}`, requestOptions)
    .then(response => response.json())
    .then(data => data.results.map(result => {
      let moviesId = [];
      moviesId.push(result.id);
      return moviesId;
    }))
    .then(moviesId => dispatch(getMoviesId(moviesId.flat())))
    .catch(error => console.error('Error', error));
};

export const getMoviesId = (moviesId) => ({
  type: GET_MOVIES_ID,
  payload: moviesId
});

export const fetchMovie = (id) => (dispatch) => {
  const url = 'https://imdb-api.com/en/API/Title/k_8zvk1y4n/';
  const options = '/Ratings';

  fetch(`${url}${id}${options}`, requestOptions)
    .then(response => response.json())
    .then(data => dispatch(getMovie(data)))
    .catch(error => console.erroe('Error', error))
};

export const getMovie = (movie) => ({
  type: GET_MOVIE,
  payload: movie
});

export const setMovie = (movie) => ({
  type: SET_MOVIE,
  payload: movie
});

export const setSimilarMovie = (id) => ({
  type: SET_SIMILAR_MOVIE,
  payload: id
});

export const fetchTrailer = (id) => (dispatch) => {
  const url = 'https://imdb-api.com/en/API/YouTubeTrailer/k_8zvk1y4n/';

  fetch(`${url}${id}`, requestOptions)
    .then(response => response.json())
    .then(data => dispatch(setTrailer(data)))
    .catch(error => console.erroe('Error', error))
};

export const setTrailer = (trailer) => ({
  type: SET_TRAILER,
  payload: trailer
});

export const deleteTrailer = () => ({
  type: DELETE_TRAILER
});
