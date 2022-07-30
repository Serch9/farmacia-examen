import React, { useState }from 'react';
import NavBar from '../navbar/NavBar';
import Nav from 'react-bootstrap/Nav';
import axios from 'axios';
import { API_PORTAL_URL } from '../../constants';
import Card from 'react-bootstrap/Card';
import Table from 'react-bootstrap/Table';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Ver from '../imagenes/Iconos/ICONOS9.svg';
import compra from '../imagenes/Iconos/Iconos5.svg';
import inventario from '../imagenes/Iconos/Iconos1.svg';
import aumentarStock from '../imagenes/Iconos/ICONOS10.svg';
import Editar from '../imagenes/Iconos/ICONOS7.svg';
import Borrar from '../imagenes/Iconos/ICONOS8.svg';
import './Inventario.css'

class Inventario extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            listaInv: [],
            show:false,
            showDelete: false,
            producto:{},
            value: "",
            elementDelete: 0
        };
        axios.get(API_PORTAL_URL + '/inventario')
        .then(response=>{
            this.setState({
                listaInv: response.data.productos
            })
        })
        this.handleClose = this.handleClose.bind(this);
        this.handleStock = this.handleStock.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
        this.handleCloseDelete = this.handleCloseDelete.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleDeleteDelete = this.handleDeleteDelete.bind(this);
        // console.log(this.state.listaInv)
      }
    handleClick(e){
        window.location = "/alta"
        console.log(e)
    }
    handleClose(e){
        this.setState({
            show:false
        })
    }
    handleSaveStock(producto){
        this.setState({
            show:false
        })
        axios.put(API_PORTAL_URL + '/actualizar/'+ producto.id,{
            "stock":  this.state.value
        })
        .then(response=>{
            console.log(response)
            window.location = "/inventario";
        })
        console.log(producto.id,producto.existencia)
    }
    handleCloseDelete(e){
        this.setState({
            showDelete: false
        })
    }
    handleDelete(id){
        this.setState(
            {
                showDelete:true,
                elementDelete: id
            }
        )
    }
    handleStock(stock,productoSeleccion){
        console.log(productoSeleccion)
        this.setState(
            {value:stock,
             show:true,
             producto:productoSeleccion
            }
        )
    }
    handleVer(element){
        const id = element.id;
        console.log(id)
        window.location = "/ver?id="+id;
    }
    handleEdit(element){
        console.log(element)
        window.location = `/editar?id= ${element.id}&nombre=${element.nombre}&categoria=${element.categoria}&sustancia=${element.sustancia_activa}&receta=${element.receta_obligatoria}&cantidad=${element.porcion}&precio=${element.precio}&stock=${element.existencia}&descripcion=${element.descripcion}`;
    }
    handleChange(event) {
        this.setState({value: event.target.value});
    }
    handleDeleteDelete(e){
        axios.delete(API_PORTAL_URL + '/eliminar/producto/'+ this.state.elementDelete)
        .then(response=>{
            console.log(response)
            window.location = "/inventario";
        })
        console.log(e)
    }
    headers = ["ID","Status","Producto","Sustancia Activa","Categoría","Precio","Stock","Acciones"];
    render() {
      return (
        <div>
            <NavBar></NavBar>
            <div className="d-flex bd-highlight">
                <div className="p-2 flex-fill bd-highlight tamaño-nav">
                    <Nav defaultActiveKey="/inicio" className="flex-column alto-compra-inventario">
                        <Nav.Link className="hover-image" href="/inicio">
                            <Card className="box-shadow-compra-inventario">
                                <Card.Img className="imagen-compra" variant="top" src={compra} />
                                <Card.Body className="text-center">
                                    <Card.Title>Compra</Card.Title>
                                </Card.Body>
                            </Card>
                        </Nav.Link>
                        <Nav.Link href="/inventario">
                            <Card className="box-shadow-compra-inventario">
                                <Card.Img className="imagen-compra" variant="top" src={inventario} />
                                <Card.Body className="text-center">
                                <Card.Title>Inventario</Card.Title>
                                </Card.Body>                                    
                            </Card>
                        </Nav.Link>
                    </Nav>
                </div>
                <div className="p-2 flex-fill bd-highlight w-100percent overflow-scroll scroll-alto-inventario">
                    <button  className="btn-lg m-2 boton-producto-nuevo" onClick={this.handleClick}>
                        <span>Nuevo Producto</span>
                    </button>
                    <Table striped className="border-radius" >
                        <thead className="header-blue">
                            <tr>
                                {this.headers.map((element,index) => (
                                    <th key={index} className="p-2" >{element}</th>
                                ))}
                            </tr>
                        </thead>
                        <tbody>
                            {this.state.listaInv.map((element,index) =>(
                                <tr key={index}>
                                    <td className="p-3" >{element.id}</td>
                                    <td className="p-3" >
                                        <div className={element.estatus === "1" ? "activo":"inactivo"}></div>
                                    </td>
                                    <td className="p-3" >{element.nombre}</td>
                                    <td className="p-3" >{element.sustancia_activa}</td>
                                    <td className="p-3" >{element.categoria}</td>
                                    <td className="p-3" >{element.precio}</td>
                                    <td className="p-3" >{element.existencia}</td>
                                    <td>
                                        <img className="icon" src={Ver} onClick={()=>this.handleVer(element)}></img>
                                        <img className="icon" src={aumentarStock} onClick={()=>this.handleStock(element.existencia,element)}></img>
                                        <img className="icon" src={Editar} onClick={()=>this.handleEdit(element)}></img>
                                        <img className="icon" src={Borrar} onClick={()=>this.handleDelete(element.id)}></img>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </Table>
                </div>                 
            </div>
            <Modal className="tamaño-modal" show={this.state.show} onHide={this.handleClose}>
                <Modal.Header closeButton>
                <Modal.Title className="text-header-modal">¿Usted desea actualizar la cantidad de stock en venta de este producto?</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label className="text-input">Producto</Form.Label>
                            <Form.Control className="input-style" type="email" placeholder="Medicamento1" disabled />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label className="text-input">Stock</Form.Label>
                            <Form.Control onChange={this.handleChange} value={this.state.value} className="input-style" type="number" min="0" placeholder="Cantidad de venta" />
                        </Form.Group>
                        <Form.Group>
                            <Button className="boton-modal boton-aceptar" variant="primary" onClick={()=>this.handleSaveStock(this.state.producto)}>
                                Aceptar
                            </Button>
                            <Button className="boton-modal boton-cancelar" variant="secondary" onClick={this.handleClose}>
                                Cancelar
                            </Button>
                        </Form.Group>                        
                    </Form>
                </Modal.Body>
            </Modal>
            <Modal className="tamaño-modal" show={this.state.showDelete} onHide={this.handleCloseDelete}>
                <Modal.Header closeButton>
                <Modal.Title className="text-header-modal">¿Usted desea cancelar la comanda de este comensal?</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group>
                            <Button className="boton-modal boton-aceptar" variant="primary" onClick={this.handleDeleteDelete}>
                                Aceptar
                            </Button>
                            <Button className="boton-modal boton-cancelar" variant="secondary" onClick={this.handleCloseDelete}>
                                Cancelar
                            </Button>
                        </Form.Group>                        
                    </Form>
                </Modal.Body>
            </Modal>
        </div>
      );
    }
  }
export default Inventario;