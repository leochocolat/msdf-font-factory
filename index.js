const generateBMFont = require('msdf-bmfont-xml');
const fs = require('fs');
const yargs = require('yargs');
const readline = require('readline');

const fonts = require('./fonts/index.js');

const { name } = yargs
    .usage('Usage: --name <name>')
    .option('n', { alias: 'name', describe: 'Font name', type: 'string', demandOption: false })
    .argv;

const interface = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

if (!name) {
    interface.question('Font name : ', start);
} else {
    start(name);
}

function start(name) {
    interface.close();

    console.log(`\nGenerating font ${name}...`);

    try {
        generateBMFont(fonts[name].font, fonts[name].options, (error, textures, font) => {
            if (error) throw error;
    
            const { outputPath, filename } = fonts[name].options;
    
            textures.forEach((texture) => {
                fs.writeFile(`${outputPath}/${filename}.png`, texture.texture, (err) => {
                    if (err) throw err;
                    else return 1;
                });
            });
    
            fs.writeFile(`${outputPath}/${filename}.fnt`, font.data, (err) => {
                if (err) throw err;
                else return 1;
            });
        });
    } catch (err) {
        console.error(err);
    }
}


