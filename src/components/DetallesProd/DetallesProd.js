import React from 'react'
import NavBar from '../navbar/NavBar'
import { useHistory, useParams } from 'react-router-dom'
import useGetProducto from '../../hooks/useGetProducto'
import { Spinner } from 'react-bootstrap'
import './DetallesProd.css'

const DetallesProd = () => {
  const {producto_id: PRODUCTO_ID} = useParams();
  const [producto, isLoading] = useGetProducto(PRODUCTO_ID)
  const history = useHistory()

  if(isLoading) {
    return <Spinner />
  }

  return (
    <>
      <NavBar />
      <div className='container-content DetProd__content'>

        <div className='DetProd__col'>
          <div>
            <label className='DetProd__label'>Nombre del producto*</label>
            <p className='DetProd__text'>{producto?.nombre}</p>
          </div>
          <div>
            <label className='DetProd__label'>Sustancia Activa</label>
            <p className='DetProd__text'>{producto?.sustancia_activa}</p>
          </div>
          <div>
            <label className='DetProd__label'>Precio</label>
            <p className='DetProd__text'>${producto?.precio}</p>
          </div>
          <div>
            <label className='DetProd__label'>Descripción</label>
            <p className='DetProd__text'>{producto?.descripcion}</p>
          </div>
        </div>

        <div className='DetProd__col'>
          <div>
            <label className='DetProd__label'>Categoría</label>
            <p className='DetProd__text'>{producto?.categoria}</p>
          </div>
          <div>
            <label className='DetProd__label'>Stock</label>
            <p className='DetProd__text'>{producto?.existencia}</p>
          </div>
        </div>

        <div className='DetProd__col DetProd__last-col'>
          <div>
            <label className='DetProd__label'>Imagen de producto</label>
            <img
              src='https://medlineplus.gov/images/Medicines.jpg'
            />
          </div>
          <button
            onClick={() => history.goBack()}
            className='button-primary'
          >
            Salir
          </button>
        </div>
        
      </div>
    </>
  )
}

export default DetallesProd