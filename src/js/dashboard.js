import { Chart, BarController, BarElement, CategoryScale, LinearScale, Tooltip, Legend } from 'chart.js';
import { ENDPOINTS } from './config.js';
import { getData } from './api.js';

Chart.register(BarController, BarElement, CategoryScale, LinearScale, Tooltip, Legend);

const contadorVisitantes = document.querySelector('#contadorVisitantes');
const contadorPruebas = document.querySelector('#contadorPruebas');
const contadorChecklist = document.querySelector('#contadorChecklist');
const canvasEstados = document.querySelector('#graficoEstados');

let graficoEstados;

export async function actualizarDashboard() {
  const [visitantes, bitacora, checklist] = await Promise.all([
    getData(ENDPOINTS.visitantes),
    getData(ENDPOINTS.bitacora),
    getData(ENDPOINTS.checklist)
  ]);

  contadorVisitantes.textContent = visitantes.length;
  contadorPruebas.textContent = bitacora.length;
  const porcentaje = checklist.length
    ? Math.round((checklist.filter((item) => item.cumple).length / checklist.length) * 100)
    : 0;
  contadorChecklist.textContent = `${porcentaje}%`;

  const estados = ['pendiente', 'en proceso', 'corregido'];
  const datos = estados.map((estado) => bitacora.filter((item) => item.estado === estado).length);

  if (graficoEstados) {
    graficoEstados.data.datasets[0].data = datos;
    graficoEstados.update();
    return;
  }

  graficoEstados = new Chart(canvasEstados, {
    type: 'bar',
    data: {
      labels: ['Pendientes', 'En proceso', 'Corregidas'],
      datasets: [{
        label: 'Cantidad de pruebas',
        data: datos,
        borderWidth: 1
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: { display: false },
        tooltip: { enabled: true }
      },
      scales: {
        y: { beginAtZero: true, ticks: { precision: 0 } }
      }
    }
  });
}
