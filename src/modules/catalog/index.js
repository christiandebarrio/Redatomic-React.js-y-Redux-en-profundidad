import { 
  FETCH_PRODUCTS_ATTEMP, FETCH_PRODUCTS_SUCCESS, FETCH_PRODUCTS_FAIL 
} from './actionTypes';
import { combineReducers } from 'redux';
export * from './actions';

function isFetching(state=false, action){
  switch (action.type) {
    case FETCH_PRODUCTS_ATTEMP:
      return true;
    case FETCH_PRODUCTS_FAIL:
    case FETCH_PRODUCTS_SUCCESS:
      return false;
    default:
      return state;
  }
}

function errors(state={}, action){
  switch (action.type) {
    case FETCH_PRODUCTS_FAIL:
      return action.error;
    case FETCH_PRODUCTS_SUCCESS:
    case FETCH_PRODUCTS_ATTEMP:
      return {};
    default:
      return state;
  }
}

function productsIds(state=[], action){
  switch (action.type) {
    case FETCH_PRODUCTS_SUCCESS:
      return action.payload.result;
    default:
      return state;
  }
}

function byId(state={}, action){
  switch (action.type) {
    case FETCH_PRODUCTS_SUCCESS:
      return Object.assign({}, state, action.payload.entities.products);
    default:
      return state;
  }
}

export default combineReducers({
  isFetching,
  errors,
  productsIds,
  byId
});