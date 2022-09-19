import { useState } from 'react'
import ReactModal from 'react-modal'
import updateStockProducto from '../../services/updateStockProducto'
import './EditStock.css'
import toast from 'react-hot-toast';

const EditStock = ({isOpenModal, closeModal, stylesModal, producto, reloadPage}) => {
  const [isLoading, setIsLoading] = useState(false)
  const [stock, setStock] = useState()

  const handleInputChange = (e) => {
    const { target: { value }} = e
    setStock(parseInt(value))
  }

  const handleSubmit = async () => {
    try {
      setIsLoading(true)
      await updateStockProducto(producto.id, stock)
      closeModal()
      reloadPage()
      toast.success('El stock se ha actualizado');
    } catch(err) {
      console.log(err)
    }
    setIsLoading(false)
  }

  return (
    <ReactModal
          isOpen={isOpenModal}
          onRequestClose={closeModal}
          shouldCloseOnOverlayClick
          shouldCloseOnEsc
          style={{content: {
            ...stylesModal,
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25), inset 0px 4px 4px rgba(0, 0, 0, 0.25)'
          }}}
        >
          <div className='EditStock__modal-content'>
            <p className='EditStock__modal-text'>
              ¿Usted desea actualizar la cantidad de stock en venta de este producto?
            </p>
            <div className='EditStock__modal-label-input'>
              <label className='EditStock__modal-label'>
                Producto
              </label>
              <input
                type='text'
                disabled
                placeholder='Nombre del producto'
                className='EditStock__modal-input'
                value={producto?.nombre}
                />
            </div>
            <div className='EditStock__modal-label-input'>
              <label className='EditStock__modal-label'>
                Stock
              </label>
              <input
                value={stock}
                onChange={handleInputChange}
                type='number'
                placeholder='Número del producto'
                className='EditStock__modal-input'
              />
            </div>
            <div className='EditStock__modal-actions'>
              <button
                onClick={handleSubmit}
                className='button-primary'
                style={{width: '50%'}}
              >
                Aceptar
              </button>
              <button
                onClick={closeModal}
                className='button-blank'
                style={{width: '50%'}}
              >
                Cancelar
              </button>
            </div>
          </div>
        </ReactModal>
  )
}

export default EditStock