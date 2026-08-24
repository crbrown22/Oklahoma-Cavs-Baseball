const sharp = require('sharp');
const path = require('path');
const fs = require('fs');
const https = require('https');

function downloadImage(url, dest) {
  return new Promise((resolve, reject) => {
    const file = fs.createWriteStream(dest);
    https.get(url, (response) => {
      if (response.statusCode === 301 || response.statusCode === 302) {
        return downloadImage(response.headers.location, dest).then(resolve).catch(reject);
      }
      response.pipe(file);
      file.on('finish', () => {
        file.close(() => resolve(dest));
      });
    }).on('error', (err) => {
      fs.unlink(dest, () => reject(err));
    });
  });
}

async function setCleanImages() {
  const publicDir = path.join(__dirname, '../public');
  const tempFile = path.join(__dirname, 'temp_clean_gym.jpg');

  // Clean, high quality Unsplash sports performance & weight training photo (no team logos, pure athletic gym focus)
  const cleanGymUrl = 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=1400&q=80';

  console.log('Downloading clean sports weight training photo...');
  await downloadImage(cleanGymUrl, tempFile);

  const filesToReplace = [
    'val_improvement.jpg',
    'pillar_athletic.jpg',
    'weight_room_training.jpg',
    'gal_weight.jpg'
  ];

  for (const filename of filesToReplace) {
    await sharp(tempFile)
      .resize(1200, 900, { fit: 'cover' })
      .toFile(path.join(publicDir, filename));
    console.log(`Updated public/${filename} with pristine clean photo!`);
  }

  // Clean up temp file
  if (fs.existsSync(tempFile)) {
    fs.unlinkSync(tempFile);
  }
}

setCleanImages().catch(console.error);
