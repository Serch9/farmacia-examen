import axios from 'axios';


const productoEditar = ()=>{
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
        'ruta_imagen' : '$101'
    }
}
const editar = {
    productoEditar
}
export default editar;