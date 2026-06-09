// servicio para registrar productos en productos disponibles
import productosDisponibles from '../db/productos_diponibles.js';

function registrarProducto(producto) {
    const { nombre, precio, descripcion = '', categoria = 'General', stock = 0, imagen = '' } = producto;

    if (!nombre || typeof nombre !== 'string' || !nombre.trim()) {
        throw new Error('El nombre del producto es obligatorio');
    }

    const precioNumerico = Number(precio);
    const stockNumerico = Number(stock ?? 0);

    if (!Number.isFinite(precioNumerico) || precioNumerico < 0) {
        throw new Error('El precio debe ser un número válido mayor o igual a 0');
    }

    if (!Number.isFinite(stockNumerico) || stockNumerico < 0) {
        throw new Error('El stock debe ser un número válido mayor o igual a 0');
    }

    const nuevoProducto = {
        id: productosDisponibles.length
            ? Math.max(...productosDisponibles.map((item) => item.id)) + 1
            : 1,
        nombre: nombre.trim(),
        precio: precioNumerico,
        descripcion,
        categoria,
        stock: stockNumerico,
        imagen,
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