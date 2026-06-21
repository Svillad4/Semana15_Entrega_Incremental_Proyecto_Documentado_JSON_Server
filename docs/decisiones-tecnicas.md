# Decisiones técnicas del proyecto

## Decisión 1

Decisión tomada: Usar Vite para el desarrollo local y bundling.

Motivo:Inicio rápido, recarga en caliente y compatibilidad con módulos ES.

Archivo o sección modificada:** `package.json` (scripts `dev` y `start`).

Evidencia: [package.json](package.json)

## Decisión 2

Decisión tomada: Usar JSON Server como API local para persistencia.

Motivo: Permite simular una API REST sin desplegar backend y facilita pruebas y entrega.

Archivo o sección modificada: `db.json`, `src/js/config.js` (ENDPOINTS).

Evidencia: [db.json](db.json) y [src/js/config.js](src/js/config.js)

## Decisión 3

Decisión tomada: Usar Bootstrap para diseño y Chart.js para visualización de datos.

Motivo: Bootstrap agiliza diseño responsive; Chart.js facilita creación de gráficos en el dashboard.

Archivo o sección modificada: `src/css/styles.css`, `src/js/dashboard.js`.

Evidencia: [src/css/styles.css](src/css/styles.css) y [src/js/dashboard.js](src/js/dashboard.js)

## Mejora incremental aplicada

Propuesta y base real: agregar validación avanzada al campo `comentario` (evitar contenido ofensivo o demasiado corto). Hay un TODO en `src/js/validaciones.js` que sugiere esta mejora. Implementarla permite elevar la calidad de los registros en `visitantes`.

Pasos sugeridos para implementar la mejora:

1. Añadir `validarComentario(texto)` en `src/js/validaciones.js`.
2. Invocar la validación en `validarVisitante()` en `src/js/visitantes.js`.
3. Registrar pruebas en la bitácora y añadir evidencias.

Evidencia del punto de partida: [src/js/validaciones.js](src/js/validaciones.js)
