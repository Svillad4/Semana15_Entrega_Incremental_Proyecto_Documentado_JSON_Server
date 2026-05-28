# Semana 15 - Entrega incremental del proyecto documentado y validado

## 1. Bienvenido a esta actividad

Esta guia fue creada para acompanarte en la tercera actividad de la Semana 15. En esta entrega ya no basta con tener una pagina que se vea bien o que funcione parcialmente. Ahora debes demostrar que tu proyecto puede ser entendido, ejecutado, probado, corregido, documentado y presentado de manera tecnica.

Trabajaras con un proyecto web llamado **Feria Rural Digital - Version documentada**. El proyecto usa HTML, CSS, JavaScript, Vite, Bootstrap, SweetAlert2, Chart.js y JSON Server. Tu tarea sera ejecutarlo, revisar su funcionamiento, completar la documentacion tecnica, registrar pruebas en una bitacora, actualizar el checklist de requisitos y preparar una exposicion breve.

La idea es que aprendas a entregar un proyecto como se haria en un contexto mas profesional: con codigo, evidencias, pruebas, documentacion y explicacion tecnica.

---

## 2. Que aprenderas en esta actividad

Al finalizar esta actividad deberas ser capaz de:

1. Ejecutar un proyecto web con librerias usando Node.js y npm.
2. Usar JSON Server como una base de datos local simulada.
3. Revisar si un proyecto funciona correctamente.
4. Registrar pruebas reales en una bitacora de validacion y correccion.
5. Completar una documentacion tecnica basica del proyecto.
6. Actualizar un checklist de requisitos con evidencias.
7. Preparar una exposicion tecnica clara sobre tu trabajo.
8. Entregar una version incremental funcional y organizada.

---

## 3. Que significa entrega incremental

Una **entrega incremental** es una nueva version del proyecto que agrega o mejora algo respecto a la version anterior. No se trata de borrar todo y empezar de cero. Se trata de tomar lo que ya existe, hacerlo mejor, agregar una funcionalidad, corregir problemas y demostrar que la mejora funciona.

En esta actividad el incremento principal es el modulo de **seguimiento tecnico del proyecto**, que incluye:

- Registro de visitantes.
- Bitacora de validacion y correccion.
- Checklist de requisitos.
- Dashboard de seguimiento.
- Preparacion de exposicion.
- Documentacion tecnica del proyecto.

---

## 4. Tecnologias y librerias del proyecto

Este proyecto usa varias herramientas que encontraras en proyectos web reales.

| Herramienta | Para que sirve en este proyecto |
|---|---|
| HTML | Define la estructura de la pagina. |
| CSS | Mejora la apariencia visual y el diseno responsive. |
| JavaScript | Controla formularios, validaciones, API y actualizacion de datos. |
| Vite | Permite ejecutar el proyecto web en un servidor local moderno. |
| Bootstrap | Facilita diseno responsive y componentes visuales. |
| Bootstrap Icons | Agrega iconos a botones, tarjetas y secciones. |
| SweetAlert2 | Muestra alertas visuales mas claras para el usuario. |
| Chart.js | Genera graficos para el dashboard de seguimiento. |
| JSON Server | Simula una base de datos local usando el archivo `db.json`. |
| Concurrently | Ejecuta Vite y JSON Server al mismo tiempo. |

---

## 5. Estructura del proyecto

Antes de modificar el codigo, revisa la estructura general:

```text
Semana15_Entrega_Incremental_Proyecto_Documentado_JSON_Server/
|
|-- README.md
|-- README_ENTREGA.md
|-- package.json
|-- db.json
|-- index.html
|
|-- src/
|   |-- css/
|   |   |-- styles.css
|   |
|   |-- js/
|       |-- main.js
|       |-- config.js
|       |-- api.js
|       |-- validaciones.js
|       |-- ui.js
|       |-- visitantes.js
|       |-- bitacora.js
|       |-- checklist.js
|       |-- dashboard.js
|       |-- exposicion.js
|
|-- docs/
|   |-- lectura-clase.md
|   |-- bitacora-validacion.md
|   |-- checklist-requisitos.md
|   |-- decisiones-tecnicas.md
|   |-- guion-exposicion.md
|   |-- informe-entrega.md
|   |-- guia-pruebas.md
|   |-- guia-json-server.md
|   |-- rubrica.md
|   |-- glosario.md
|
|-- evidencias/
|   |-- consola/
|   |-- pruebas/
|   |-- json-server/
|   |-- responsive/
|   |-- exposicion/
|   |-- antes-despues/
|
|-- scripts/
    |-- check-project.js
    |-- reset-db.js
    |-- create-evidence-folders.js
    |-- seed-db.json
```

---

## 6. Primer paso: instalar las dependencias

Abre la carpeta del proyecto en VS Code. Luego abre una terminal dentro de VS Code y ejecuta:

```bash
npm install
```

Este comando descarga las librerias necesarias para que el proyecto funcione.

Si aparece una carpeta llamada `node_modules`, significa que las dependencias se instalaron correctamente.

---

## 7. Segundo paso: ejecutar el proyecto

Despues de instalar las dependencias, ejecuta:

```bash
npm run start
```

Este comando inicia dos cosas al mismo tiempo:

1. El sitio web con Vite.
2. La base de datos local con JSON Server.

Cuando funcione correctamente, deberias poder abrir:

```text
http://localhost:5173
```

Y tambien deberias poder revisar la API local en:

```text
http://localhost:3001
```

Prueba estos endpoints en el navegador:

```text
http://localhost:3001/visitantes
http://localhost:3001/bitacora
http://localhost:3001/checklist
http://localhost:3001/exposicion
```

---

## 8. Que debes revisar en el proyecto

Explora el sitio y revisa estas secciones:

### Registro de visitantes

Permite guardar visitantes interesados en la feria. Debes probar que:

- El nombre no este vacio.
- El correo tenga formato valido.
- El telefono tenga 10 digitos.
- El interes principal sea seleccionado.
- El registro aparezca en la tabla.
- El registro quede guardado en JSON Server.

### Bitacora de validacion y correccion

Permite registrar pruebas tecnicas. Debes agregar minimo tres registros nuevos con:

- Fecha.
- Tipo de prueba.
- Resultado esperado.
- Resultado obtenido.
- Error encontrado.
- Correccion aplicada.
- Estado.
- Prioridad.
- Ruta de evidencia.

### Checklist de requisitos

Debes marcar los requisitos que realmente cumpliste. No marques un requisito si no tienes evidencia.

### Dashboard

Muestra resumen de visitantes, pruebas registradas, porcentaje de checklist y grafico de estados.

### Preparacion de exposicion

Te ayuda a organizar lo que explicaras al presentar el proyecto.

---

## 9. Tu trabajo obligatorio

Debes realizar las siguientes tareas:

### Tarea 1: Ejecutar y comprobar el proyecto

Ejecuta el proyecto con:

```bash
npm run start
```

Toma evidencia de:

- Proyecto abierto en el navegador.
- JSON Server funcionando.
- Consola del navegador.

Guarda las capturas en la carpeta correspondiente dentro de `evidencias/`.

### Tarea 2: Registrar pruebas en la bitacora

Agrega minimo tres pruebas desde la interfaz del proyecto. Las pruebas pueden ser:

- Formulario vacio.
- Correo invalido.
- Telefono con menos de 10 digitos.
- Registro correcto en JSON Server.
- Revision de consola.
- Revision responsive.
- Revision de documentacion.

Luego completa tambien el archivo:

```text
docs/bitacora-validacion.md
```

### Tarea 3: Completar el checklist de requisitos

Marca en la interfaz los requisitos cumplidos y escribe la evidencia correspondiente.

Luego completa el archivo:

```text
docs/checklist-requisitos.md
```

### Tarea 4: Completar la documentacion tecnica

Diligencia el archivo:

```text
README_ENTREGA.md
```

Alli debes explicar:

- Nombre del proyecto.
- Descripcion.
- Objetivo.
- Tecnologias usadas.
- Instalacion.
- Ejecucion.
- Estructura de carpetas.
- Funcionalidades.
- Validaciones.
- Pruebas.
- Correcciones.
- Evidencias.

### Tarea 5: Preparar la exposicion

Completa el formulario de exposicion dentro del sitio y tambien el archivo:

```text
docs/guion-exposicion.md
```

Tu exposicion debe explicar de forma breve:

1. Que proyecto entregas.
2. Que problema o necesidad atiende.
3. Que tecnologias usaste.
4. Que funcionalidades tiene.
5. Que pruebas realizaste.
6. Que errores encontraste.
7. Que correcciones aplicaste.
8. Que aprendiste.

### Tarea 6: Aplicar al menos una mejora incremental

Debes aplicar una mejora real en el proyecto. Puedes elegir una de estas opciones:

- Mejorar una validacion del formulario.
- Agregar una nueva prueba a la bitacora.
- Mejorar el diseno responsive.
- Agregar un nuevo requisito al checklist en `db.json`.
- Mejorar el texto de una alerta.
- Organizar mejor una seccion visual.
- Agregar una explicacion adicional en la documentacion.

Registra esa mejora en:

```text
docs/decisiones-tecnicas.md
```

---

## 10. Comandos utiles

### Instalar librerias

```bash
npm install
```

### Ejecutar proyecto y base de datos

```bash
npm run start
```

### Revisar estructura minima del proyecto

```bash
npm run check
```

### Restaurar la base de datos original

```bash
npm run reset-db
```

### Crear o verificar carpetas de evidencias

```bash
npm run evidencias
```

---

## 11. Evidencias que debes entregar

Debes guardar capturas en estas carpetas:

| Evidencia | Carpeta sugerida |
|---|---|
| Consola sin errores criticos | `evidencias/consola/` |
| Formulario validando datos | `evidencias/pruebas/` |
| Registro guardado correctamente | `evidencias/pruebas/` |
| JSON Server mostrando datos | `evidencias/json-server/` |
| Vista responsive | `evidencias/responsive/` |
| Exposicion o guion | `evidencias/exposicion/` |
| Comparacion antes/despues | `evidencias/antes-despues/` |

---

## 12. Que debes entregar en Moodle

Entrega una carpeta comprimida `.zip` o un enlace al repositorio. El proyecto debe incluir:

1. Codigo del proyecto.
2. `README_ENTREGA.md` completo.
3. `docs/bitacora-validacion.md` diligenciado.
4. `docs/checklist-requisitos.md` diligenciado.
5. `docs/guion-exposicion.md` diligenciado.
6. `docs/decisiones-tecnicas.md` diligenciado.
7. Carpeta `evidencias/` con capturas.
8. Proyecto ejecutable con `npm run start`.

---

## 13. Antes de entregar, revisa

- [ ] Ejecute `npm install` sin errores.
- [ ] Ejecute `npm run start` y abrio el sitio.
- [ ] JSON Server funciono en `http://localhost:3001`.
- [ ] Probe el formulario.
- [ ] Registre minimo tres pruebas en la bitacora.
- [ ] Complete `README_ENTREGA.md`.
- [ ] Complete `docs/bitacora-validacion.md`.
- [ ] Complete `docs/checklist-requisitos.md`.
- [ ] Complete `docs/guion-exposicion.md`.
- [ ] Tome capturas de evidencia.
- [ ] Revise la consola del navegador.
- [ ] Prepare una explicacion breve para exponer.

---

## 14. Mensaje final

Esta actividad busca que aprendas una idea clave: un proyecto de software no se entrega solamente con codigo. Tambien necesita pruebas, evidencias, documentacion y explicacion tecnica. Cuando sabes documentar lo que hiciste, registrar errores y justificar tus decisiones, demuestras que entiendes el proyecto y que puedes mejorarlo de forma profesional.
