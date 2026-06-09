// servicio para registrar productos en productos disponibles
import productosDisponibles from '../db/productos_diponibles.js';
import productosVendidos from '../db/productos_vendidos.js';
import { Responser } from '../utils/responser.js';  

function registrarProducto(nombre, precio) {
    const nuevoProducto = {
        id: productosDisponibles.length + 1,
        nombre,
        precio
    };
    productosDisponibles.push(nuevoProducto);
    return nuevoProducto;
}

const obtenerProductos = () => {
  return productosDisponibles;
};

export default {
    registrarProducto,
    obtenerProductos
};