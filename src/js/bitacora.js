import { ENDPOINTS } from './config.js';
import { getData, postData } from './api.js';
import { obtenerDatosFormulario, validarTextoObligatorio } from './validaciones.js';
import { mostrarExito, mostrarError, escapeHtml, normalizarEstado } from './ui.js';
import { actualizarDashboard } from './dashboard.js';

const lista = document.querySelector('#bitacoraLista');
const form = document.querySelector('#bitacoraForm');
const filtroEstado = document.querySelector('#filtroEstado');
const fechaInput = document.querySelector('#fechaPrueba');

let registrosBitacora = [];

export async function cargarBitacora() {
  registrosBitacora = await getData(ENDPOINTS.bitacora);
  renderBitacora();
  return registrosBitacora;
}

function renderBitacora() {
  const filtro = filtroEstado.value;
  const registros = filtro === 'todos'
    ? registrosBitacora
    : registrosBitacora.filter((item) => item.estado === filtro);

  if (!registros.length) {
    lista.innerHTML = '<div class="alert alert-warning">No hay registros para este filtro.</div>';
    return;
  }

  lista.innerHTML = registros.slice().reverse().map((item) => {
    const estadoClass = `status-${normalizarEstado(item.estado)}`;
    return `
      <article class="bug-card prioridad-${escapeHtml(item.prioridad)}">
        <div class="d-flex justify-content-between align-items-start gap-2 flex-wrap">
          <h4 class="h5 mb-1">${escapeHtml(item.tipo)} - ${escapeHtml(item.fecha)}</h4>
          <span class="status-pill ${estadoClass}">${escapeHtml(item.estado)}</span>
        </div>
        <p class="mb-1"><strong>Esperado:</strong> ${escapeHtml(item.esperado)}</p>
        <p class="mb-1"><strong>Obtenido:</strong> ${escapeHtml(item.obtenido)}</p>
        <p class="mb-1"><strong>Error:</strong> ${escapeHtml(item.error)}</p>
        <p class="mb-1"><strong>Correccion:</strong> ${escapeHtml(item.correccion)}</p>
        <p class="small text-muted mb-0"><strong>Prioridad:</strong> ${escapeHtml(item.prioridad)} | <strong>Evidencia:</strong> ${escapeHtml(item.evidencia || 'Pendiente')}</p>
      </article>
    `;
  }).join('');
}

function validarRegistroBitacora(datos) {
  return Boolean(datos.fecha)
    && Boolean(datos.tipo)
    && validarTextoObligatorio(datos.esperado)
    && validarTextoObligatorio(datos.obtenido)
    && validarTextoObligatorio(datos.error)
    && validarTextoObligatorio(datos.correccion)
    && Boolean(datos.estado)
    && Boolean(datos.prioridad);
}

export function iniciarModuloBitacora() {
  fechaInput.valueAsDate = new Date();

  filtroEstado.addEventListener('change', renderBitacora);

  form.addEventListener('submit', async (event) => {
    event.preventDefault();
    const datos = obtenerDatosFormulario(form);

    if (!validarRegistroBitacora(datos)) {
      mostrarError('Bitacora incompleta', 'Completa fecha, tipo, resultados, error, correccion, estado y prioridad.');
      return;
    }

    try {
      await postData(ENDPOINTS.bitacora, datos);
      form.reset();
      fechaInput.valueAsDate = new Date();
      await cargarBitacora();
      await actualizarDashboard();
      mostrarExito('Registro agregado', 'La prueba quedo registrada en la bitacora de JSON Server.');
    } catch (error) {
      mostrarError('No se pudo registrar la prueba', error.message);
    }
  });
}

// TODO ESTUDIANTE OBLIGATORIO:
// Agrega al menos tres registros nuevos de bitacora desde la interfaz.
// Luego copia la informacion mas importante en docs/bitacora-validacion.md.
