import React from 'react'
import './index.css'
import {Link} from 'react-router-dom'
const ProductCard = ({product}) => {
  return (
    <Link to ={`/product/${product.id}`} className='product_item' key={product.id}>
        <div className='product_image'>
            <img src={product.thumbnail} alt={product.title}/>
        </div>
        <h3 className='product_title'>
            {product.title}
        </h3>
        <div className='product_price'>
            {product.price}$
        </div>

    </Link>
  );
};

export default ProductCard