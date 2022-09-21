import React from 'react';
import { useCartContext } from '../../CartContext';

export const CartItem = ({product}) =>{
  const {removeProduct} =useCartContext()
    return(<>
    <div className='row text-center'>
   <p>Nombre: {product.nombre}</p>
   <p>Cantidad: {product.cantidad}</p>
   <p>Precio: ${product.precio}</p>
   <p>Subtotal: ${product.cantidad * product.precio}</p>
   </div>

   <button className=' mx-4 btn btn-danger   btn-sm' onClick={()=>removeProduct(product.id)}>Eliminar</button>
    </>)
}
