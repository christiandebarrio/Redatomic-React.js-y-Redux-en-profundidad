import React, { Component, PropTypes } from 'react';

class CartItem extends Component {
  constructor(props){
    super(props);

    this.handleIncQty = this.handleIncQty.bind(this);
    this.handleDecQty = this.handleDecQty.bind(this);
    this.handleRemove = this.handleRemove.bind(this);

  }

  handleIncQty(e){
    e.preventDefault();
    this.props.onChangeQuantity(this.props.product, this.props.product.qty + 1 );
  }

  handleDecQty(e){
    e.preventDefault();
    this.props.onChangeQuantity(this.props.product, this.props.product.qty - 1 );
  }

  handleRemove(e){
    e.preventDefault();
    this.props.onChangeQuantity(this.props.product, 0 );
  }


  render(){
    const { id, name, description, price, qty } = this.props.product;
    const subtotal = (price * qty).toFixed(2);
    return(
      <tr>
        <td className="qty">{ qty }</td>
        <td className="description">
          <h3>{ name }</h3>
           <p>{ description}</p>
        </td>
        <td className="unit-price">{ price } &euro;</td>
        <td className="subtotal">{ subtotal } &euro;</td>
        <td className="actions">
          <a className="button" onClick={ this.handleIncQty }>+ 1</a>
          <a className="button" onClick={ this.handleDecQty }>- 1</a>
          <a className="button" onClick={ this.handleRemove }>Remove</a>
        </td>
      </tr>
    );
  }
}

CartItem.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    qty: PropTypes.number.isRequired
  }).isRequired,
  onChangeQuantity: PropTypes.func
};

export default CartItem;