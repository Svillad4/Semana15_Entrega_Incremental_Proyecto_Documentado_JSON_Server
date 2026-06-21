# Bitácora de validación y corrección

Registros reales tomados del proyecto (mínimo 3):

| Fecha | Tipo de prueba | Resultado esperado | Resultado obtenido | Error encontrado | Corrección aplicada | Estado | Prioridad | Evidencia |
|---|---|---|---|---|---|---|---|---|
| 2025-06-15 | Formulario | No guardar campos vacíos | Se mostraron alertas de validación | Sin error crítico | Revisión de `validarVisitante()` y `marcarFormulario()` | corregido | media | evidencias/pruebas/formulario-validacion.png |
| 2025-06-15 | Base de datos | Guardar registro en API | Registro aparece en `/visitantes` | Sin error crítico | Verificado endpoint `http://localhost:3001/visitantes` en `config.js` | corregido | alta | evidencias/json-server/api-visitantes.png |
| 2025-06-16 | Dashboard | Mostrar contadores y gráfico | Contadores y gráfico renderizaron correctamente | Sin error crítico | `dashboard.js` muestra datos con Chart.js | corregido | baja | evidencias/pruebas/grafico-dashboard.png |

## Reflexión breve

1. ¿Cuál fue la prueba más importante que realizaste?

La validación del formulario y el guardado en JSON Server: asegura que los datos de visitantes se persistan.

2. ¿Qué error o hallazgo te ayudó a mejorar el proyecto?

Detectar campos vacíos y formatos inválidos en el formulario (correo y teléfono).

3. ¿Cómo comprobaste que la corrección funcionó?

Al enviar formularios de prueba y verificar que no se guardan entradas inválidas y que los registros válidos aparecen en `db.json`.
