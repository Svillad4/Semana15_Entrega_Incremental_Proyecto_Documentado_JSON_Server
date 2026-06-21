# README de entrega del proyecto

Completa este archivo antes de entregar tu actividad en Moodle. Este documento debe permitir que otra persona entienda, instale, ejecute y revise tu proyecto.

## 1. Nombre del proyecto

Escribe aqui el nombre final de tu proyecto.
# README de entrega

## 1. Nombre del proyecto

Feria Rural Digital - Versión documentada

## 2. Integrantes

- Santiago Villada

## 3. Descripción general

Proyecto para registrar visitantes a una feria rural, llevar una bitácora técnica de pruebas, un checklist de requisitos y un dashboard de seguimiento. Usa JSON Server como API local.

## 4. Objetivo del proyecto

Proveer una versión funcional y documentada que permita validar la interacción con una API local (JSON Server), controlar entradas de visitantes y registrar pruebas técnicas.

## 5. Tecnologías utilizadas

| Tecnología | Uso dentro del proyecto |
|---|---|
| HTML | Estructura de la interfaz (index.html) |
| CSS | Estilos principales en `src/css/styles.css` |
| JavaScript | Lógica modular en `src/js/` (formularios, API, UI) |
| Vite | Entorno de desarrollo y bundling (script `dev`) |
| Bootstrap | Componentes y diseño responsive |
| Bootstrap Icons | Iconografía en la interfaz |
| SweetAlert2 | Mensajes de éxito/error al usuario |
| Chart.js | Gráficos en el dashboard |
| JSON Server | API REST falsa para persistencia (`db.json`) |

## 6. Instalación

1. Instalar dependencias:

```bash
npm install
```

2. Iniciar el proyecto (JSON Server + Vite):

```bash
npm run start
```

Observación: Si hay conflictos de dependencias, use `npm install --legacy-peer-deps`.

## 7. Ejecución

Comando:

```bash
npm run start
```

URLs útiles:

- Sitio web: http://localhost:5173 (Vite por defecto)
- API JSON Server: http://localhost:3001

## 8. Estructura de carpetas

| Carpeta o archivo | Función |
|---|---|
| index.html | Entrada principal del sitio |
| src/css/styles.css | Estilos personalizados |
| src/js/ | Lógica modular: `api.js`, `validaciones.js`, `visitantes.js`, `bitacora.js`, etc. |
| db.json | Base de datos usada por JSON Server |
| docs/ | Documentación y guías del proyecto |
| evidencias/ | Carpeta sugerida para capturas y pruebas |

## 9. Funcionalidades implementadas

1. Registro de visitantes con formulario.
2. Validaciones de nombre, correo y teléfono en el cliente.
3. Persistencia en JSON Server (`visitantes`, `bitacora`, `checklist`).
4. Módulo de bitácora para registrar pruebas y correcciones.
5. Checklist editable y dashboard con gráfico de estados.

## 10. Validaciones implementadas

| Campo o módulo | Validación aplicada |
|---|---|
| Nombre | Texto, mínimo 3 caracteres (`validarNombre`) |
| Correo | Formato RFC básico con regex (`validarCorreo`) |
| Teléfono | Dígitos, 10 caracteres (`validarTelefono`) |
| Interés | Campo requerido (no vacío) |
| Bitácora | Campos de texto obligatorios mínimo 4 caracteres (`validarTextoObligatorio`) |

## 11. Pruebas realizadas

| Prueba | Resultado |
|---|---|
| Formulario vacío | Prevented: se marcan campos inválidos en cliente |
| Correo inválido | Prevented: regex impide envío |
| Teléfono inválido | Prevented: requiere 10 dígitos |
| Guardado en JSON Server | OK: registros en `db.json` (ver `visitantes` y `bitacora`) |
| Consola del navegador | No se detectaron errores críticos en el código fuente (manejo de errores con `mostrarError`) |
| Vista responsive | OK: estilos adaptativos vía Bootstrap y media queries en `styles.css` |

## 12. Errores encontrados y correcciones aplicadas

| Error o hallazgo | Corrección aplicada | Evidencia |
|---|---|---|
| Formulario: campos vacíos permitían envío (detectado en pruebas) | Validación en `validarVisitante()` y `marcarFormulario()` (cliente) | evidencias/pruebas/formulario-validacion.png |
| Guardado en API: verificar endpoint local | Confirmado endpoint en `config.js` y `package.json` (script `db`) | evidencias/json-server/api-visitantes.png |
| Dashboard: comprobar conteos y gráfico | `dashboard.js` muestra contadores y gráfico (Chart.js) | evidencias/pruebas/grafico-dashboard.png |

## 13. Mejora incremental aplicada

Propuesta de mejora implementable: validar contenido del campo `comentario` para evitar comentarios demasiado cortos o ofensivos. Se sugiere agregar una función en `validaciones.js` y registrar la prueba en la bitácora.

## 14. Evidencias (sugeridas)

| Evidencia | Ruta |
|---|---|
| Consola sin errores | evidencias/pruebas/consola-no-errores.png |
| Formulario validado | evidencias/pruebas/formulario-validacion.png |
| JSON Server respuesta | evidencias/json-server/api-visitantes.png |
| Vista responsive móvil | evidencias/responsive/mobile-view.png |
| Bitácora con pruebas | evidencias/bitacora/bitacora-registros.png |
| Checklist actualizado | evidencias/checklist/checklist-actualizado.png |

## 15. Preparación de exposición

- Mostrar objetivo y necesidades.
- Demostración: registrar visitante, abrir `db.json`, mostrar bitácora y checklist.
- Mostrar dashboard y gráfico.
- Resumir pruebas y correcciones.

## 16. Reflexión final

- Aprendi a ordenar evidencias y explicar decisiones técnicas.
- Aprendi a identificar inputs que requieren más control (ej. comentarios).
- Mejoraria en la siguiente versión: validación de texto avanzado y autenticación simple para editar bitácora.
- Que aprendiste al documentar el proyecto?
