import { 
  FETCH_PRODUCTS_ATTEMP, FETCH_PRODUCTS_SUCCESS, FETCH_PRODUCTS_FAIL 
} from './actionTypes';
import { get } from '../../lib/api';
import { Schema, arrayOf, normalize } from 'normalizr';

const productSchema = new Schema('products');

export function fetchProducts(){
  return (dispatch) => {
    dispatch({
      type: FETCH_PRODUCTS_ATTEMP
    });

    get('/api/products.json')
    .then(response => {
      const normalized = normalize(response, arrayOf(productSchema));
      dispatch({
        type: FETCH_PRODUCTS_SUCCESS,
        payload: normalized
      });
    })
    .catch(err => {
      dispatch({
        type: FETCH_PRODUCTS_FAIL,
        error: err
      });
    });
  };
}