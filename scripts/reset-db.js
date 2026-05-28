import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const projectRoot = path.resolve(__dirname, '..');
const seedPath = path.join(projectRoot, 'scripts', 'seed-db.json');
const dbPath = path.join(projectRoot, 'db.json');

fs.copyFileSync(seedPath, dbPath);
console.log('Base de datos restaurada desde scripts/seed-db.json');
