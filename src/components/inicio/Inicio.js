import React from 'react';
import NavBar from '../navbar/NavBar';
import Nav from 'react-bootstrap/Nav';
import axios from 'axios';
import { API_PORTAL_URL } from '../../constants';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Table from 'react-bootstrap/Table';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import agregarStock from '../imagenes/Iconos/Iconos6.svg';
import compra from '../imagenes/Iconos/Iconos5.svg';
import inventario from '../imagenes/Iconos/Iconos1.svg';
import favoritos from '../imagenes/Iconos/Iconos3.svg';
import img from '../imagenes/Productos/1.jpeg';
import './Inicio.css'
class Inicio extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            lista: [],
            longitud: 0,
            favoritos: false,
            arregloCompra: [],
            subTotal:0,
            iva:0,
            total:0,
            banderaPagar:false
        };
        axios.get(API_PORTAL_URL + '/inicio')
        .then(response=>{
            this.setState({
                lista: response.data.productos
            })
        });
        this.handleFavoritos = this.handleFavoritos.bind(this);
        this.handleComprar = this.handleComprar.bind(this);
        this.handleLongitud = this.handleLongitud.bind(this);
        this.handlePagar = this.handlePagar.bind(this);
    }
    handleFavoritos(e){
        this.setState({
            favoritos: !this.state.favoritos
        })
    }
    handleComprar(elemento){        
        this.setState({
            subTotal: this.state.subTotal + elemento.precio,
            iva: this.state.iva + (elemento.precio*0.16),
            total: this.state.total + elemento.precio,
            arregloCompra: [...this.state.arregloCompra,elemento],            
        })
    }
    handleLongitud(){ 
        setTimeout(() => {
            this.setState({
                longitud: this.state.arregloCompra.length
            })
        }, 100);
    }
    handlePagar(){
        this.setState({
            banderaPagar: true,
            arregloCompra:[]
        })
        setTimeout(() => {
            this.setState({
                banderaPagar: false
            })
        }, 2000);
        setTimeout(() => {
            this.setState({
                longitud: 0
            })
        }, 200);
    }
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
                <div className="p-2 flex-fill bd-highlight">
                    <Row xs={1} md={2} className="g-4 m-2 overflow-scroll scroll-alto">
                        {this.state.lista.map((element,index) => (
                            <Col key={index}>
                            <Card className="shadow p-3 bg-white rounded" >
                                <Card.Img className={this.state.favoritos?"align-self-end imagen-favorito blue":"align-self-end imagen-favorito gray"} variant="top" src={favoritos} onClick={this.handleFavoritos}/>
                                <Card.Img  className="imagen-producto" variant="top" src={img} />
                                <Card.Body>
                                <Card.Title className="text-center">{element.nombre}</Card.Title>
                                <Card.Title className="text-center">${element.precio}</Card.Title>
                                <Card.Text  className="text-center">
                                    <button  className="btn-lg botonLogin m-2" disabled={this.state.loeading}>
                                        <span>Ver más</span>
                                    </button>
                                    <button  className="btn-lg botonLogin m-2" onClick={()=>{this.handleComprar(element);this.handleLongitud()}}>
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
                <div className="p-2 flex-fill bd-highlight espacio-compra">
                    <Card className={this.state.longitud > 0 && !this.state.banderaPagar ? "p-3 mb-5 bg-white lista-compra show-compra":"p-3 mb-5 bg-white lista-compra hide"}  >
                        <Card.Body className="ver-producto comprar-lista">
                            <Table responsive="sm">
                                <tbody>
                                    {this.state.arregloCompra.map((prod,index)=>(
                                        <tr key={index}>
                                            <td>1</td>
                                            <td>{prod.nombre}</td>
                                            <td>${prod.precio}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </Table>
                            <Table responsive="sm">
                                <tbody>
                                    <tr>
                                        <td>Subtotal</td>
                                        <td>${this.state.subTotal}</td>
                                    </tr>
                                    <tr>
                                        <td>IVA</td>
                                        <td>${this.state.iva}</td>
                                    </tr>
                                    <tr>
                                        <td>Total</td>
                                        <td>${this.state.total}</td>
                                    </tr>
                                </tbody>
                            </Table>
                            <Button className="botonLogin" onClick={()=>{this.handlePagar()}}>Comprar</Button>
                        </Card.Body>
                    </Card>
                    <Card className={this.state.banderaPagar ? "p-3 mb-5 bg-white lista-compra show-compra":"p-3 mb-5 bg-white lista-compra hide"}  >
                        <Card.Body className="ver-producto felicidades">
                            <Card.Text className="text-center">¡FELICIDADES HA REALIZADO LA COMPRA!</Card.Text>
                        </Card.Body>
                    </Card>
                </div>
            </div>
        </div>  
      );
    }
  }
export default Inicio;