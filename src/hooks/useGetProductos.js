import {useState, useEffect} from 'react'
import getProductos from '../services/getProductos'

const useGetProductos = () => {
  const [productos, setProductos] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  const handleGetProductos = async () => {
    try {
      setIsLoading(true)
      const listProductos = await getProductos();
      setProductos(listProductos)
    } catch(err) {
      console.log(err)
    }
    setIsLoading(false)
  }

  useEffect(() => {
    handleGetProductos()
  }, [])
  return [productos, isLoading, handleGetProductos]
}

export default useGetProductos