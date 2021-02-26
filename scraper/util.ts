const fs = require('fs');

export const createDir = (name: string | undefined, location: string): void => {
  const dir = `${location}/${name}`;
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir);
    console.log(`${dir} is created successfully.`);
  } else {
    console.log('The directory already exists.');
  }
}
