import React, { useContext } from 'react';
import NavBar from '../navbar/NavBar';
import NavCol from '../NavCol/NavCol';
import useGetProductos from '../../hooks/useGetProductos';
import Spinner from '../Spinner/Spinner';
import images from '../../contants/images';
import { Link } from 'react-router-dom';
import ProductoContext from '../../context/Producto/ProductoContext';
import Carrito from '../Carrito/Carrito';

import './Inicio.css'
import toast from 'react-hot-toast';
 
const Inicio = () => {
  const {setProducto} = useContext(ProductoContext)
  const [productosData, isLoading] = useGetProductos()
 
  if(isLoading) {
    return <Spinner />
  }

 return (
  <>
    <NavBar/>
    <div className='container-content'>
      <NavCol />
      <div className='Inicio__products'>
        {
          productosData.map(producto => (
            <div className='Inicio__product-container'>
              <img
                className='Inicio__product-star'
                src={images.estrella}
              />
              <img
                src='https://media.istockphoto.com/photos/3d-rendering-of-antibiotic-pills-in-blister-pack-picture-id635948926?k=20&m=635948926&s=612x612&w=0&h=p0hina6VoA3hfQPedGzMsJkJYHzbnU2EHQpODVP3MN0='
                className='Inicio__product-img'
              />
              <p className='Inicio__product-name'>
                {producto.nombre}
              </p>
              <p>${producto.precio}</p>
              <Link
                to={'/producto_carrito/' + producto.id}
                style={{width: '-webkit-fill-available', height: 54}}
                className='button-primary'
                >
                Ver mas
              </Link>
              <button
                onClick={() => (
                  setProducto({producto, cantidadAdd: 1}), 
                  toast.success('El producto se ha agregando')
                )}
                style={{width: '-webkit-fill-available', height: 54}}
                className='button-primary'
              >
                <img 
                  src={images.agregar2}
                  className='Inicio__producto-add-icon'
                />
                Agregar
              </button>
            </div>
          ))
        }
      </div>
      <Carrito />
    </div>
  </>
  );
}
 
export default Inicio;