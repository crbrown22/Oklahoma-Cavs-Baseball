const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

async function processCenterFielder() {
  const assetsDir = path.join(__dirname, '../src/assets/images');
  const publicDir = path.join(__dirname, '../public');

  // Use the fielder image
  const baseImage = path.join(assetsDir, 'ok_cavs_fielder_shallow_1787526562242.jpg');
  const width = 1400;
  const height = 900;

  const svgOverlay = `
  <svg width="${width}" height="${height}" viewBox="0 0 ${width} ${height}" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="cavsCrimson" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#800020" stop-opacity="0.95"/>
        <stop offset="100%" stop-color="#4a0012" stop-opacity="0.98"/>
      </linearGradient>
      <filter id="badgeShadow" x="-10%" y="-10%" width="120%" height="120%">
        <feDropShadow dx="0" dy="4" stdDeviation="6" flood-color="#000000" flood-opacity="0.8"/>
      </filter>
    </defs>

    <!-- CAVALIERS Jersey Wordmark for Center Fielder -->
    <g transform="translate(${width/2}, ${height * 0.52})" filter="url(#badgeShadow)">
      <!-- Arched jersey chest banner -->
      <path d="M -270,-48 Q 0,-68 270,-48 L 260,38 Q 0,18 -260,38 Z" fill="url(#cavsCrimson)" stroke="#facc15" stroke-width="3.5" rx="8" />
      
      <!-- CAVALIERS Wordmark -->
      <text x="0" y="6" 
            text-anchor="middle" 
            font-family="'Impact', 'Arial Black', sans-serif" 
            font-size="50" 
            font-weight="900" 
            letter-spacing="6" 
            fill="#ffffff" 
            stroke="#1c1917" 
            stroke-width="2" 
            paint-order="stroke fill">CAVALIERS</text>
      
      <!-- Center Field Designation -->
      <text x="0" y="26" 
            text-anchor="middle" 
            font-family="'Arial', sans-serif" 
            font-size="12" 
            font-weight="bold" 
            letter-spacing="4" 
            fill="#facc15">CENTER FIELD • OKLAHOMA BASEBALL</text>
    </g>

    <!-- Top Left Program Crest -->
    <g transform="translate(40, 40)" filter="url(#badgeShadow)">
      <rect x="0" y="0" width="280" height="46" rx="10" fill="#0f0f0f" opacity="0.88" stroke="#facc15" stroke-width="1.5" />
      <text x="140" y="28" text-anchor="middle" font-family="'Arial Black', sans-serif" font-size="13" font-weight="900" fill="#facc15" letter-spacing="2">OKLAHOMA CAVALIERS • CF</text>
    </g>
  </svg>
  `;

  await sharp(baseImage)
    .resize(width, height, { fit: 'cover' })
    .composite([
      {
        input: Buffer.from(svgOverlay),
        top: 0,
        left: 0,
      }
    ])
    .toFile(path.join(publicDir, 'collegiate_baseball_field.jpg'));

  console.log('Successfully created public/collegiate_baseball_field.jpg with Center Fielder Cavaliers uniform!');
}

processCenterFielder().catch(console.error);
