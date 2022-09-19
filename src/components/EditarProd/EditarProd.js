import { useEffect, useState } from 'react'
import NavBar from '../navbar/NavBar'
import { useHistory, useParams } from 'react-router-dom'
import useGetProducto from '../../hooks/useGetProducto'
import { Spinner } from 'react-bootstrap'
import './EditarProd.css'
import updateProducto from '../../services/updateProducto'
import toast from 'react-hot-toast'

const categorias = [
  {
      key: 1,
      label: 'Medicamento',
  },
  {
      key: 2,
      label: 'Higiene',
  },
  {
      key: 3,
      label: 'Dulcería',
  },
  {
      key: 4,
      label: 'Alimentos',
  },
  {
      key: 5,
      label: 'Otros',
  },
];

const EditarProd = () => {
  const {producto_id: PRODUCTO_ID} = useParams();
  const [producto, isLoading] = useGetProducto(PRODUCTO_ID)
  const [productoData, setProductoData] = useState({})
  const history = useHistory()

  const handleInputChange = (e) => {
    const { target : { name, value }} = e
    setProductoData({
      ...productoData,
      [name]: value
    })
  }

  const handleSubmit = async () => {
    try {
      await updateProducto(PRODUCTO_ID, productoData)
      toast.success('El producto se ha actualizado')
      history.goBack()
    } catch(err) {
      console.log(err)
    }
  }

  useEffect(() => {
    if(!isLoading) {
      setProductoData(producto)
    }
  }, [producto])

  if(isLoading) {
    return <Spinner />
  }

  return (
    <>
      <NavBar />
      <div className='container-content EditarProd__content'>

        <div className='EditarProd__col'>
          <div className='EditarProd__field'>
            <label className='EditarProd__label'>Nombre del producto*</label>
            <input
              value={productoData?.nombre}
              onChange={handleInputChange}
              name='nombre'
              type='text'
              className='EditProd__input'
            />
          </div>
          <div className='EditarProd__field'>
            <label className='EditarProd__label'>Sustancia Activa</label>
            <input
              value={productoData?.sustancia_activa}
              onChange={handleInputChange}
              name='sustancia_activa'
              type='text'
              className='EditProd__input'
            />
          </div>
          <div className='EditarProd__field'>
            <label className='EditarProd__label'>Precio</label>
            <input
              value={productoData?.precio}
              onChange={handleInputChange}
              name='precio'
              type='number'
              className='EditProd__input'
            />
          </div>
          <div className='EditarProd__field'>
            <label className='EditarProd__label'>Descripción</label>
            <textarea
              value={productoData?.descripcion}
              onChange={handleInputChange}
              style={{height: 120}}
              name='descripcion'
              type='text'
              className='EditProd__input'
            />
          </div>

          <button
            onClick={handleSubmit}
            className='button-primary'
            style={{width: '100%', height: 40}}
          >
            Aceptar
          </button>
        </div>

        <div className='EditarProd__col' style={{justifyContent: 'space-between'}}>
          <div style={{display: 'flex', gap: 30, flexDirection: 'column'}}>

            <div className='EditarProd__field'>
              <label className='EditarProd__label'>Categoría</label>
              <select
                value={productoData?.categoria}
                onChange={handleInputChange}
                name='categoria'
                // type='text'
                className='EditProd__input'
              >
                <option
                  value={productoData?.categoria}
                >
                  {productoData?.categoria}
                </option>
                {categorias.map(cat => (
                  <option
                    value={cat.label}
                    key={cat.key}
                  >
                    {cat.label}
                  </option>
                ))}
              </select>
            </div>
            <div className='EditarProd__field'>
              <label className='EditarProd__label'>Stock</label>
              <input
                value={productoData?.existencia}
                onChange={handleInputChange}
                name='existencia'
                type='number'
                className='EditProd__input'
              />
            </div>
          </div>
          
          <button
            onClick={() => history.goBack()}
            className='button-blank'
            style={{width: '100%', minHeight: 40}}
          >
            Cancelar
          </button>
        </div>

        <div className='EditarProd__col EditarProd__last-col'>
          <div className='EditarProd__field'>
            <label className='EditarProd__label'>Imagen de producto</label>
            <img
              src='https://medlineplus.gov/images/Medicines.jpg'
            />
          </div>
        </div>
        
      </div>
    </>
  )
}

export default EditarProd