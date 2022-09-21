import { createContext, useEffect, useState } from "react";
export const CartContex = createContext();

export const CartProvider = ({ children }) => {
  const [cartItem, setCartItems] = useState(() => {
    try {
      const productosEnLocalStorage = localStorage.getItem("cartProducts");
      return productosEnLocalStorage ? JSON.parse(productosEnLocalStorage) : [];
    } catch (error) {
      return [];
    }
  });
  useEffect(() => {
    localStorage.setItem("cartProducts", JSON.stringify(cartItem)); 
    console.log(cartItem)
  }, [cartItem]);

  const addItemToCart = (product) => {
    const inCart = cartItem.find(
      (productInCart) => productInCart.id === product.id
    );
    if (inCart) {
      setCartItems(
        cartItem.map((productInCart) => {
          if (productInCart.id === product.id)
            return { ...inCart, amount: inCart.amount + 1 };
          else return productInCart;
        })
      );
    } else {
      setCartItems([...cartItem, { ...product, amount: 1 }]);
    }
  };
  const deleteItemtoCart = (product) => {
    const inCart = cartItem.find(
      (productInCart) => productInCart.id === product.id
    );

    if (inCart.amount === 1) {
      setCartItems(
        cartItem.filter((productInCart) => productInCart.id !== product.id)
        );
    }else {
        setCartItems((productInCart) => {
            if(productInCart.id === product.id){
                return{...inCart, amount:inCart.amount -1}
            }else return productInCart
        })
    }
  };
  return (
  <CartContex.Provider value={{cartItem,addItemToCart,deleteItemtoCart}}>
    {children}
  </CartContex.Provider>)
};
