import React from 'react';
import { shallowRender } from '../helpers';
import { spy } from 'sinon';
import assert from 'assert';
import { Cart } from '../../components/ecommerce/Cart';

describe('Component Cart', () => {
  const products = [{ id: 1, name: 'test', description: '', price: 10, qty: 1 }];
  const changeQuantity = spy();

  describe('Salida', () => {
    it('Incluye un componente Header con el texto correcto', () => {
      const { tree } = shallowRender(Cart, { products, changeQuantity });
      const headerComp = tree.subTree('Header');

      assert(headerComp, 'Header existe');
      assert.equal(headerComp.props.text, 'Tu compra', 'Header tiene el texto correcto');
    });

    it('Incluye un componente CartItem por cada producto en el carrito', () => {
      const { tree } = shallowRender(Cart, { products, changeQuantity });
      const cartItems = tree.everySubTree('CartItem');

      assert.equal(cartItems.length, products.length);
    });

    it('Muestra el total del carrito', () => {
      const { tree } = shallowRender(Cart, { products, changeQuantity });
      const total = tree.dive(['.cart-contents', 'table', 'tbody', '.summary', '.total']);
      assert.equal(total.textIn(), '10.00');
    });

    it('Incluye un link para volver al catálogo', () => {
      const { tree } = shallowRender(Cart, { products, changeQuantity });
      const linkCatalog = tree.everySubTree('Link')[0];
      assert(linkCatalog, 'Link existe');
    });

    it('Incluye un link para ir al checkout si tiene productos', () => {
      const { tree } = shallowRender(Cart, { products, changeQuantity });
      const linkCheckout = tree.everySubTree('Link')[1];
      assert.equal(linkCheckout.props.to, '/checkout');
      assert(linkCheckout, 'Link existe');
    });

    it('NO Incluye un link para ir al checkout si no hay productos', () => {
      const { tree } = shallowRender(Cart, { products: [], changeQuantity });
      const links = tree.everySubTree('Link');
      assert.equal(1, links.length);
    });
  });

  describe('Comportamiento', () => {
    it('Ejecuta el action creator al cambiar la cantidad', () => {
      const { instance } = shallowRender(Cart, { products, changeQuantity });
      const p = products[0];
      const newQty = 2;
      instance.handleChangeQuantity(p, newQty);

      assert.equal(changeQuantity.calledOnce, true);
      assert.deepEqual(changeQuantity.getCall(0).args[0], p);
      assert.equal(changeQuantity.getCall(0).args[1], newQty);
    });
  });

});