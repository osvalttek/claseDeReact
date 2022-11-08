import React from 'react'
import Products from './Products'

const ProductsList = ({products}) => {
  return products.map((product,key)=><Products key={key} product={product}/>) 
}

export default ProductsList