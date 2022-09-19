import axios from 'axios'
import { API_PORTAL_URL } from '../constants'
import { updateStatus } from '../contants/routes'

export default (productoId, status) => {
  return axios.patch(API_PORTAL_URL + updateStatus + productoId, {status: status})
    .then(productos => {
      return productos.data.message
    })
    .catch(err => console.log(err))
}