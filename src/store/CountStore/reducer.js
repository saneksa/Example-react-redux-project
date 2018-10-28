import { PLUS, MINUS } from './actionTypes';

const initialState = { count: 0 };

const countReducer = (state = initialState, action) => {
  switch (action.type) {
    case PLUS:
      return {
        ...state.count,
        count: action.payload + state.count
      };

    case MINUS:
      return {
        ...state,
        count: state.count - action.payload
      };

    default:
      return state;
  }
};

export default countReducer;
