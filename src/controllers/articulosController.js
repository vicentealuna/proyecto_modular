//controlador para agregar products a la lista de productos disponibles
import productosService from '../services/productosService.js';
import { Responser } from '../utils/responser.js';

const {enviarRespuesta } = Responser;

const guardarProducto = (req, res) => {
  const {
    nombre,
    precio,
    descripcion = '',
    categoria = 'General',
    stock = 0,
    imagen = '',
    tendencia = false
  } = req.body;

  if (!nombre || typeof nombre !== 'string' || !nombre.trim()) {
    return enviarRespuesta(res, 400, false, 'El nombre del producto es obligatorio');
  }

  const precioNumerico = Number(precio);
  const stockNumerico = Number(stock ?? 0);

  if (!Number.isFinite(precioNumerico) || precioNumerico < 0) {
    return enviarRespuesta(res, 400, false, 'El precio debe ser un número válido mayor o igual a 0');
  }

  if (!Number.isFinite(stockNumerico) || stockNumerico < 0) {
    return enviarRespuesta(res, 400, false, 'El stock debe ser un número válido mayor o igual a 0');
  }

  try {
    const productoGuardado = productosService.registrarProducto({
      nombre: nombre.trim(),
      precio: precioNumerico,
      descripcion,
      categoria,
      stock: stockNumerico,
      imagen,
      tendencia: !!tendencia
    });

    return enviarRespuesta(res, 201, true, 'Producto guardado con éxito', productoGuardado);
  } catch (error) {
    return enviarRespuesta(res, 400, false, error.message);
  }
};

//controlador para ver los productos disponibles en la lista de productos disponibles

const obtenerProductos = (req, res) => {
  const productos = productosService.obtenerProductos();
  return enviarRespuesta(res, 200, true, "Productos obtenidos con éxito", productos);
};

const buscarProductoPorId = (req, res) => {
  const { id } = req.params;
  const producto = productosService.buscarPorId(Number(id));

  if (!producto) {
    return enviarRespuesta(res, 404, false, 'Producto no encontrado');
  }

  return enviarRespuesta(res, 200, true, 'Producto encontrado', producto);
};

export default {
  guardarProducto,
  obtenerProductos,
  buscarProductoPorId
};
