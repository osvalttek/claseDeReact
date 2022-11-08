import React from 'react'
import { Link } from 'react-router-dom'

const Products = ({product}) => {
  return (
    <div>
        <Link to={`/product/${product.id}`}>
        <h2>{product.title}</h2>
        <img src={product.images[0]} alt="" />
        </Link>
    </div>
  )
}

export default Products