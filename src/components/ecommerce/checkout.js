import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import { saveDetails, saveOrder } from '../../modules/order';

import Header from './header';
import CheckoutFormItem from './checkout_form_item';

class Checkout extends Component {
  constructor(props){
    super(props);

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleFieldChange = this.handleFieldChange.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.saveOrder(this.props.details);
  }

  handleFieldChange(e){
    this.props.saveDetails({
      [e.target.name]: e.target.value
    });
  }

  render(){
    const { errors, details } = this.props;

    return(
      <div className="checkout">
        <Header text="Finalizar compra" />
        <div className="checkout-form">
          <CheckoutFormItem label="Nombre" error={ errors.firstName }>
            <input 
              type="text"
              name="firstName"
              className={ errors.firstName ? 'error' : '' }
              value={ details.firstName }
              onChange={ this.handleFieldChange } />
          </CheckoutFormItem>
          <CheckoutFormItem label="Apellidos" error={ errors.lastName }>
            <input 
              type="text"
              name="lastName"
              className={ errors.lastName ? 'error' : '' }
              value={ details.lastName }
              onChange={ this.handleFieldChange } />
          </CheckoutFormItem>
          <CheckoutFormItem label="Email" error={ errors.email }>
            <input 
              type="text"
              name="email"
              className={ errors.email ? 'error' : '' }
              value={ details.email }
              onChange={ this.handleFieldChange } />
          </CheckoutFormItem>
          <CheckoutFormItem label="Dirección" error={ errors.address }>
            <textarea
              name="address"
              className={ errors.address ? 'error big' : 'big' }
              value={ details.address }
              onChange={ this.handleFieldChange } />
          </CheckoutFormItem>
          <div className="row">
            <div className="col one-whole">
              <Link to="/cart" className="button">&lt;Vovler al Carrito</Link>
              <button className="button" onClick={ this.handleSubmit }>Finalizar</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Checkout.propTypes = {
  details: PropTypes.shape({
    firstName: PropTypes.string.isRequired,
    lastName: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    address: PropTypes.string.isRequired,
  }).isRequired,
  errors: PropTypes.object.isRequired,
  saveDetails: PropTypes.func.isRequired,
  saveOrder: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  details: state.order.details,
  errors: state.order.errors
});

const mapDispatchToProps = {
  saveDetails,
  saveOrder
};

export default connect(mapStateToProps, mapDispatchToProps)(Checkout);