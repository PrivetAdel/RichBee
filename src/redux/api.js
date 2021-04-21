import axios from 'axios';
import {API_MOVIE_ID, API_MOVIE_INFO, API_TRAILER, FETCH_ERROR} from './constants';

export const fetchData = async (title) => {
  return await axios.get(`${API_MOVIE_ID}${title}`)
};

export const fetchMovie = async (id) => {
  const options = '/Ratings';

  return await axios.get(`${API_MOVIE_INFO}${id}${options}`)
};

export const fetchTrailer = async (id) => {
  return await axios.get(`${API_TRAILER}${id}`)
};
