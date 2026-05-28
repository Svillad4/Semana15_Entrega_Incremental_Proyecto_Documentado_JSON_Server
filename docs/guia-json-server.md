# Guia rapida de JSON Server

JSON Server permite simular una base de datos local usando el archivo `db.json`.

## Iniciar JSON Server

En este proyecto se inicia automaticamente con:

```bash
npm run start
```

Tambien puedes iniciarlo por separado:

```bash
npm run db
```

## URL principal

```text
http://localhost:3001
```

## Endpoints del proyecto

```text
http://localhost:3001/visitantes
http://localhost:3001/bitacora
http://localhost:3001/checklist
http://localhost:3001/exposicion
```

## Que debes observar

- Si agregas un visitante desde el formulario, debe aparecer en `/visitantes`.
- Si agregas una prueba desde la bitacora, debe aparecer en `/bitacora`.
- Si marcas el checklist, debe actualizarse en `/checklist`.
- Si guardas el guion, debe actualizarse en `/exposicion`.

## Restaurar la base

Si dañas la base de datos o quieres volver al estado inicial, ejecuta:

```bash
npm run reset-db
```
