import {GET_MOVIES_ID} from '../actions';

const initialState = {
  moviesId: []
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_MOVIES_ID:
      return {
        ...state,
        moviesId: action.payload
      };
      
    default: 
      return state
  };
};

export default rootReducer;
