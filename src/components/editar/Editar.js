import React from 'react';
import { Row, Col, Form } from 'react-bootstrap';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import MenuItem from '@mui/material/MenuItem';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import Button from '@mui/material/Button';

import axios from 'axios';
import { API_PORTAL_URL } from '../../constants';

import NavBar from '../navbar/NavBar';
import './Editar.css';


const Editar = (props) => {
    const query = new URLSearchParams(props.location.search);
    console.log(query.get("nombre"))
    const [nombre, setNombre] = React.useState(query.get("nombre"));
    const [id, setId] = React.useState(query.get("id"));
    const [categoria, setCategoria] = React.useState(query.get("categoria"));
    const [sustancia, setSustancia] = React.useState(query.get("sustancia"));
    const [receta, setReceta] = React.useState(query.get("receta") ? true: false);
    const [cantidad, setCantidad] = React.useState(query.get("cantidad"));
    const [precio, setPrecio] = React.useState(query.get("precio"));
    const [stock, setStock] = React.useState(query.get("stock"));
    const [descripcion, setDescripcion] = React.useState(query.get("descripcion"));


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

    function nombreOnChange(event) {
        setNombre(event.target.value);
    }

    function categoriaOnChange(event) {
        setCategoria(event.target.value);
    }

    function sustanciaOnChange(event) {
        setSustancia(event.target.value);
    }

    function recetaOnChange(event) {
        setReceta(event.target.checked);
    }

    function cantidadOnChange(event) {
        setCantidad(event.target.value);
    }

    function precioOnChange(event) {
        setPrecio(event.target.value);
    }

    function stockOnChange(event) {
        setStock(event.target.value);
    }

    function descripcionOnChange(event) {
        setDescripcion(event.target.value);
    }
    function handlerCancel(e){
        window.location = "/inventario"
    }
    function onSubmit(e) {
        e.preventDefault();

        console.log(nombre);
        console.log(categoria);
        console.log(sustancia);
        console.log(receta);
        console.log(cantidad);
        console.log(precio);
        console.log(stock);
        console.log(descripcion);

        //Llamada POST para agregar el producto
        axios.put(API_PORTAL_URL + '/actualizar/producto/'+ id,
            {
                nombre: nombre,
                sustancia_activa: sustancia,
                categoria: categoria,
                precio: precio,
                existencia: stock,
                porcion: cantidad,
                receta_obligatoria: receta ? 1 : 0,
                descripcion: descripcion,
            }
        ).then((response) => {
            window.location = "/inventario"
            console.log(response);
        });
    }

    return (
        <div>
            <NavBar></NavBar>
            <Row className='m-1'>
                <Col className='my-3 mx-5'>
                    <Form onSubmit={onSubmit}>
                        <Row>
                            <Col xs={8}>
                                <Typography className='labels px-1' variant="h6" gutterBottom >
                                    Nombre del Producto* :
                                </Typography>
                            </Col>
                            <Col>
                                <Typography className='labels px-1' variant="h6" gutterBottom >
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
                                    onChange={nombreOnChange}
                                />
                            </Col>
                            <Col>
                                <TextField
                                    className='text-field'
                                    placeholder="Seleccione una Categoría"
                                    variant="outlined"
                                    select
                                    value={categoria}
                                    onChange={categoriaOnChange}
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
                                    onChange={sustanciaOnChange}
                                />
                            </Col>
                            <Col className='px-5 py-1'>
                                <FormControlLabel control={<Checkbox checked={receta} onChange={recetaOnChange} />} label="Receta Obligatoria" />
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
                                    onChange={cantidadOnChange}
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
                                    onChange={precioOnChange}
                                />
                            </Col>
                            <Col>
                                <TextField
                                    className='text-field'
                                    placeholder="Cantidad Disponible"
                                    variant="outlined"
                                    type="number"
                                    value={stock}
                                    onChange={stockOnChange}
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
                                    onChange={descripcionOnChange}
                                />
                            </Col>
                        </Row>
                        <Row>
                            <Col className="d-flex justify-content-center">
                                <Button className='btn px-5 m-3' type="submit" variant="contained">Aceptar</Button>
                                <Button className='btn px-5 m-3' onClick={handlerCancel} variant="contained">Cancelar</Button>
                            </Col>
                        </Row>
                    </Form>
                </Col>
            </Row>

        </div>);
}

export default Editar;