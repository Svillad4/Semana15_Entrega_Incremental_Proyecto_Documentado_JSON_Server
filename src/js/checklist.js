import { ENDPOINTS } from './config.js';
import { getData, patchData } from './api.js';
import { mostrarError, escapeHtml } from './ui.js';
import { actualizarDashboard } from './dashboard.js';

const contenedor = document.querySelector('#checklistLista');
let checklist = [];

export async function cargarChecklist() {
  checklist = await getData(ENDPOINTS.checklist);
  renderChecklist();
  return checklist;
}

function renderChecklist() {
  contenedor.innerHTML = checklist.map((item) => `
    <div class="col-md-6 col-xl-4">
      <article class="check-item ${item.cumple ? 'completed' : ''}">
        <div class="form-check form-switch">
          <input class="form-check-input check-toggle" type="checkbox" role="switch" id="check-${item.id}" data-id="${item.id}" ${item.cumple ? 'checked' : ''}>
          <label class="form-check-label fw-bold" for="check-${item.id}">${escapeHtml(item.requisito)}</label>
        </div>
        <label class="small text-muted mt-3" for="evidencia-${item.id}">Ruta o descripcion de evidencia</label>
        <input id="evidencia-${item.id}" class="form-control form-control-sm evidencia-input" data-id="${item.id}" type="text" value="${escapeHtml(item.evidencia || '')}" placeholder="Ej: evidencias/consola/sin-errores.png">
      </article>
    </div>
  `).join('');
}

async function actualizarItem(id, cambios) {
  await patchData(`${ENDPOINTS.checklist}/${id}`, cambios);
  checklist = checklist.map((item) => Number(item.id) === Number(id) ? { ...item, ...cambios } : item);
  renderChecklist();
  await actualizarDashboard();
}

export function iniciarModuloChecklist() {
  contenedor.addEventListener('change', async (event) => {
    const target = event.target;
    if (!target.classList.contains('check-toggle')) return;
    try {
      await actualizarItem(target.dataset.id, { cumple: target.checked });
    } catch (error) {
      mostrarError('No se pudo actualizar el checklist', error.message);
    }
  });

  contenedor.addEventListener('blur', async (event) => {
    const target = event.target;
    if (!target.classList.contains('evidencia-input')) return;
    try {
      await actualizarItem(target.dataset.id, { evidencia: target.value.trim() });
    } catch (error) {
      mostrarError('No se pudo guardar la evidencia', error.message);
    }
  }, true);
}
