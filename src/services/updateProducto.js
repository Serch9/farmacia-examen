import axios from 'axios'
import { API_PORTAL_URL } from '../constants'
import { updateProducto } from '../contants/routes'

export default (productoId, productoData) => {
  return axios.put(API_PORTAL_URL + updateProducto + productoId, {productoData})
    .then(productos => {
      return productos.data.message
    })
    .catch(err => console.log(err))
}