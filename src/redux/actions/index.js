import {SET_DATA, SET_MOVIE, SET_SIMILAR_MOVIE, SET_TRAILER, DELETE_TRAILER, CLEAN_MOVIES_ID, FETCH_ERROR} from '../constants';

export const setData = (data) => ({
  type: SET_DATA,
  payload: data
});

export const cleanMoviesId = () => ({
  type: CLEAN_MOVIES_ID
});

export const setMovie = (movie) => ({
  type: SET_MOVIE,
  payload: movie
});

export const setSimilarMovie = (id) => ({
  type: SET_SIMILAR_MOVIE,
  payload: id
});

export const setTrailer = (trailer) => ({
  type: SET_TRAILER,
  payload: trailer
});

export const deleteTrailer = () => ({
  type: DELETE_TRAILER
});

export const fetchError = ({error, errorMessage}) => ({
  type: FETCH_ERROR,
  payload: {error, errorMessage}
});
