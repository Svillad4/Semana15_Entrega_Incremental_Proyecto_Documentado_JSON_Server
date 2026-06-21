# Guion de exposición técnica

## 1. Saludo e introducción

Hola, presentamos "Feria Rural Digital - Versión documentada". Objetivo: mostrar una versión validada y documentada del registro de visitantes y herramientas de verificación técnica.

## 2. Problema o necesidad

Permitir el registro organizado de visitantes en ferias y mantener evidencia técnica (pruebas, correcciones, checklist) para control de calidad.

## 3. Tecnologías utilizadas

- HTML: estructura del sitio.
- CSS: estilos y media queries en `src/css/styles.css`.
- JavaScript: lógica modular (`src/js/`).
- Vite: desarrollo local y bundling.
- JSON Server: API local y persistencia (`db.json`).
- Bootstrap: diseño responsive y componentes.
- SweetAlert2: mensajes al usuario.
- Chart.js: gráfico del dashboard.

## 4. Demostración funcional

1. Abrir la página y mostrar el formulario de visitantes.
2. Registrar un visitante válido y mostrar `db.json` actualizado.
3. Mostrar bitácora, editar checklist y ver el dashboard con el gráfico.

## 5. Validaciones y pruebas

- Validaciones cliente: nombre (min 3), correo (regex), teléfono (10 dígitos), interés requerido.
- Pruebas: formulario vacío, correo inválido, guardado en JSON Server, render del gráfico (ver `docs/bitacora-validacion.md`).

## 6. Errores y correcciones

1. Campos vacíos en formulario -> agregado `was-validated` y bloqueo de envío.
2. Confirmar endpoint JSON Server -> `config.js` contiene `ENDPOINTS`.

## 7. Documentación y evidencias

- README de entrega: [README_ENTREGA.md](README_ENTREGA.md)
- Bitácora y pruebas: `docs/bitacora-validacion.md` y `db.json` (entrada `bitacora`).
- Checklist: `docs/checklist-requisitos.md` y módulo `src/js/checklist.js`.
- Capturas sugeridas en `evidencias/` (ver README).

## 8. Aprendizaje final

Explicar en 1 minuto qué se aprendió: modularizar JS, validar datos en cliente, usar JSON Server para pruebas rápidas.

## Preparación de exposición

Nombre del proyecto:
Feria Rural Digital - Versión documentada

Objetivo:
Mostrar una versión funcional y documentada para registrar visitantes y validar la persistencia con JSON Server.

Tecnologías utilizadas:
HTML, CSS (Bootstrap), JavaScript, Vite, JSON Server, SweetAlert2, Chart.js.

Funcionalidades:
- Registro de visitantes con validaciones.
- Bitácora para pruebas y correcciones.
- Checklist editable y dashboard con gráfico.

Pruebas realizadas:
- Validación de formulario (nombre, correo, teléfono).
- Guardado y verificación en `db.json` vía JSON Server.
- Render del dashboard y conteos de pruebas.

Correcciones aplicadas:

- Se corrigieron las validaciones del formulario para evitar campos vacíos.
- Se verificó la conexión con JSON Server y los endpoints de la API.
- Se organizaron las evidencias y la documentación del proyecto.


Aprendí la importancia de probar un proyecto antes de entregarlo, documentar los cambios y guardar evidencias del funcionamiento. También aprendí a trabajar con JSON Server y a organizar mejor un proyecto web.


Aprendí a validar formularios, usar una API local, registrar pruebas y documentar un proyecto de forma más profesional.


Mejoraría el diseño visual, agregaría más validaciones y haría un dashboard con más estadísticas y filtros.
