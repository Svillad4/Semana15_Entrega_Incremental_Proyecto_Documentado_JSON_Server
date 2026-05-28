import fs from 'fs';
import path from 'path';

const folders = [
  'evidencias/consola',
  'evidencias/pruebas',
  'evidencias/json-server',
  'evidencias/responsive',
  'evidencias/exposicion',
  'evidencias/antes-despues'
];

for (const folder of folders) {
  fs.mkdirSync(path.resolve(folder), { recursive: true });
  const readme = path.resolve(folder, 'README.md');
  if (!fs.existsSync(readme)) {
    fs.writeFileSync(readme, `# ${folder}\n\nGuarda aqui las capturas correspondientes a esta categoria.\n`, 'utf8');
  }
}

console.log('Carpetas de evidencias verificadas.');
