import React, { PropTypes } from 'react';

const CatalogItem = (props) => {

  const handleAddToCart = (e) => props.onAddToCart(props.product);
  
  return (
    <div className="product row">
      <div className="product-summary col three-fourths">
        <h2 className="product-title">{ props.product.name }</h2>
        <div className="product-details">
          <div className="product-image col one-fourth">
            <img src="http://placehold.it/64x64" height="64" width="64" />
          </div>
          <div className="product-summary col three-fourths">
            <p>{ props.product.description }</p>
          </div>
        </div>
      </div>
      <div className="product-add-to-cart col one-fourth">
        <div className="product-price">{ props.product.price } €</div>
        <div className="add-to-cart">
          <a className="button" onClick={ handleAddToCart }>Añadir al carrito</a>
        </div>
      </div>
    </div>
  );
};

CatalogItem.propTypes = {
  product: PropTypes.object,
  onAddToCart: PropTypes.func
};

export default CatalogItem;