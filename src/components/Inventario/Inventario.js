import { useState } from 'react'
import NavBar from "../navbar/NavBar";
import NavCol from '../NavCol/NavCol';
import useGetProductos from '../../hooks/useGetProductos';
import Spinner from '../Spinner/Spinner';
import './Inventario.css'
import images from '../../contants/images';
import { Link } from 'react-router-dom';
import EditStock from '../EditStock/EditStock';
import EliminarProducto from '../EliminarProducto/EliminarProducto';
import updateStateProducto from '../../services/updateStateProducto';

const columns = [
  {nombre:'ID', className: ''},
  {nombre:'Estatus', className: 'center-items'},
  {nombre:'Producto', className: ''},
  {nombre:'Sustancia Activa', className: ''},
  {nombre:'Categoría', className: ''},
  {nombre:'Precio', className: ''},
  {nombre:'Stock', className: ''},
  {nombre:'Acciones', className: 'Inventario__lastColumn'}
]


const Inventario = () => {
  const [productos, isLoading, reload] = useGetProductos()
  const [openModal, setOpenModal] = useState(false)
  const [elimProdModal, setElimProdModal] = useState(false)
  const [productoSelected, setProductoSelected] = useState()
  const [stylesModal, setStylesModal] = useState({})
  
  
  const handleOpenModal = () => setOpenModal(true)
  const handleCloseModal = () => setOpenModal(false)
  
  const handleOpenElimModal = () => setElimProdModal(true)
  const handleCloseElimModal = () => setElimProdModal(false)

  const handleChangeStatus = async (productoId, status) => {
    try {
      await updateStateProducto(productoId, status)
      reload()
    } catch(err) {
      console.log(err)
    }
  }

  const actions = [
    {
      nombre: 'ver',
      icono: images.ver,
      to: '/producto/',
      width: '35px',
      className: ''
    },
    {
      nombre: 'addStock',
      icono: images.addStock,
      width: '30px',
      className: '',
      onClick: (producto) => {
        setProductoSelected(producto)
        handleOpenModal()
        setStylesModal({
          width: 340,
          height: 340,
        })
      }
    },
    {
      nombre: 'editar',
      icono: images.editar,
      to: '/producto_editar/',
      width: '20px',
      className: ''
    },
    {
      nombre: 'borrar',
      icono: images.borrar,
      // to: '/producto/',
      width: '22px',
      className: '',
      onClick: (producto => {
        setProductoSelected(producto)
        handleOpenElimModal()
        setStylesModal({
          width: 340,
          height: 230,
        })
      })
    }
  ]

  return (
    <>
      <NavBar />
      <div className='container-content'>
        <NavCol />
        {
          !isLoading ?  
            <div className='Invetario__content'>
              <Link
                to='/alta'
                className='button-blank'
              >
                Nuevo Producto
              </Link>
              <table className='Inventario__table'>
                <tr className='Inventario__table-headers' style={{height: '48px'}}>
                  {columns.map(col => (
                    <th 
                      className={col.className}
                      style={{height: 48}}
                      key={col.nombre}
                    >
                      {col.nombre}
                    </th>
                  ))}
                </tr>
                {
                  productos.map((producto, index) => (
                    <tr
                      key={producto.id}
                      className={
                        `Inventario__table-row ${index % 2 === 0 ? '' : 'Inventario__table-row-shadow'}`
                      }
                    >
                      <th>{producto.id}</th>
                      <th className='center-items' style={{marginTop: 20}}>{
                        producto.estatus === '1' ?
                          <div
                            className='Inventario__estatus-activo'
                            onClick={() => handleChangeStatus(producto.id, !parseInt(producto.estatus))}
                          />
                          : <div
                              className='Inventario__estatus-inactivo'
                              onClick={() => handleChangeStatus(producto.id, !parseInt(producto.estatus))}
                            />
                      }</th>
                      <th>{producto.nombre}</th>
                      <th>{producto.sustancia_activa}</th>
                      <th>{producto.categoria}</th>
                      <th>${producto.precio}</th>
                      <th>{producto.existencia}</th>
                      <th
                        className='Inventario__table-actions Inventario__link'
                      >
                          {
                            actions.map((action) => (
                              <Link
                                onClick={() => action.onClick !== undefined ? (action.onClick(), setProductoSelected(producto)) : ''}
                                to={action.to + producto.id}
                                key={action.nombre}
                              >
                                <img
                                  src={action.icono}
                                  className='Invetario__table-icon'
                                  width={action.width}
                                />
                              </Link>
                            ))
                          }
                      </th>
                    </tr>
                  ))
                }
              </table>
            </div>
          :
          <Spinner />
        }
        <EditStock
          closeModal={handleCloseModal}
          isOpenModal={openModal}
          stylesModal={stylesModal}
          producto={productoSelected}
          reloadPage={reload}
        />
        <EliminarProducto
          closeModal={handleCloseElimModal}
          isOpenModal={elimProdModal}
          stylesModal={stylesModal}
          producto={productoSelected}
          reloadPage={reload}
        />
        </div>
    </>
  ) 
}

export default Inventario