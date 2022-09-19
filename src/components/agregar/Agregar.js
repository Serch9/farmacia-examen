import React, { useState, useEffect } from "react";
import { Button } from "react-bootstrap";
import { useHistory, useParams } from "react-router-dom";
import { API_PORTAL_URL } from "../../constants";
import NavBar from "../navbar/NavBar";
import { Botones } from "../Botones/Botones";


export const Agregar = () => {
  const { id } = useParams();
  const [counter, setCounter] = useState(0);
  const [todos, setTodos] = useState();
  const url = API_PORTAL_URL + "/getOne/" + id;
  const fetchApi = async () => {
    const response = await fetch(url);
    console.log(response);
    const responseJSON = await response.json();
    console.log(responseJSON.data[0]);
    setTodos(responseJSON.data[0])
  };
  

 

  useEffect(() => {
    fetchApi();
  }, []);

  //increase counter
  const increase = () => {
    setCounter((count) => count + 1);
  };

  //decrease counter
  const decrease = () => {
    if (counter > 0) {
      setCounter((count) => count - 1);
    }
  };
  //reset counter
  const reset = () => {
    setCounter(0);
  };

  return (
    <div>
      <NavBar></NavBar>
      <div className="row">
        <div className="col-2">
          <Botones></Botones>
        </div>
        <div className="col-8">
          
          <div className="row">
            <div className="col-6 my-2">
            <img src='https://mdbootstrap.com/img/new/slides/041.webp' className='img-fluid shadow-4' alt='...' />
            </div>
            <div className="col-6 my-2">
                <h2>{!todos ? ``:todos.nombre}</h2>
                <div className="text-center">${!todos ? ``:todos.precio}</div>
                <div>{!todos ? ``:todos.descripcion}</div>
             
              <div className="btn__container">

                <button className="control__btn btn btn-primary" onClick={increase}>
                  +
                </button>
                <span className="counter__output text-center mx-2">{counter}</span>
                <button className="control__btn btn btn-primary" onClick={decrease}>
                  -
                </button>
                <br></br>
                <button className="reset my-2 btn btn-primary " >
                  Agregar
                </button>
                <button className="reset  my-2 mx-3 btn btn-primary" onClick={reset}>
                  Cancelar
                </button>
               
              </div>
            </div>
          </div>
        </div>
        <div className="col-2">Carrito</div>
      </div>
    </div>
  );
};
