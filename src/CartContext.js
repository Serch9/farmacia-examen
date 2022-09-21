import React, { useContext, useState } from "react";
import Swal from 'sweetalert2'
export const CartContex = React.createContext("");
export const useCartContext = () => useContext(CartContex);
const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const clearCart = () => setCart([]);
  const isInCart = (id) =>
    cart.find((product) => product.id === id) ? true : false;
  const removeProduct = (id) =>
    setCart(cart.filter((product) => product.id !== id));
  // const addItemToCart = (product) => {
  //     const inCart = cart.find(
  //       (productInCart) => productInCart.id === product.id
  //     );
  //     if (inCart) {
  //       setCart(
  //         cart.map((productInCart) => {
  //           if (productInCart.id === product.id)
  //             return { ...inCart, amount: inCart.amount + 1 };
  //           else return productInCart;
  //         })
  //       );
  //     } else {
  //         setCart([...cart, { ...product, amount: 1 }]);
  //     }
  //   };
  const addProducto = (item, cantidad) => {
    const newCart = cart.filter((prod) => prod.id !== item.id);
    newCart.push({ ...item, "cantidad": cantidad });
    if(item.existencia< cantidad){
        Swal.fire(
            'Atención',
            'No hay stock suficiente',
            'error'
          )
        return false;
    }
    if(cantidad === 0){
        Swal.fire(
            'Atención',
            'Elige una cantidad válida',
            'error'
          )
        return false;
    }
    setCart(newCart);
  };
  const totalPrice = () =>{
    
    return cart.reduce((prev,act)=> prev+act.cantidad *act.precio,0)
  }

  const totalIva = () =>{
    
    return cart.reduce((prev,act)=> prev+act.cantidad *act.precio*0.16,0)
  }

  const totalProducts = ()=>cart.reduce((acumulador,productoActual)=>acumulador + productoActual.cantidad,0)

  console.log('carrito',cart)

  return (
    <CartContex.Provider
      value={{
        clearCart,
        isInCart,
        removeProduct,
        addProducto,
        totalPrice,
        totalProducts,
        totalIva,
        cart
        
      }}
    >
      {children}
    </CartContex.Provider>
  );
};
export default CartProvider;
