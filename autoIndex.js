const log = console.log;
import fs from 'fs';

const needIndexs = [
  'src/NirvanaNodeSdk',
];

const readdir = (path) => {
  let indexContent = '';
  const importList = [];
  const exportList = [];
  let items = fs.readdirSync(path).filter(item => {
    if (item.split('.').length === 1) return true;
    if (item.slice(-3) === '.js' && item !== 'index.js') return true;
  });
  items.forEach(item => {
    const filePath = `${path}/${item}`;
    if (fs.statSync(filePath).isDirectory()) {
      importList.push(`import * as ${item} from './${item}';`);
      exportList.push(`export {${item}};`);
      readdir(filePath);
    } else {
      const itemNoExt = item.replace('.js', '');
      exportList.push(`export * from './${itemNoExt}';`);
    }
  });
  indexContent += importList.join('\n');
  indexContent += '\n';
  indexContent += exportList.join('\n');
  fs.writeFileSync(`${path}/index.js`, indexContent);
};

readdir('./src/NirvanaNodeSdk');

