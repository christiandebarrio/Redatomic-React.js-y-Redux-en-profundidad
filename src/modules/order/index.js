import { combineReducers } from 'redux';
import { SAVE_DETAILS, SAVE_ERRORS, CLEAR_ERRORS } from './actionTypes';
export * from './actions';

function errors(state={}, action){
  switch (action.type) {
    case SAVE_ERRORS:
      return action.errors;
    case CLEAR_ERRORS:
      return {};
    default:
      return state;
  }
}

const initialState = {
  firstName: "",
  lastName: "",
  email: "",
  address: ""
};

function details(state=initialState, action){
  switch (action.type) {
    case SAVE_DETAILS:
      return Object.assign({}, state, action.payload);
    default:
      return state;
  }
}

export default combineReducers({
  errors,
  details
});