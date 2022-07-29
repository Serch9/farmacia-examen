import React, { useState }from 'react';
import NavBar from '../navbar/NavBar';
import Nav from 'react-bootstrap/Nav';
import { listaInventario} from '../../actions/inventario'
import { useDispatch, useSelector } from "react-redux";
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
            listaInv: listaInventario()(),
            show:false
        };
        this.handleClose = this.handleClose.bind(this);
        this.handleStock = this.handleStock.bind(this);
        console.log(this.state.listaInv)
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
    handleStock(e){
        console.log(e)
        this.setState(
            {show:true}
        )
        // this.state.show = true;
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
                                        <img className="icon" src={Ver} ></img>
                                        <img className="icon" src={aumentarStock} onClick={this.handleStock}></img>
                                        <img className="icon" src={Editar} ></img>
                                        <img className="icon" src={Borrar} ></img>
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
                            <Form.Control className="input-style" type="number" min="0"placeholder="Cantidad de venta" />
                        </Form.Group>
                        <Form.Group>
                            <Button className="boton-modal boton-aceptar" variant="primary" onClick={this.handleClose}>
                                Aceptar
                            </Button>
                            <Button className="boton-modal boton-cancelar" variant="secondary" onClick={this.handleClose}>
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