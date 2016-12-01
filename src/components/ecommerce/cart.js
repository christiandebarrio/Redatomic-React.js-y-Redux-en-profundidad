import React, { Component, PropTypes } from 'react';
import Header from './header';
import CartItem from './cart_item';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import { changeQuantity } from '../../modules/cart';

export class Cart extends Component {
  constructor(props){
    super(props);
    this.handleChangeQuantity = this.handleChangeQuantity.bind(this);
  }

  handleChangeQuantity(product, quantity){
    this.props.changeQuantity(product, quantity);
  }

  render(){

    const cartItems = this.props.products.map(p =>
      <CartItem 
        key={ p.id } 
        product={ p } 
        onChangeQuantity= { this.handleChangeQuantity } />
    );

    const total = this.props.products.reduce((acc, p) => {
      return acc + (p.price * p.qty);
    }, 0).toFixed(2);

    return(
      <div className="cart">
        <Header text="Tu compra" />
        <div className="cart-contents">
          <table cellSpacing="0">
            <thead>
              <tr>
                <th className="qty">Cant</th>
                <th className="description">Producto</th>
                <th className="unit-price">Precio</th>
                <th className="subtotal">Total</th>
                <th className="actions"></th>
              </tr>
            </thead>
            <tbody>
              { cartItems }
              <tr className="summary">
                <td colSpan="4" className="total">
                  { total } &euro;
                </td>
                <td></td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="footer">
          <Link to="/" className="button">Seguir comprando</Link>
          { this.props.products.length ? 
            <Link to="/checkout" className="button">Finalizar compra</Link> : 
            null 
          }
        </div>
      </div>
    );
  }
}

Cart.propTypes = {
  products: PropTypes.arrayOf(PropTypes.object).isRequired,
  changeQuantity: PropTypes.func.isrequired
};

const mapStateToProps = state => ({
  products: state.cart
});

const mapDispatchToProps = {
  changeQuantity
};

export default connect(mapStateToProps, mapDispatchToProps)(Cart);