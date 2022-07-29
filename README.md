# MSDF Font Factory

## Description

- Collection of generated MSDF Font files and Atlas 
- Node script to easily generate your font files with the right settings.
Using [msdf-bmfont-xml](https://github.com/soimy/msdf-bmfont-xml)

## Usage

You can just download the file located in the output folders of any font you want.

To generate a new font just duplicate an existing font folder, rename it with the name you want, add the .ttf file, check the config file and then run :

```bash
node index.js
```

or using npm script

```bash
npm start
```

You'll be asked for a font name, use the name of folder you just created.

You can also directly pass the font name as an argument like this :

```bash
node index.js --name your-font-name
```

or using npm script

```bash
npm start -- --name your-font-name
```

## Note

MSDF Fonts are typically used to render text in WebGL. Here how you can use it with Three.js [github.com/Jam3/three-bmfont-text](https://github.com/Jam3/three-bmfont-text).
