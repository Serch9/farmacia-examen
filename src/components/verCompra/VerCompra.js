import React , { useState, useEffect } from "react";
import { Row, Col, Form } from 'react-bootstrap';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import MenuItem from '@mui/material/MenuItem';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import Button from '@mui/material/Button';
import { useHistory, useParams } from 'react-router-dom';
import axios from 'axios';
import { API_PORTAL_URL } from '../../constants';

import NavBar from '../navbar/NavBar';



export const VerCompra = () => {
    const {id} = useParams();
        console.log(window.location.href.includes('ver'))
        const {ver} = window.location.href.includes('ver');
        console.log(ver)
        const url = API_PORTAL_URL + "/getOne/"+id;
        const [todos, setTodos] = useState();
        const [nombre, setNombre] = React.useState('');
        const [categoria, setCategoria] = React.useState('Medicamento');
        const [sustancia, setSustancia] = React.useState('');
        const [receta, setReceta] = React.useState(false);
        const [cantidad, setCantidad] = React.useState('');
        const [precio, setPrecio] = React.useState('');
        const [stock, setStock] = React.useState(0);
        const [descripcion, setDescripcion] = React.useState('');
        
        const fetchApi = async () => {
          const response = await fetch(url);
          console.log(response);
          const responseJSON = await response.json()
          setTodos(responseJSON.data[0])
          setNombre(responseJSON.data[0].nombre)
          setCategoria(responseJSON.data[0].categoria)
          setSustancia(responseJSON.data[0].sustancia_activa)
          setReceta(responseJSON.data[0].receta_obligatoria)
          setCantidad(responseJSON.data[0].porcion)
          setStock(responseJSON.data[0].existencia)
          setDescripcion(responseJSON.data[0].descripcion)
          setPrecio(responseJSON.data[0].precio)
          console.log(responseJSON.data[0])
        };
      
        useEffect(() => {
          fetchApi();
        }, []);
       
    let history = useHistory() 
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

      



 
    return (
        <div>
            <NavBar></NavBar>
           
            <Row className='m-5'>
                <Col className='my-3 mx-5'>
                    <Form >
                        <Row>
                            <Col xs={8}>
                                <Typography className='labels px-1' variant="h6" gutterBottom >
                                    Nombre del Producto* :
                                </Typography>
                            </Col>
                            <Col>
                                <Typography  typography={nombre} className='labels px-1' variant="h6" gutterBottom >
                                    Categoría
                                </Typography>
                            </Col>
                        </Row>
                        <Row className='mb-4'>
                            <Col xs={8}>
                                <TextField
                                    className='text-field'
                                    placeholder="Nombre del Producto"
                                    variant="outlined"
                                    value={nombre}
                                    disabled={true}
                                />
                            </Col>
                            <Col>
                                <TextField
                                    className='text-field'
                                    placeholder="Seleccione una Categoría"
                                    variant="outlined"
                                    select
                                    value={categoria}
                                    disabled={true}
                                >
                                    {
                                        categorias.map((cat) => (
                                            <MenuItem key={cat.key} value={cat.label}>
                                                {cat.label}
                                            </MenuItem>
                                        ))
                                    }
                                </TextField>
                            </Col>
                        </Row>

                        <Row>
                            <Col xs={8}>
                                <Typography className='labels px-1' variant="h6" gutterBottom >
                                    Sustancia Activa* :
                                </Typography>
                            </Col>
                        </Row>
                        <Row className='mb-4'>
                            <Col xs={8}>
                                <TextField
                                    className='text-field'
                                    placeholder="Ingrese la Sustancia"
                                    variant="outlined"
                                    value={sustancia}
                                    disabled={true}
                                />
                            </Col>
                            <Col className='px-5 py-1'>
                                <FormControlLabel control={<Checkbox checked={receta}  disabled={true}  />} label="Receta Obligatoria" />
                            </Col>

                        </Row>

                        <Row>
                            <Col>
                                <Typography className='labels px-1' variant="h6" gutterBottom >
                                    Porción o Cantidad* :
                                </Typography>
                            </Col>
                        </Row>
                        <Row className='mb-4'>
                            <Col>
                                <TextField
                                    className='text-field'
                                    placeholder="Ingrese la porción del medicamento"
                                    variant="outlined"
                                    value={cantidad}
                                    disabled={true}
                                />
                            </Col>
                        </Row>

                        <Row>
                            <Col xs={8}>
                                <Typography className='labels px-1' variant="h6" gutterBottom >
                                    Precio:
                                </Typography>
                            </Col>
                            <Col>
                                <Typography className='labels px-1' variant="h6" gutterBottom >
                                    Stock
                                </Typography>
                            </Col>
                        </Row>
                        <Row className='mb-4'>
                            <Col xs={8}>
                                <TextField
                                    className='text-field'
                                    placeholder="Ingrese el Precio de Venta"
                                    variant="outlined"
                                    value={precio}
                                    disabled={true}
                                />
                            </Col>
                            <Col>
                                <TextField
                                    className='text-field'
                                    placeholder="Cantidad Disponible"
                                    variant="outlined"
                                    type="number"
                                    value={stock}
                                    disabled={true}
                                />
                            </Col>
                        </Row>

                        <Row>
                            <Col>
                                <Typography className='labels px-1' variant="h6" gutterBottom >
                                    Descripción:
                                </Typography>
                            </Col>
                        </Row>
                        <Row className='mb-4'>
                            <Col>
                                <TextField
                                    className='text-field'
                                    placeholder="Ingrese una Descripción del Producto"
                                    variant="outlined"
                                    multiline
                                    rows={3}
                                    value={descripcion}
                                    disabled={true}
                                />
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                               
                                <Button className='btn mx-5' type="button" onClick={() => history.push("/compra")}variant="contained"> Regresar</Button>
                            </Col>
                        </Row>
                    </Form>
                </Col>
            </Row>

        </div>);
}

