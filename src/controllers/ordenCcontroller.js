import ordenService from '../services/ordenService.js';
import { Responser } from '../utils/responser.js';

const { enviarRespuesta } = Responser;

const crearOrdenController = (req, res) => {
  try {
    const ordenCreada = ordenService.crearOrden(req.body);
    return enviarRespuesta(res, 201, true, 'Orden creada con éxito', ordenCreada);
  } catch (error) {
    return enviarRespuesta(res, 400, false, error.message);
  }
};

const obtenerOrdenesController = (req, res) => {
  try {
    const ordenes = ordenService.obtenerOrdenes();
    return enviarRespuesta(res, 200, true, 'Órdenes obtenidas con éxito', ordenes);
  } catch (error) {
    return enviarRespuesta(res, 500, false, error.message);
  }
};

const buscarOrdenPorIdController = (req, res) => {
  try {
    const orden = ordenService.buscarPorId(Number(req.params.id));

    if (!orden) {
      return enviarRespuesta(res, 404, false, 'Orden no encontrada');
    }

    return enviarRespuesta(res, 200, true, 'Orden encontrada', orden);
  } catch (error) {
    return enviarRespuesta(res, 400, false, error.message);
  }
};

const obtenerPendientesController = (req, res) => {
  try {
    const pendientes = ordenService.obtenerPendientes();
    return enviarRespuesta(res, 200, true, 'Órdenes pendientes obtenidas con éxito', pendientes);
  } catch (error) {
    return enviarRespuesta(res, 500, false, error.message);
  }
};

const despacharOrdenController = (req, res) => {
  try {
    const ordenDespachada = ordenService.despacharOrden(Number(req.params.id));
    return enviarRespuesta(res, 200, true, 'Orden despachada con éxito', ordenDespachada);
  } catch (error) {
    return enviarRespuesta(res, 400, false, error.message);
  }
};

export default {
  crearOrdenController,
  obtenerOrdenesController,
  buscarOrdenPorIdController,
  obtenerPendientesController,
  despacharOrdenController,
};