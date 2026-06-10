// servicio para registrar productos en productos disponibles
import productosDisponibles from '../db/productos_diponibles.js';

function registrarProducto(producto) {
    const nuevoProducto = {
        ...producto,
        id: productosDisponibles.length + 1,
    };

    productosDisponibles.push(nuevoProducto);
    return nuevoProducto;
}

const obtenerProductos = () => {
  return productosDisponibles;
};

const buscarPorId = (id) => {
  return productosDisponibles.find(producto => producto.id === id);
};

export default {
    registrarProducto,
    obtenerProductos,
    buscarPorId,
};