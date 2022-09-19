import { CLEAR_PRODUCTOS, SET_PRODUCTO } from "../types";

export default (state, action) => {
  const {payload, type} = action
  const {cantidadAdd, producto} = payload
  switch (type) {
    case SET_PRODUCTO: {
      const indexProducto = state.productos.findIndex((el) => el.id === producto.id)
      if(indexProducto === -1) {
        return {
          ...state,
          productos: [...state.productos, {...producto, cantidad: cantidadAdd}]
        }
      } else {
        let newProductos = [ ...state.productos ]
        newProductos[indexProducto].cantidad = newProductos[indexProducto].cantidad + cantidadAdd
        
        return {
          ...state,
          productos: newProductos
        }
      }
    }
    break;

    case CLEAR_PRODUCTOS: {
      return {
        productos: []
      }
      
    }

  }
}