export const GET_MOVIES_ID = 'GET_MOVIES_ID';
export const PUT_MOVIE = 'PUT_MOVIE';
export const GET_MOVIE = 'GET_MOVIE';
export const PUT_SIMILAR_MOVIE = 'PUT_SIMILAR_MOVIE';
export const PUT_TRAILER = 'PUT_TRAILER';
export const DELETE_TRAILER = 'DELETE_TRAILER';

const requestOptions = {
  method: 'GET',
  redirect: 'follow'
};

// const key = 'k_8zvk1y4n/';
// const key = 'k_xrjol9cl';

export const fetchMoviesId = (title) => (dispatch) => {
  const url = 'https://imdb-api.com/en/API/SearchMovie/k_xrjol9cl/';

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
  const url = 'https://imdb-api.com/en/API/Title/k_xrjol9cl/';
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

export const putMovie = (movie) => ({
  type: PUT_MOVIE,
  payload: movie
});

export const putSimilarMovie = (id) => ({
  type: PUT_SIMILAR_MOVIE,
  payload: id
});

export const fetchTrailer = (id) => (dispatch) => {
  const url = 'https://imdb-api.com/en/API/YouTubeTrailer/k_xrjol9cl/';

  fetch(`${url}${id}`, requestOptions)
    .then(response => response.json())
    .then(data => dispatch(putTrailer(data)))
    .catch(error => console.erroe('Error', error))
};

export const putTrailer = (trailer) => ({
  type: PUT_TRAILER,
  payload: trailer
});

export const deleteTrailer = () => ({
  type: DELETE_TRAILER
});
