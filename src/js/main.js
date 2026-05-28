import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import '../css/styles.css';

import { iniciarModuloVisitantes, cargarVisitantes } from './visitantes.js';
import { iniciarModuloBitacora, cargarBitacora } from './bitacora.js';
import { iniciarModuloChecklist, cargarChecklist } from './checklist.js';
import { actualizarDashboard } from './dashboard.js';
import { iniciarModuloExposicion, cargarExposicion } from './exposicion.js';
import { mostrarError } from './ui.js';

async function iniciarAplicacion() {
  try {
    iniciarModuloVisitantes();
    iniciarModuloBitacora();
    iniciarModuloChecklist();
    iniciarModuloExposicion();

    await Promise.all([
      cargarVisitantes(),
      cargarBitacora(),
      cargarChecklist(),
      cargarExposicion()
    ]);

    await actualizarDashboard();
  } catch (error) {
    mostrarError('No se pudo iniciar el proyecto', `${error.message}. Verifica que JSON Server este activo con npm run start.`);
  }
}

iniciarAplicacion();
