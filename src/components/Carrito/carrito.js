import React, {useEffect,useState} from 'react';
import { useCartContext } from '../../CartContext';
import { CartItem } from './CartItem';
import { API_PORTAL_URL } from '../../constants';
import axios from 'axios';
import Swal from 'sweetalert2'
export const Carrito = () =>{
  const {cart,totalPrice,totalIva} = useCartContext();
  const [items, setItems] = useState([]);

  useEffect(() => {
   
    const items = JSON.parse(localStorage.getItem('user'));
    if (items) {
        
     setItems(items);
    }
  }, []);

  console.log(items)
  const Comprar = ()=>{
    const compra = {
    id_usuario:items.user.id,
    subtotal: totalPrice()-totalIva(),
    iva : totalIva(),
    total:totalPrice()
}   
    const cart2send = [];
  
    cart.map(product =>{
        var id_producto
        var cantidad
        const atrs = {id_producto, cantidad}
        atrs.id_producto =product.id
        atrs.cantidad = product.cantidad
        cart2send.push(atrs)
    })
    console.log(cart2send)
    cart2send.unshift(compra)
    console.log(cart2send)
    console.log("ALGO")

    axios.post(API_PORTAL_URL + 'comprar',cart2send
   
    ).then((response) => {
        Swal.fire(
            'Compra realizada',
             "Su compra fue realizada satisfactoriamente",
            'success'
          ).then((result) => {
            
            if (result.isConfirmed) {
                window.location.href = window.location.href;
            }
          })
});
  }
  if(cart.length ===0){
    return(<div className='border border-dark rounded '><p className='mx-2 row '>Carrito vacío</p></div>)
  }

    return(<div className='border border-dark rounded'>
    {cart.map(product => <CartItem key={product.id} product={product}/>)}
    <hr></hr>
    <div className='mx-3 my-2'>
    <p><b>Iva:</b> ${totalIva()}</p>
    <p><b>Subtotal:</b> ${totalPrice()-totalIva()}</p>
    <p><b>Total:</b> ${totalPrice()}</p>
    </div>
    <hr>
    </hr>
    <div className=' text-center'>
        <button className='btn-primary btn mt-2 pt-2' onClick={()=>Comprar()}>Comprar Carrito</button>
    </div>
    <br></br>
    
        </div>)
    
}

