import React from 'react';
import './styles.css';

function Product(props) {
  console.log(props.item);

  return (
    <div className='product'>
      <img src={props.item.image} alt="product" className="product-image" />
      <div className="product-name">{props.item.name}</div>
    </div>
  );
}

export default Product;