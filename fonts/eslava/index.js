const path = require('path');
const fs = require('fs');

module.exports = {
    font: path.join(__dirname, './eslava.ttf'),
    options: {
        outputPath: path.join(__dirname, './output'),
        filename: 'eslava',
        charset: fs.readFileSync(path.join(__dirname, './charset.txt'), 'utf8'),
        fontSize: 70,
        // textureSize: [512, 512],
        fieldType: 'msdf',
        outputType: 'json',
        // smartSize: true
    }
}