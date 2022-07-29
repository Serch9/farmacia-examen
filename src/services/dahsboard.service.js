import axios from 'axios';
import Medicamento1 from '../components/imagenes/Productos/1.jpeg';
import Medicamento2 from '../components/imagenes/Productos/2.jpeg';
import Medicamento3 from '../components/imagenes/Productos/3.jpeg';
import Medicamento4 from '../components/imagenes/Productos/4.jpeg';
import Medicamento5 from '../components/imagenes/Productos/5.jpeg';
import Medicamento6 from '../components/imagenes/Productos/6.jpeg';
import Medicamento7 from '../components/imagenes/Productos/7.jpeg';
import Medicamento8 from '../components/imagenes/Productos/8.jpeg';

const listDashBoard = ()=>{
    return [{
        'id': '1',
        'ruta_imagen': Medicamento1,
        'nombre': 'paracetamol1',
        'precio' : '$101',

    },{
        'id': '2',
        'ruta_imagen': Medicamento2,
        'nombre': 'paracetamol2',
        'precio' : '$102',
    },{
        'id': '3',
        'ruta_imagen': Medicamento3,
        'nombre': 'paracetamol3',
        'precio' : '$103',
    },{
        'id': '4',
        'ruta_imagen': Medicamento4,
        'nombre': 'paracetamol4',
        'precio' : '$104',
    },{
        'id': '5',
        'ruta_imagen': Medicamento5,
        'nombre': 'paracetamol2',
        'precio' : '$102',
    },{
        'id': '6',
        'ruta_imagen': Medicamento6,
        'nombre': 'paracetamol3',
        'precio' : '$103',
    },{
        'id': '7',
        'ruta_imagen': Medicamento7,
        'nombre': 'paracetamol4',
        'precio' : '$104',
    },{
        'id': '8',
        'ruta_imagen': Medicamento8,
        'nombre': 'paracetamol2',
        'precio' : '$102',
    }]
}
const dashboard = {
    listDashBoard
}
export default dashboard;