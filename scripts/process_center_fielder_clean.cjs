const sharp = require('sharp');
const path = require('path');

async function processCenterFielderClean() {
  const assetsDir = path.join(__dirname, '../src/assets/images');
  const publicDir = path.join(__dirname, '../public');

  // Use the clean base center fielder image without any artificial SVG banner/arch overlays
  const baseImage = path.join(assetsDir, 'ok_cavs_fielder_shallow_1787526562242.jpg');
  const width = 1400;
  const height = 900;

  await sharp(baseImage)
    .resize(width, height, { fit: 'cover' })
    .toFile(path.join(publicDir, 'collegiate_baseball_field.jpg'));

  console.log('Successfully updated public/collegiate_baseball_field.jpg to clean center fielder image without arch!');
}

processCenterFielderClean().catch(console.error);
