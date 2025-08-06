const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const svgPath = path.join(__dirname, 'images', 'icon.svg');
const pngPath = path.join(__dirname, 'images', 'icon.png');

// Read the SVG file
const svgBuffer = fs.readFileSync(svgPath);

// Convert SVG to PNG at 128x128
sharp(svgBuffer)
  .resize(128, 128)
  .png()
  .toFile(pngPath)
  .then(() => {
    console.log('Successfully converted icon.svg to icon.png (128x128)');
  })
  .catch(err => {
    console.error('Error converting SVG to PNG:', err);
    process.exit(1);
  });