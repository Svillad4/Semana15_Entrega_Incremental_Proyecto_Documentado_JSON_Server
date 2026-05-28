import { ENDPOINTS } from './config.js';
import { getData, putData } from './api.js';
import { obtenerDatosFormulario } from './validaciones.js';
import { mostrarExito, mostrarError } from './ui.js';

const form = document.querySelector('#exposicionForm');

export async function cargarExposicion() {
  const registros = await getData(ENDPOINTS.exposicion);
  const exposicion = registros[0];
  if (!exposicion) return;

  form.nombreProyecto.value = exposicion.nombreProyecto || '';
  form.objetivo.value = exposicion.objetivo || '';
  form.tecnologias.value = exposicion.tecnologias || '';
  form.funcionalidades.value = exposicion.funcionalidades || '';
  form.pruebas.value = exposicion.pruebas || '';
  form.correcciones.value = exposicion.correcciones || '';
  form.aprendizaje.value = exposicion.aprendizaje || '';
}

export function iniciarModuloExposicion() {
  form.addEventListener('submit', async (event) => {
    event.preventDefault();
    const datos = obtenerDatosFormulario(form);
    try {
      await putData(`${ENDPOINTS.exposicion}/1`, { id: 1, ...datos });
      mostrarExito('Guion guardado', 'Tu preparacion de exposicion se actualizo en JSON Server.');
    } catch (error) {
      mostrarError('No se pudo guardar el guion', error.message);
    }
  });
}
