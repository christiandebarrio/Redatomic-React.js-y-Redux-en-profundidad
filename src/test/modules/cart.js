import reducer, { addToCart, changeQuantity, emptyCart } from '../../modules/cart';
import assert from 'assert';

describe('Modulo Cart', () => {
  const product = { id: 1, name: 'test', description: '', price: 1 };

  it('addToCart añade el producto al carrito con cantidad 1 si no estaba', () => {
    const result = reducer([], addToCart(product));
    assert.equal(1, result.length);
    assert.equal(1, result[0].qty);
  });

  it('addToCart aumenta la cantidad si el producto ya estaba en el carrito', () => {
    const resAddToCart = reducer([], addToCart(product));
    const result = reducer(resAddToCart, addToCart(product));
    assert.equal(1, result.length);
    assert.equal(2, result[0].qty);
  });

  it('changeQuantity establece la nueva cantidad correctamente', () => {
    const initialState = [ Object.assign({}, product, { qty: 1 }) ];
    const result = reducer(initialState, changeQuantity(product, 2));
    assert.equal(1, result.length);
    assert.equal(2, result[0].qty);
  });

  it('changeQuantity elimina productos con cantidad 0', () => {
    const initialState = [Object.assign({}, product, { qty: 1 })];
    const result = reducer(initialState, changeQuantity(product, 0));
    assert.equal(0, result.length);
  });

  it('emptyCart vacia el carrito', () => {
    const initialState = [Object.assign({}, product, { qty: 1 })];
    const result = reducer(initialState, emptyCart());
    assert.equal(0, result.length);
  });


});