import React from 'react';
import NavBar from '../navbar/NavBar';
import Nav from 'react-bootstrap/Nav';
import {listaInicio} from '../../actions/dashboard'
import { useDispatch, useSelector } from "react-redux";
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import agregarStock from '../imagenes/Iconos/Iconos6.svg';
import compra from '../imagenes/Iconos/Iconos5.svg';
import inventario from '../imagenes/Iconos/Iconos1.svg';
import favoritos from '../imagenes/Iconos/Iconos3.svg';
import './Inicio.css'

class Inicio extends React.Component {
    
    constructor() {
        super();
        this.state = {
            lista: listaInicio()(),
        };
      }
    render() {
      return (
        <div>
            <NavBar></NavBar>
            <div className="d-flex bd-highlight">
                <div className="p-2 flex-fill bd-highlight">
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
                <div className="p-2 flex-fill bd-highlight">
                    <Row xs={1} md={2} className="g-4 m-2 overflow-scroll scroll-alto">
                        {this.state.lista.map((element,index) => (
                            <Col key={index}>
                            <Card className="shadow p-3 bg-white rounded" >
                                <Card.Img className="align-self-end imagen-favorito" variant="top" src={favoritos} />
                                <Card.Img  className="imagen-producto" variant="top" src={element.ruta_imagen} />
                                <Card.Body>
                                <Card.Title className="text-center">{element.nombre}</Card.Title>
                                <Card.Text  className="text-center">
                                    {element.precio}
                                    <button  className="btn-lg botonLogin m-2" disabled={this.state.loeading}>
                                        <span>Ver más</span>
                                    </button>
                                    <button  className="btn-lg botonLogin m-2">
                                        <img className="imagen-stock-mas mr-2" src={agregarStock}></img>
                                        <span>Agregar</span>
                                    </button>
                                </Card.Text>
                                </Card.Body>
                            </Card>
                            </Col>
                        ))}
                    </Row>
                </div> 
                <div className="p-2 flex-fill bd-highlight">
                    <Card className="p-3 mb-5 bg-white lista-compra" >
                        <Card.Body>
                        <Card.Title>Card title</Card.Title>
                        <Card.Text>
                            This is a longer card with supporting text below as a natural
                            lead-in to additional content. This content is a little bit
                            longer.
                        </Card.Text>
                        </Card.Body>
                    </Card>
                </div>
            </div>
        </div>  
      );
    }
  }
export default Inicio;