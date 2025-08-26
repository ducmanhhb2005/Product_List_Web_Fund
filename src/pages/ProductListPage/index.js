import React, { useEffect } from 'react'
import ProductCard from '../../components/ProductCard';
import Pagination from '../../components/Pagination';
import {useState} from 'react'
import './index.css'
const ProductListPage = () => {
    const limit = 10;
    const [products, setProducts] = useState([])
    const [pageActive, setPageActive] = useState(0)
    const [quantityPage, setQuantityPage] = useState(0)
    useEffect(()=>{
        fetch(`https://dummyjson.com/products?limit=${limit}&skip=${limit*pageActive}`)
        .then(res => res.json())
        .then(data =>{
            setProducts(data.products)
            setQuantityPage(Math.ceil(data.total / limit))
    })},[pageActive])

    const handlePageChange = (newPage)=>{
        setPageActive(newPage)
    }
  return (
    <>
    <div className='product_list'>
        {products.map(item=>(
            <ProductCard key={item.id} product={item}/>
        ))

        }
    </div>
    <Pagination quantityPage={quantityPage} onPageChange={handlePageChange}/>
    </>
  )
}

export default ProductListPage