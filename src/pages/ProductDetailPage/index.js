import React from 'react'
import {useState, useEffect} from 'react'
import {useParams} from 'react-router-dom'
const ProductDetailPage = () => {
    const {productID} = useParams()
    const [product, setProduct] = useState(null)

    useEffect(()=>{
        fetch(`https://dummyjson.com/products/${productID}`)
        .then(res => res.json())
        .then(data => {
            setProduct(data);
        });
    },[productID])

     if (!product) {
        return <div>Loading...</div>;
    }
  return (
    <div>
        <h1>{product.title}</h1>
        <img src={product.thumbnail} alt = {product.title}/>
        <p>{product.description}</p>
        <h2>Price:${product.price}</h2>
    </div>
  )
}

export default ProductDetailPage