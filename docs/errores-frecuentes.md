# Errores frecuentes y posibles soluciones

## 1. `npm` no se reconoce

Posible causa: Node.js no esta instalado o no quedo agregado al PATH.

Solucion: instala Node.js y vuelve a abrir VS Code.

## 2. El proyecto no abre en `localhost:5173`

Posible causa: Vite no inicio correctamente.

Solucion: revisa la terminal y ejecuta nuevamente:

```bash
npm run start
```

## 3. JSON Server no responde en `localhost:3001`

Posible causa: la base de datos no inicio o el puerto esta ocupado.

Solucion: cierra otras terminales y ejecuta nuevamente:

```bash
npm run start
```

## 4. El formulario no guarda datos

Posibles causas:

- JSON Server no esta activo.
- El formulario tiene datos invalidos.
- Hay error en consola.

Solucion: revisa la consola y verifica `http://localhost:3001/visitantes`.

## 5. La consola muestra errores CORS o fetch

Posible causa: el proyecto intenta conectarse a JSON Server y este no esta activo.

Solucion: verifica que `npm run start` este ejecutando Vite y JSON Server al mismo tiempo.

## 6. Se dano la base de datos

Solucion: ejecuta:

```bash
npm run reset-db
```
