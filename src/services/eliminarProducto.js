import axios from 'axios'
import { API_PORTAL_URL } from '../constants'
import { deleteProductos } from '../contants/routes'

export default (productoId) => {
  return axios.delete(API_PORTAL_URL + deleteProductos + productoId)
    .then(productos => {
      return productos.data.message
    })
    .catch(err => console.log(err))
}