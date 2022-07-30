import React, { useState }from 'react';
import NavBar from '../navbar/NavBar';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import axios from 'axios';
import { API_PORTAL_URL } from '../../constants';
import Medicamento1 from '../imagenes/Productos/1.jpeg';
import './Producto.css'


class Ver extends React.Component {
    constructor(props) {
        super(props);
        const query = new URLSearchParams(props.location.search);
        this.state = {
            prod: "",
            id: query.get("id")
        };
        axios.post(API_PORTAL_URL + 'ver',
            {
                id:this.state.id
            })
            .then(response=>{
                this.setState({
                    prod: response.data.productos
                })
            })
    }
    handleReturn(e){
        window.location = "/inventario"
    }
    render() {
      return (
        <div className="ver-producto">
            <NavBar></NavBar>
            <Table responsive="sm">
                <tbody>
                    <tr>
                        <td>
                            <p className="text-title" >Nombre del producto* :</p>
                            <p className="text-content" >{this.state.prod.nombre}</p>
                        </td>
                        <td>
                            <p className="text-title" >Categoría</p>
                            <p className="text-content" >{this.state.prod.categoria}</p>
                        </td>
                        <td rowspan="4">
                            <p className="text-title" >Imagen del Producto</p>
                            <img width="400" heigth="400" src={Medicamento1}></img>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <p className="text-title" >Sustancia Activa*  : </p>
                            <p className="text-content" >{this.state.prod.sustancia_activa}</p>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <p className="text-title" >Precio</p>
                            <p className="text-content" >{this.state.prod.precio}</p>
                        </td>
                        <td>
                            <p className="text-title" >Stock</p>
                            <p className="text-content" >{this.state.prod.existencia}</p>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <p className="text-title" >Descripción</p>
                            <p>{this.state.prod.descripcion}</p>
                        </td>
                    </tr>
                </tbody>
            </Table>
            <div className="d-flex justify-content-end">
                <Button className="boton-modal boton-return" variant="primary" onClick={this.handleReturn}>
                    Salir
                </Button>
            </div>
        </div>
      );
    }
  }
export default Ver;