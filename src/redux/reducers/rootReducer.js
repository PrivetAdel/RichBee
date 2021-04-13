import {GET_MOVIES_ID, GET_MOVIE, PUT_SIMILAR_MOVIE} from '../actions';

const initialState = {
  moviesId: [],
  movies: {}
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_MOVIES_ID:
      return {
        ...state,
        moviesId: action.payload
      };

    case PUT_SIMILAR_MOVIE:
      const moviesIdWithSimilar = [
        ...state.moviesId,
        action.payload
      ]
      return {
        ...state,
        moviesId: moviesIdWithSimilar
      };

    case GET_MOVIE: 
      const newMovie = {
        ...state.movies,
        [action.payload.id]: action.payload
      }
      return {
        ...state,
        movies: newMovie
      };
      
    default: 
      return state
  };
};

export default rootReducer;
