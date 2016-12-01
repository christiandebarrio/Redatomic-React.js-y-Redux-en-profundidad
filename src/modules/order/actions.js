import { SAVE_DETAILS, SAVE_ERRORS, CLEAR_ERRORS } from './actionTypes';
import { emptyCart } from '../cart';
import history from '../../lib/history';

function validate(details){
  const { firstName, lastName, email, address } = details;
  let errors = {};

  if(!firstName){
    errors.firstName = "Debe introducir el nombre";
  }
  if(!lastName){
    errors.lastName = "Debe introducir el apellido";
  }
  if(!email){
    errors.email = "Debe introducir el email";
  }
  if(!address){
    errors.address = "Debe introducir la dirección de envío";
  }

  return errors;
}

export function saveDetails(patch){
  return {
    type: SAVE_DETAILS,
    payload: patch
  };
}

export function saveOrder(details){
  return (dispatch, getState) => {
    const errors = validate(details);

    if(Object.keys(errors).length > 0){
      // error
      dispatch({
        type: SAVE_ERRORS,
        errors
      });
    }
    else {
      // correct
      dispatch({
        type: CLEAR_ERRORS,
      });
      dispatch(emptyCart());
      history.replace('/thankyou');
    }
  };
}