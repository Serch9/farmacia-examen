import axios from 'axios'
import { API_PORTAL_URL } from '../constants'
import { updateStockProducto } from '../contants/routes'

export default (productoId, cantidad) => {
  return axios.put(API_PORTAL_URL + updateStockProducto + productoId + `?cantidad=${cantidad}`)
    .then(productos => {
      return productos.data.message
    })
    .catch(err => console.log(err))
}

