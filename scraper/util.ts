const fs = require('fs');

export const createDir = (name: string, location: string) => {
    const dir = `${location}/${name}`;
    if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir);
    }
}