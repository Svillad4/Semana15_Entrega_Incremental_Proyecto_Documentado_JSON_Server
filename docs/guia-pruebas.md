# Guia de pruebas

Usa esta guia para comprobar que el proyecto funciona correctamente.

## Prueba 1: ejecucion del proyecto

1. Abre VS Code.
2. Ejecuta `npm install`.
3. Ejecuta `npm run start`.
4. Abre `http://localhost:5173`.
5. Toma captura del sitio funcionando.

## Prueba 2: JSON Server

1. Abre `http://localhost:3001`.
2. Entra a `/visitantes`.
3. Entra a `/bitacora`.
4. Toma captura de la API funcionando.

## Prueba 3: formulario

1. Intenta enviar el formulario vacio.
2. Escribe un correo incorrecto.
3. Escribe un telefono con menos de 10 digitos.
4. Registra un visitante correcto.
5. Verifica que aparezca en la tabla y en JSON Server.

## Prueba 4: bitacora

1. Agrega un registro de prueba.
2. Filtra por estado.
3. Verifica que se actualice el dashboard.

## Prueba 5: checklist

1. Marca un requisito cumplido.
2. Agrega la ruta de evidencia.
3. Verifica que suba el porcentaje del dashboard.

## Prueba 6: responsive

1. Abre herramientas de desarrollador.
2. Activa vista movil.
3. Revisa menu, formularios, tablas y tarjetas.
4. Toma captura.

## Prueba 7: consola

1. Abre la consola del navegador.
2. Revisa si hay errores criticos.
3. Toma captura.
