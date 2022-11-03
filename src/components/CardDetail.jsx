import React from 'react'

const CardDetail = ({producto}) => {
  return (
    <div>
    <img src={producto.img} alt="" />
    <h3>{producto.nombre}</h3>
    <h3>Precio: {producto.precio} </h3>
    <h2>stock:{producto.stock} </h2>
  </div>
  )
}

export default CardDetail