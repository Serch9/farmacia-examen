import {useState, useContext} from 'react'
import ProductoContext from '../../context/Producto/ProductoContext'
import './Carrito.css'
import addVenta from '../../services/addVenta';
import toast from 'react-hot-toast';

function redondear(x) {
  return Number.parseFloat(x).toFixed(2);
}

const Carrito = () => {
  const {productos, clearProducts} = useContext(ProductoContext)
  const subtotal = productos.reduce((acum, curr) => acum + curr.precio * curr.cantidad, 0)

  const iva = redondear(subtotal * 0.16)
  const total = redondear(subtotal * 1.16)

  const handleSubmit = async () => {
    const inventarioProductos = productos.map(producto => ({
      id: producto.id,
      cantidad: producto.cantidad
    }))
    await addVenta({
      "id_usuario": 1,
      "subtotal": subtotal,
      "iva": iva,
      "total": total
    },
      inventarioProductos
    )

    clearProducts()
    toast.success('La venta se ha realizado con exito', {duration: 5000})
  }

  return (
    <div className='Carrito__content'>
      <div className='Carrito__products'>
        {productos.map(producto => (
          <div className='Carrito__producto'>
            <p className='Carrito__text'>{producto.cantidad}</p>
            <p className='Carrito__producto-name'>{producto.nombre}</p>
            <p className='Carrito__text' style={{textAlign: 'end'}}>${producto.precio}</p>
          </div>
        ))}
      </div>
      <div className='Carrito__details-prices'>
        <div className='Carrito__prices'>
          <label className='Carrito__producto-name'>Subtotal:</label>
          <p>${subtotal}</p>
        </div>
        <div className='Carrito__prices'>
          <label className='Carrito__producto-name'>IVA:</label>
          <p>${iva}</p>
        </div>
        <div className='Carrito__prices'>
          <label className='Carrito__producto-name'>Total:</label>
          <p>${total}</p>
        </div>
        <button
          onClick={handleSubmit}
          style={{width: '-webkit-fill-available', marginTop: 15}}
          className='button-primary'
        >
          Comprar
        </button>
      </div>
    </div>
  )
}

export default Carrito