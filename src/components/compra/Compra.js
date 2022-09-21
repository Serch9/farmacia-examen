import NavBar from "../navbar/NavBar";

import React, { useState, useEffect } from "react";
import { Botones } from "../Botones/Botones";
import { useHistory } from "react-router-dom";
import { API_PORTAL_URL } from "../../constants";
import { Card,Button } from "react-bootstrap";
import { Carrito } from "../Carrito/Carrito";
const Compra = () => {
  const url = API_PORTAL_URL + "getProductos";
  const [todos, setTodos] = useState();

  const fetchApi = async () => {
    const response = await fetch(url);
    const responseJSON = await response.json();
    setTodos(responseJSON.data);
    console.log(responseJSON.data);
  };
  useEffect(() => {
    fetchApi();
  }, []);

  let history = useHistory();
  return (
    <div>
      <NavBar></NavBar>

      <div >
        <div className="row">
          <div className="col-2">
            <Botones></Botones>
          </div>
          <div className="col-8">
        
            <div className="row ">
            {!todos ? ``:
        todos.map(producto =>{
          return(<> 
          <div className="col-6 my-4 text-center">
          <Card> 
         
      <Card.Body>
        <Card.Title>{producto.nombre}</Card.Title>
        <Card.Text>
          ${producto.precio}
        </Card.Text>
        <Button  onClick={() => history.push("/verCompra/"+producto.id)} variant="primary" className="mx-2">Ver más</Button>
        <Button  onClick={() => history.push("/agregar/"+producto.id)} variant="primary">Agregar</Button>
      </Card.Body></Card>
        </div></>)
        })}
           
         
          </div>
          
          </div>
          <div className="col-2"><Carrito></Carrito></div>
        </div>
      </div>
    </div>
  );
};

export default Compra;
