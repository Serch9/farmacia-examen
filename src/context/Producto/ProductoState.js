import React, { useReducer } from 'react'
import ProductoReducer from './ProductoReducer'
import ProductoContext from './ProductoContext'
import { CLEAR_PRODUCTOS, SET_PRODUCTO } from '../types'

const ProductoState = (props) => {
  const initialState = {
    productos: []
  }

  const [state, dispatch] = useReducer(ProductoReducer, initialState)
  const getProductos = () => {
    
  }

  const setProducto = (producto) => {
    dispatch({
      type: SET_PRODUCTO,
      payload: producto
    })
  }

  const clearProducts = () => {
    dispatch({
      type: CLEAR_PRODUCTOS,
      payload: []
    })
  }

  return (
    <ProductoContext.Provider value={{
      productos: state.productos,
      getProductos,
      setProducto,
      clearProducts
    }}>{
      props.children
    }</ProductoContext.Provider>
  )
}

export default ProductoState