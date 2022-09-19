import React from 'react'
import { Link } from 'react-router-dom'
import images from '../../contants/images'
import './NavCol.css'

const NavCol = () => {
  return (
    <div className='NavCol__container'>
      <Link
        to='/inicio'
        className='Inicio__button-navigate'
      >
        <img src={images.carrito}/>
        Comprar
      </Link>
      <Link
        to='/inventario'
        className='Inicio__button-navigate'
      >
        <img src={images.producto}/>
        Inventario
      </Link>
    </div>
  )
}

export default NavCol