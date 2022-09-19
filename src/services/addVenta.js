import axios from 'axios'
import { API_PORTAL_URL } from '../constants'
import { setVenta } from '../contants/routes'

export default (ventaData, products) => {
  return axios.post(API_PORTAL_URL + setVenta, {ventaData, products})
    .then(productos => {
      return productos.data.message
    })
    .catch(err => console.log(err))
}