const fs = require('fs');

export const createDir = (name: string | undefined, location: string): void => {
  const dir = `${location}/${name}`;
  if (!fs.existsSync(dir) && name) {
    fs.mkdirSync(dir);
    console.log(`${dir} is created successfully.`);
  } else {
    console.log('The directory already exists.');
  }
};

export const createFile = (
  path: string | undefined,
  content: string | undefined
): void => {
  fs.writeFile(path, content, (err: any) => {
    if (err) throw err;
    console.log(`${path} is created successfully.`);
  });
};
