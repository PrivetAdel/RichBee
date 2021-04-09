export const GET_MOVIES_ID = 'GET_MOVIES_ID';

const requestOptions = {
  method: 'GET',
  redirect: 'follow'
};

const url = 'https://imdb-api.com/en/API/SearchMovie/k_xrjol9cl/';
// const key = 'k_8zvk1y4n/';
// const key = 'k_xrjol9cl';

export const fetchMoviesId = (title) => (dispatch) => {
  fetch(`${url}${title}`, requestOptions)
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
