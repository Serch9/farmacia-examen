import {useState, useEffect} from 'react'
import getProducto from '../services/getProducto'

const useGetProducto = (productoId) => {
  const [productos, setProductos] = useState()
  const [isLoading, setIsLoading] = useState(true)

  const handleGetProductos = async () => {
    try {
      setIsLoading(true)
      const listProductos = await getProducto(productoId);
      setProductos(listProductos)
    } catch(err) {
      console.log(err)
    }
    setIsLoading(false)
  }

  useEffect(() => {
    handleGetProductos()
  }, [])
  return [productos, isLoading]
}

export default useGetProducto