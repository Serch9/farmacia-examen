import React from "react";
import { Button } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import "./Botones.css"


const buttonHeight = {height:'50ex'}
export const Botones = () => {
    let history = useHistory()  
    return(
 <div className="container-fluid">
    <div className="row ">
        <Button  onClick={() => history.push("/compra")} style={buttonHeight} variant ="outline-primary">Compra</Button>
    </div>
    <div className="row">
        <Button  onClick={() => history.push("/inicio")} style={buttonHeight} variant ="outline-dark">Inventario</Button>
    </div>
</div>

    );  
}