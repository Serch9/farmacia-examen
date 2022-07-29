import axios from 'axios';
import Medicamento1 from '../components/imagenes/Productos/1.jpeg';
import Medicamento2 from '../components/imagenes/Productos/2.jpeg';
import Medicamento3 from '../components/imagenes/Productos/3.jpeg';
import Medicamento4 from '../components/imagenes/Productos/4.jpeg';
import Medicamento5 from '../components/imagenes/Productos/5.jpeg';
import Medicamento6 from '../components/imagenes/Productos/6.jpeg';
import Medicamento7 from '../components/imagenes/Productos/7.jpeg';
import Medicamento8 from '../components/imagenes/Productos/8.jpeg';
const producto = ()=>{
    return {
        'id': '110',
        'nombre': "Aurax",
        'sustancia_activa': 'Loratadina',
        'categoria' : 'Medicamento',
        'precio' : '$280',
        'existencia' : '30',
        'porcion' : '$101',
        'estatus' : '1',
        'receta_obligatoria' : 'S',
        'descripcion' : 'Desinflamante cutáneo para zonas sensibles',
        'ruta_imagen' : Medicamento1
    }
}
const verProducto = {
    producto
}
export default verProducto;