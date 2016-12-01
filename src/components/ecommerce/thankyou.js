import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';

const Thankyou = ({ orderDetails }) => (
    <div className="thank-you">
      <div className="shop-header">
        <h2>¡Gracias por tu compra { orderDetails.firstName }!</h2>
      </div>
      <p>Te llegará en breve a tu dirección { orderDetails.address }</p>
      <p>
        <Link to="/" className="button">
          Volver a la tienda
        </Link>
      </p>
    </div>
);

Thankyou.propTypes = {
  orderDetails: PropTypes.shape({
    firstName: PropTypes.string.isRequired,
    address: PropTypes.string.isRequired,
  }).isRequired
};

const mapStateToProps = state => ({
  orderDetails: state.order.details
});

export default connect(mapStateToProps)(Thankyou);