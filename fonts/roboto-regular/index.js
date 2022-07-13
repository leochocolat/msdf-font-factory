const path = require('path');
const fs = require('fs');

module.exports = {
    font: path.join(__dirname, './Roboto-Regular.ttf'),
    options: {
        outputPath: path.join(__dirname, './output'),
        filename: 'roboto-regular',
        charset: fs.readFileSync(path.join(__dirname, './charset.txt'), 'utf8'),
        fontSize: 80,
        textureSize: [512, 512],
        fieldType: 'msdf',
        outputType: 'xml',
    }
}