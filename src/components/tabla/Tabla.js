
import React, { useState, useEffect } from "react";
import { API_PORTAL_URL } from "../../constants";
import { useHistory } from "react-router-dom";
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2'

import axios from "axios";
import { SettingsSystemDaydreamTwoTone } from "@mui/icons-material";
const colorHeader = { backgroundColor: "#4F83F1", color: "white" };


export function Tabla() {
  
  const url = API_PORTAL_URL + "getProductos";
  const [todos, setTodos] = useState();
  
  const fetchApi = async () => {
    const response = await fetch(url);
   
    const responseJSON = await response.json()
    setTodos(responseJSON.data)
   
  };
  const peticionDelete= async(id)=>{
    Swal.fire({
      title: '¿Estás seguro?',
      text: "No será posible deshacer la acción",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Sí, borrar',
      cancelButtonText:'No, cancelar'
    }).then( async (result) =>  {
      if (result.isConfirmed) {
        await axios.delete(API_PORTAL_URL+"delete/"+id)
        .then(response => {console.log(id +"borrado")
        window.location.reload(false);
      })
      }
    })
    
  }

  useEffect(() => {
    fetchApi();
  }, []);

 

 let history = useHistory()  
  return (
    <div className="text-center">
      <Button
        className="btn btn-primary my-2"
        onClick={() => history.push("/alta")}
      >
        Nuevo producto
      </Button>
      <table className="table table-borderer text-center">
        <thead style={colorHeader}>
          <tr>
            <th>Id</th>
            <th>Estatus</th>
            <th>Producto</th>
            <th>Sustancia activa</th>
            <th>Categoría</th>
            <th>Precio</th>
            <th>Stock</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
        {!todos ? ``:
        todos.map(producto =>{
        { var activo = "Inactivo";
          if(
          producto.estatus =="1"
        ){
          activo ="Activo"
        }}
        return(
          
          <tr data-id={producto.id} key={producto.id} className="text-center">
          <td >{producto.id}</td>
          <td>{activo}</td>
          <td>{producto.nombre}</td>
          <td>{producto.sustancia_activa}</td>
          <td>{producto.categoria}</td>
          <td>${producto.precio}</td>
          <td>{producto.existencia}</td>
          <td><Button><Link to={`/ver/`+producto.id}>ver</Link></Button><Button className="btn btn-dark mx-2" ><Link to={`/update/`+producto.id}>editar</Link></Button><Button onClick={()=>peticionDelete(producto.id)}>borrar</Button></td>
          </tr>
        )
       })}
        </tbody>
      </table>
      
    </div>
  );
}
