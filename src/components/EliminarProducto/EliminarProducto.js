import { useState } from 'react'
import ReactModal from 'react-modal'
import './EliminarProducto.css'
import eliminarProducto from '../../services/eliminarProducto';
import toast from 'react-hot-toast';

const EliminarProducto = ({isOpenModal, closeModal, stylesModal, producto, reloadPage}) => {
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async () => {
    try {
      setIsLoading(true)
      await eliminarProducto(producto.id)
      closeModal()
      reloadPage()
      toast.success('El producto se ha eliminado');
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
      <div className='EliminarProducto__modal-content'>
        <p className='EliminarProducto__modal-text'>
          ¿Usted desea cancelar la comanda de este comensal?
        </p>
        <div className='EliminarProducto__modal-actions'>
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

export default EliminarProducto