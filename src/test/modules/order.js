import reducer, { saveOrder } from '../../modules/order';
import { SAVE_ERRORS, CLEAR_ERRORS } from '../../modules/order/actionTypes';
import { EMPTY_CART } from '../../modules/cart/actionTypes';
import assert from 'assert';
import { spy } from 'sinon';
import history from '../../lib/history';

describe('Module Order', () => {
  
  describe('Actions', () => {
    const dispatch = spy(),
          listenSpy = spy();

    const invalidDetails = {
      firstName:''
    };

    const validDetails = {
      firstName: 'x',
      lastName: 'y',
      email: 'z',
      address: 'foo'
    };

    history.listen(listenSpy);

    beforeEach(() => {
      dispatch.reset();
      listenSpy.reset();
    });

    it('saveOrder despacha SAVE_ERRORS si la validación falla', () => {
      const thunk = saveOrder(invalidDetails);
      thunk(dispatch);

      assert.equal(dispatch.callCount, 1);
      assert.equal(dispatch.firstCall.args[0].type, 'SAVE_ERRORS');
    });

    it('saveOrder despacha CLEAR_ERRORS, EMPTY_CART y navega a /thankyou si validación OK', () => {
      const thunk = saveOrder(validDetails);
      thunk(dispatch);

      assert.equal(dispatch.callCount, 2);
      const clearErrorsAction = dispatch.firstCall.args[0];
      const emptyCartAction = dispatch.secondCall.args[0];
      assert.equal(clearErrorsAction.type, CLEAR_ERRORS);
      assert.equal(emptyCartAction.type, EMPTY_CART);

      const newLocation = listenSpy.firstCall.args[0];
      assert.equal(newLocation.pathname, '/thankyou');
      assert.equal(newLocation.action, 'REPLACE');
    });
  });
});