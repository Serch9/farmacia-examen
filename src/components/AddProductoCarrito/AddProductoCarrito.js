import {useState, useContext} from 'react'
import NavBar from '../navbar/NavBar'
import NavCol from '../NavCol/NavCol'
import Carrito from '../Carrito/Carrito'
import useGetProducto from '../../hooks/useGetProducto'
import { useParams } from 'react-router-dom'
import Spinner from '../Spinner/Spinner'
import images from '../../contants/images'
import ProductoContext from '../../context/Producto/ProductoContext'
import { useHistory } from 'react-router-dom'

import './AddProductoCarrito.css'
import toast from 'react-hot-toast'

const AddProductoCarrito = () => {
  const {producto_id: PRODUCTO_ID} = useParams()
  const [producto, isLoading] = useGetProducto(PRODUCTO_ID)
  const {setProducto} = useContext(ProductoContext)
  const navigate = useHistory()

  const [inputValue, setInputValue] = useState(0)

  const handleInputChange = (e) => {
    const {target: { value }} = e;
    if(value < 0) {
      setInputValue(parseInt(0))
    } else {
      setInputValue(parseInt(value))
    }
  }

  const handleChangeStateValue = (action) => {
    if(action === 'add') {
      setInputValue(value => value + 1)
    } else {
      setInputValue(value => {
        if(value - 1 < 0) {
          return 0
        }
        return value - 1
      })
    }
  }
  
  const handleSubmit = (producto, cantidad) => {
    setProducto({cantidadAdd: cantidad, producto})
    navigate.goBack()
    toast.success('Producto se ha agregado')
  }

  return (
    <>
      <NavBar />
      <div className='container-content'>
        <NavCol />
        {
          !isLoading ?
          <div className='AddProductoCarrito__details-producto'>
            <img
              className='AddProductoCarrito__image'
              src='https://media.istockphoto.com/photos/3d-rendering-of-antibiotic-pills-in-blister-pack-picture-id635948926?k=20&m=635948926&s=612x612&w=0&h=p0hina6VoA3hfQPedGzMsJkJYHzbnU2EHQpODVP3MN0='
            />
            <div className='AddProductoCarrito__details-info'>
              <h3
                className='AddProductoCarrito__title'
              >
                {producto.nombre}
              </h3>
              <p className='AddProductoCarrito__subtitle'>
                {producto.categoria}
              </p>
              <p className='AddProductoCarrito__relevant-text'>
                {producto.sustancia_activa}
              </p>
              <p>
                {producto.descripcion}
              </p>
              <p>
                ${producto.precio}
              </p>
              <div className='AddProductoCarrito__inputs'>
                <button
                  onClick={() => handleChangeStateValue('rest')}
                  className='AddProductoCarrito__button'
                  >
                  <img
                    src={images.restar}
                    />
                </button>
                <input
                  value={inputValue}
                  onChange={handleInputChange}
                  className='AddProductoCarrito__button-input'
                />
                <button
                  onClick={() => handleChangeStateValue('add')}
                  className='AddProductoCarrito__button'
                >
                  <img
                    src={images.agregar2}
                  />
                </button>
              </div>
              <button
                onClick={() => handleSubmit(producto, inputValue)}
                style={{width: '-webkit-fill-available'}}
                className='button-primary'
              >
                Agregar
              </button>
            </div>
          </div>
          : <Spinner />
        }
        <Carrito />
      </div>
    </>
  )
}

export default AddProductoCarrito