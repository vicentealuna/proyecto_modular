//controlador para agregar products a la lista de productos disponibles
import productosService from '../services/productosService.js';
import { Responser } from '../utils/responser.js';

const {enviarRespuesta } = Responser;

const guardarProducto = (req, res) => {
  const { nombre, precio } = req.body;
  
  if (!nombre || !precio) {
    return enviarRespuesta(res, 400, false, "El nombre y el precio son obligatorios");
  }

  const productoGuardado = productosService.registrarProducto(nombre, precio);
  return enviarRespuesta(res, 201, true, "Producto guardado con éxito", productoGuardado);

};

//controlador para ver los productos disponibles en la lista de productos disponibles

const obtenerProductos = (req, res) => {
  const productos = productosService.obtenerProductos();
  return enviarRespuesta(res, 200, true, "Productos obtenidos con éxito", productos);
};

export default {
  guardarProducto,
  obtenerProductos
};
