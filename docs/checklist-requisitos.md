# Checklist de requisitos

Marca los requisitos según evidencia en el repositorio y código. Si falta ejecución, indico la evidencia sugerida.

| Requisito | Cumple | Evidencia |
|---|---:|---|
| El proyecto ejecuta correctamente con `npm run start`. | Parcial (script presente) | Ejecutar `npm run start` y capturar terminal: `evidencias/pruebas/npm-start.png` |
| JSON Server responde en `http://localhost:3001`. | Parcial (configuración presente) | Captura de GET a `/visitantes`: `evidencias/json-server/api-visitantes.png` |
| El formulario valida campos obligatorios. | Sí (validaciones en `src/js/validaciones.js`) | `evidencias/pruebas/formulario-validacion.png` |
| Los datos se guardan en `db.json` mediante la API. | Sí (endpoints y `postData` implementados) | `evidencias/json-server/api-visitantes.png` |
| La bitácora registra pruebas y correcciones. | Sí (módulo y `db.json` con registros) | `evidencias/bitacora/bitacora-registros.png` |
| El README de entrega está completo. | Sí (este archivo actualizado) | `README_ENTREGA.md` |
| La consola no muestra errores críticos. | Parcial (manejo de errores en UI) | Abrir consola y capturar: `evidencias/pruebas/consola-no-errores.png` |
| El diseño se adapta a vista móvil. | Sí (Bootstrap + media queries) | `evidencias/responsive/mobile-view.png` |
| El guion de exposición está preparado. | Sí (docs/guion-exposicion.md) | `docs/guion-exposicion.md` |
| Las evidencias no estan organizadas

## Observaciones finales

Como mejora para una siguiente versión, se podrían agregar más validaciones, mejorar el diseño responsive y añadir nuevas funciones al dashboard y los reportes.
