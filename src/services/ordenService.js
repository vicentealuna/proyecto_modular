import ordenes from '../db/orden.db.js';
import productosDisponibles from '../db/productos_diponibles.js';

// Crea una nueva orden de compra validando productos, stock y total.
const crearOrden = (orden = {}) => {
  const productos = Array.isArray(orden.productos) ? orden.productos : [];

  if (productos.length === 0) {
    throw new Error('La orden debe incluir al menos un producto');
  }

  const productosProcesados = productos.map((item) => {
    const producto = productosDisponibles.find((p) => p.id === Number(item.productoId));

    if (!producto) {
      throw new Error(`Producto con id ${item.productoId} no encontrado`);
    }

    const cantidad = Number(item.cantidad ?? 1);

    if (!Number.isFinite(cantidad) || cantidad < 1) {
      throw new Error('La cantidad de cada producto debe ser un número válido mayor o igual a 1');
    }

    if (producto.stock < cantidad) {
      throw new Error(`Stock insuficiente para ${producto.nombre}`);
    }

    producto.stock -= cantidad;

    return {
      productoId: producto.id,
      nombre: producto.nombre,
      precio: producto.precio,
      cantidad,
      subtotal: producto.precio * cantidad,
    };
  });

  const total = productosProcesados.reduce((sum, item) => sum + item.subtotal, 0);

  const nuevaOrden = {
    id: ordenes.length + 1,
    cliente: orden.cliente ?? 'Cliente anónimo',
    productos: productosProcesados,
    total,
    estado: orden.estado ?? 'Pendiente',
    fecha: orden.fecha ?? new Date().toISOString(),
  };

  ordenes.push(nuevaOrden);

  return nuevaOrden;
};

// ontener ordenes.
const obtenerOrdenes = () => ordenes;

// Buscar por id .
const buscarPorId = (id) => ordenes.find((orden) => orden.id === Number(id));

// Filtrar por pendientes .
const obtenerPendientes = () => ordenes.filter((orden) => orden.estado === 'Pendiente');

// Cambia r estado.
const despacharOrden = (id) => {
  const ordenEncontrada = buscarPorId(id);

  if (!ordenEncontrada) {
    throw new Error('Orden no encontrada');
  }

  ordenEncontrada.estado = 'Despachado';
  return ordenEncontrada;
};

export default {
  crearOrden,
  obtenerOrdenes,
  buscarPorId,
  obtenerPendientes,
  despacharOrden,
};