import fs from 'fs';
import path from 'path';

const requiredFiles = [
  'README.md',
  'README_ENTREGA.md',
  'package.json',
  'db.json',
  'index.html',
  'src/js/main.js',
  'src/js/api.js',
  'src/js/bitacora.js',
  'src/js/checklist.js',
  'src/js/exposicion.js',
  'src/css/styles.css',
  'docs/bitacora-validacion.md',
  'docs/checklist-requisitos.md',
  'docs/guion-exposicion.md',
  'docs/informe-entrega.md'
];

let ok = true;
console.log('Revision rapida del proyecto Semana 15');
for (const file of requiredFiles) {
  const exists = fs.existsSync(path.resolve(file));
  console.log(`${exists ? 'OK' : 'FALTA'} ${file}`);
  if (!exists) ok = false;
}

try {
  const db = JSON.parse(fs.readFileSync('db.json', 'utf8'));
  for (const key of ['visitantes', 'bitacora', 'checklist', 'exposicion']) {
    if (!Array.isArray(db[key])) {
      console.log(`FALTA coleccion ${key} en db.json`);
      ok = false;
    }
  }
} catch (error) {
  console.log('ERROR db.json no es JSON valido:', error.message);
  ok = false;
}

console.log(ok ? 'Revision completada: estructura minima correcta.' : 'Revision completada: hay elementos pendientes.');
process.exit(ok ? 0 : 1);
