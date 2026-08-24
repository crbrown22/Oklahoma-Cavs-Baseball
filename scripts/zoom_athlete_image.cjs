const sharp = require('sharp');
const path = require('path');
const fs = require('fs');

async function zoomAthleteImage() {
  const assetsDir = path.join(__dirname, '../src/assets/images');
  const publicDir = path.join(__dirname, '../public');

  const srcImgPath = path.join(assetsDir, 'cavs_weight_training_1787525742825.jpg');
  
  if (!fs.existsSync(srcImgPath)) {
    console.error('Source image not found:', srcImgPath);
    return;
  }

  const meta = await sharp(srcImgPath).metadata();
  console.log('Original image dimensions:', meta.width, meta.height);

  // Crop tightly on the athlete lifting weights in the lower 60% of the image.
  // Starting at 38% from the top eliminates the background wall banner completely.
  const extractRegion = {
    left: Math.round(meta.width * 0.08),
    top: Math.round(meta.height * 0.38), 
    width: Math.round(meta.width * 0.84),
    height: Math.round(meta.height * 0.62)
  };

  console.log('Tight crop region on athlete:', extractRegion);

  const croppedBuffer = await sharp(srcImgPath)
    .extract(extractRegion)
    .resize(1200, 900, { fit: 'cover' })
    .toBuffer();

  const targetFiles = [
    'val_improvement.jpg',
    'pillar_athletic.jpg',
    'weight_room_training.jpg',
    'gal_weight.jpg'
  ];

  for (const filename of targetFiles) {
    fs.writeFileSync(path.join(publicDir, filename), croppedBuffer);
    console.log(`Successfully saved tightly zoomed athlete image to public/${filename}`);
  }
}

zoomAthleteImage().catch(console.error);
