import React from 'react'
import './index.css'
const Pagination = ({quantityPage, onPageChange}) => {
  return (
    <ul className='pagination'>
        {[...Array(quantityPage)].map((_,index) => (
           <li onClick = {() => {onPageChange(index)}}>{index+1}</li>
        ))}

    </ul>
  )
}

export default Pagination