import { useEffect, useState } from 'react';
import NavBar from '../navbar/NavBar';
import {Tabla} from '../tabla/Tabla';
import { Botones } from '../Botones/Botones';
import { useHistory } from "react-router-dom";


const Inicio = () => {
   const [items, setItems] = useState([]);
   let history = useHistory()  
   useEffect(() => {
      
     const items = JSON.parse(localStorage.getItem('user'));
     if (items) {
      setItems(items);
      if (items.user.tipo!=1){
         history.push("/compra")
      }
     }
     
   }, []);
 return (
 <div>
 <NavBar></NavBar>

 <div className=''>
    <div className='row'>
    <div className='col-2'><Botones></Botones></div>
    <div className='col-10'><Tabla/></div>    
    </div>
    </div>
 </div>


 );
}
 
export default Inicio;