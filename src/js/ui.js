import Swal from 'sweetalert2';

export function mostrarExito(titulo, texto = '') {
  return Swal.fire({ icon: 'success', title: titulo, text: texto, confirmButtonColor: '#2455a5' });
}

export function mostrarError(titulo, texto = '') {
  return Swal.fire({ icon: 'error', title: titulo, text: texto, confirmButtonColor: '#2455a5' });
}

export function escapeHtml(valor = '') {
  return String(valor)
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#039;');
}

export function formatearFecha(fechaIso) {
  if (!fechaIso) return 'Sin fecha';
  const fecha = new Date(fechaIso);
  if (Number.isNaN(fecha.getTime())) return fechaIso;
  return fecha.toLocaleDateString('es-CO', { year: 'numeric', month: 'short', day: '2-digit' });
}

export function normalizarEstado(estado) {
  return String(estado || '').toLowerCase().replaceAll(' ', '-');
}
