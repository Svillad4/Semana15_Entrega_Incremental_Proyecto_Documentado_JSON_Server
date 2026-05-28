import { ENDPOINTS } from './config.js';
import { getData, postData } from './api.js';
import { validarNombre, validarCorreo, validarTelefono, obtenerDatosFormulario, marcarFormulario } from './validaciones.js';
import { mostrarExito, mostrarError, escapeHtml } from './ui.js';
import { actualizarDashboard } from './dashboard.js';

const tabla = document.querySelector('#visitantesTabla');
const form = document.querySelector('#visitanteForm');
const recargarBtn = document.querySelector('#recargarVisitantes');

export async function cargarVisitantes() {
  const visitantes = await getData(ENDPOINTS.visitantes);
  tabla.innerHTML = visitantes.map((visitante) => `
    <tr>
      <td>${escapeHtml(visitante.nombre)}</td>
      <td>${escapeHtml(visitante.correo)}</td>
      <td>${escapeHtml(visitante.telefono)}</td>
      <td><span class="badge text-bg-light">${escapeHtml(visitante.interes)}</span></td>
    </tr>
  `).join('');
  return visitantes;
}

function validarVisitante(datos) {
  return validarNombre(datos.nombre)
    && validarCorreo(datos.correo)
    && validarTelefono(datos.telefono)
    && Boolean(datos.interes);
}

export function iniciarModuloVisitantes() {
  form.addEventListener('submit', async (event) => {
    event.preventDefault();
    const datos = obtenerDatosFormulario(form);
    const esValido = validarVisitante(datos);
    marcarFormulario(form, esValido);

    if (!esValido) {
      mostrarError('Revisa el formulario', 'Hay campos incompletos o con formato incorrecto.');
      return;
    }

    try {
      await postData(ENDPOINTS.visitantes, {
        ...datos,
        fechaRegistro: new Date().toISOString()
      });
      form.reset();
      form.classList.remove('was-validated');
      await cargarVisitantes();
      await actualizarDashboard();
      mostrarExito('Registro guardado', 'El visitante fue almacenado en JSON Server.');
    } catch (error) {
      mostrarError('No se pudo guardar', error.message);
    }
  });

  recargarBtn.addEventListener('click', async () => {
    try {
      await cargarVisitantes();
      mostrarExito('Datos actualizados', 'La tabla fue recargada desde JSON Server.');
    } catch (error) {
      mostrarError('Error al recargar', error.message);
    }
  });
}
