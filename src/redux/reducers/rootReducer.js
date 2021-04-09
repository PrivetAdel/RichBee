import {GET_MOVIES_ID, GET_MOVIES} from '../actions';

const initialState = {
  moviesId: [],
  movies: []
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_MOVIES_ID:
      return {
        ...state,
        moviesId: action.payload
      };

    case GET_MOVIES:
      return {
        ...state,
        movies: action.payload
      };
      
    default: 
      return state
  };
};

export default rootReducer;
