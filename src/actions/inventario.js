import Inventario from '../services/inventario.service';


export const listaInventario = ()=>{
    return Inventario.listInventario;
}