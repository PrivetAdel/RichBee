import {SET_DATA, SET_MOVIE, SET_SIMILAR_MOVIE, SET_TRAILER, DELETE_TRAILER, CLEAN_MOVIES_ID} from '../constants';

const initialState = {
  moviesId: [],
  movies: {},
  trailer: '',
  errorMessage: '',
  error: false
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_DATA:
      return {
        ...state,
        moviesId: action.payload.results ? 
        (action.payload.results.map((item) => item.id)) 
        : [],
        errorMessage: action.payload.errorMessage
      };
    
    case CLEAN_MOVIES_ID: 
      return {
        ...state,
        moviesId: [],
        movies: {}
      }

    case SET_MOVIE: 
      const newMovie = {
        ...state.movies,
        [action.payload.id]: action.payload
      }
      return {
        ...state,
        movies: newMovie
      };

    case SET_SIMILAR_MOVIE:
      const moviesIdWithSimilar = [
        ...state.moviesId,
        action.payload
      ]
      return {
        ...state,
        moviesId: moviesIdWithSimilar
      };

    case SET_TRAILER: 
      return {
        ...state,
        trailer: action.payload
      };

    case DELETE_TRAILER:
      return {
        ...state,
        trailer: ''
      };
      
    default: 
      return state
  };
};

export default rootReducer;
