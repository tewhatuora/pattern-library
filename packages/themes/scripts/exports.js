import fs from 'fs';
import './formats/web.js';
import { OUTPUT_DIR } from './constants.js';

const platforms = {
  web: (themes) => {
    return [
      {
        name: 'index.ts',
        contents: [
          `export { contract } from './contract.css';`,
          themes.reduce((code, theme) => {
            code += `export * as ${theme} from './themes/${theme}/web';\n`;
            return code;
          }, ``),
        ].join(`\n`),
      },
    ];
  },
};

const generateExports = (platform) => {
  const themes = fs
    .readdirSync(`./${OUTPUT_DIR}/themes`, { withFileTypes: true })
    .filter((item) => item.isDirectory())
    .map((item) => item.name);

  const supportFiles = fs
    .readdirSync(`./support/${platform}`, { withFileTypes: true })
    .filter((item) => !item.isDirectory())
    .map((item) => item.name);

  if (supportFiles.length) {
    supportFiles.forEach((supportFile) => {
      // File destination.txt will be created or overwritten by default.
      fs.copyFile(`./support/${platform}/${supportFile}`, `./${OUTPUT_DIR}/${supportFile}`, (err) => {
        if (err) throw err;
      });
    });
  }

  if (typeof platforms[platform] === 'function') {
    const exportFiles = platforms[platform](themes);
    exportFiles.forEach((file) => {
      fs.writeFile(`${OUTPUT_DIR}/${file.name}`, file.contents, (err) => {
        if (err) throw err;
      });
    });
  }
};

export default generateExports;
