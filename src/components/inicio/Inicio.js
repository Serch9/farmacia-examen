
import NavBar from '../navbar/NavBar';
import {Tabla} from '../tabla/Tabla';
import { Botones } from '../Botones/Botones';


const Inicio = () => {
   
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