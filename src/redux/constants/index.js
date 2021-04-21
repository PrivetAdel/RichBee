// actions
export const SET_DATA = 'SET_DATA';
export const CLEAN_MOVIES_ID = 'CLEAN_MOVIES_ID';
export const SET_MOVIE = 'SET_MOVIE';
export const SET_SIMILAR_MOVIE = 'SET_SIMILAR_MOVIE';
export const SET_TRAILER = 'SET_TRAILER';
export const DELETE_TRAILER = 'DELETE_TRAILER';
export const FETCH_ERROR = 'FETCH_ERROR';

// api
// const KEY = 'k_xrjol9cl/';
const KEY = 'k_8zvk1y4n/';
const IMDB_ROOT = 'https://imdb-api.com/en/API/';
const SEARCH_MOVIE = 'SearchMovie/';
const TITLE = 'Title/';
const TRAILER = 'YouTubeTrailer/';

export const API_MOVIE_ID = IMDB_ROOT+SEARCH_MOVIE+KEY;
export const API_MOVIE_INFO = IMDB_ROOT+TITLE+KEY;
export const API_TRAILER = IMDB_ROOT+TRAILER+KEY;
