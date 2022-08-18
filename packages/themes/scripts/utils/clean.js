import fs from 'fs';

const clean = (dir) => {
  if (fs.existsSync(dir)) {
    return fs.rmSync(dir, { recursive: true });
  }
};

export default clean;
