import axios from 'axios'
import { API_PORTAL_URL } from '../constants'
import {getProductos} from '../contants/routes'

export default () => {
  return axios.get(API_PORTAL_URL + getProductos)
    .then(productos => {
      return productos.data.message
    })
    .catch(err => console.log(err))
}

