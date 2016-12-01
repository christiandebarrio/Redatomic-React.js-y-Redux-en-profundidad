import React, { Component, PropTypes } from 'react';

class CheckoutFormItem extends Component {
  render(){
    const { label, error, children } = this.props;

    return(
      <div className="row">
        <div className="col one-third">
          <label>{ label }</label>
        </div>
        <div className="col two-thirds">
          { children }
          <span className="error-text">{ error }</span>
        </div>
      </div>
    );
  }
}

CheckoutFormItem.propTypes = {
  label: PropTypes.string.isRequired,
  error: PropTypes.string
};

export default CheckoutFormItem;