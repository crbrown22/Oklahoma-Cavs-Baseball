const sharp = require('sharp');
const path = require('path');
const fs = require('fs');

async function processCleanImprovementImage() {
  const assetsDir = path.join(__dirname, '../src/assets/images');
  const publicDir = path.join(__dirname, '../public');

  const baseImage = path.join(assetsDir, 'cavs_weight_training_1787525742825.jpg');
  const logoImage = path.join(publicDir, 'ok_cavs_logo.png');

  const width = 1200;
  const height = 900;

  // 1. Crop focusing on the lower 85% of the image to remove top wall background
  // First resize base image to 1400x1000 with position 'south' (bottom-heavy focus)
  const croppedBaseBuffer = await sharp(baseImage)
    .resize(width, height, { fit: 'cover', position: 'south' })
    .toBuffer();

  // 2. Prepare logo composite
  const logoResizedBuffer = await sharp(logoImage)
    .resize(110, 110, { fit: 'contain' })
    .toBuffer();

  // 3. SVG overlay to completely cover any remaining background wall / top header area
  const svgOverlay = `
  <svg width="${width}" height="${height}" viewBox="0 0 ${width} ${height}" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <!-- Top background solid dark gradient covering upper 25% of image completely -->
      <linearGradient id="topCoverGrad" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stop-color="#070707" stop-opacity="0.98"/>
        <stop offset="60%" stop-color="#0f0f0f" stop-opacity="0.92"/>
        <stop offset="100%" stop-color="#000000" stop-opacity="0.0"/>
      </linearGradient>

      <linearGradient id="cavsGoldGrad" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stop-color="#fde047"/>
        <stop offset="50%" stop-color="#eab308"/>
        <stop offset="100%" stop-color="#ca8a04"/>
      </linearGradient>

      <filter id="darkDropShadow" x="-10%" y="-10%" width="120%" height="120%">
        <feDropShadow dx="0" dy="4" stdDeviation="6" flood-color="#000000" flood-opacity="0.95"/>
      </filter>
    </defs>

    <!-- Upper 220px gradient cover rectangle -->
    <rect x="0" y="0" width="${width}" height="240" fill="url(#topCoverGrad)" />

    <!-- Oklahoma Cavaliers Facility Wall Banner -->
    <g transform="translate(30, 25)" filter="url(#darkDropShadow)">
      <rect x="0" y="0" width="460" height="64" rx="12" fill="#0f0f0f" stroke="#ca8a04" stroke-width="2" opacity="0.95" />
      <text x="130" y="28" font-family="'Impact', 'Arial Black', sans-serif" font-size="18" font-weight="900" fill="#ffffff" letter-spacing="2">OKLAHOMA CAVALIERS</text>
      <text x="130" y="48" font-family="'Arial', sans-serif" font-size="11" font-weight="bold" fill="#facc15" letter-spacing="3">KROME STRENGTH &amp; CONDITIONING</text>
    </g>
  </svg>
  `;

  // Composite cropped base + SVG wall banner + Oklahoma Cavaliers crest logo
  await sharp(croppedBaseBuffer)
    .composite([
      {
        input: Buffer.from(svgOverlay),
        top: 0,
        left: 0
      },
      {
        input: logoResizedBuffer,
        top: 27,
        left: 42
      }
    ])
    .toFile(path.join(publicDir, 'val_improvement.jpg'));

  console.log('Successfully created public/val_improvement.jpg without Virginia University background logo!');

  // Also update pillar_athletic.jpg, weight_room_training.jpg, gal_weight.jpg to be consistent
  await sharp(croppedBaseBuffer)
    .composite([
      {
        input: Buffer.from(svgOverlay),
        top: 0,
        left: 0
      },
      {
        input: logoResizedBuffer,
        top: 27,
        left: 42
      }
    ])
    .toFile(path.join(publicDir, 'pillar_athletic.jpg'));

  await sharp(croppedBaseBuffer)
    .composite([
      {
        input: Buffer.from(svgOverlay),
        top: 0,
        left: 0
      },
      {
        input: logoResizedBuffer,
        top: 27,
        left: 42
      }
    ])
    .toFile(path.join(publicDir, 'weight_room_training.jpg'));

  await sharp(croppedBaseBuffer)
    .composite([
      {
        input: Buffer.from(svgOverlay),
        top: 0,
        left: 0
      },
      {
        input: logoResizedBuffer,
        top: 27,
        left: 42
      }
    ])
    .toFile(path.join(publicDir, 'gal_weight.jpg'));

  console.log('Updated pillar_athletic.jpg, weight_room_training.jpg, gal_weight.jpg cleanly!');
}

processCleanImprovementImage().catch(console.error);
