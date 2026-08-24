const sharp = require('sharp');
const path = require('path');
const fs = require('fs');

async function removeAllVirginiaBanners() {
  const assetsDir = path.join(__dirname, '../src/assets/images');
  const publicDir = path.join(__dirname, '../public');

  const baseImage = path.join(assetsDir, 'cavs_weight_training_1787525742825.jpg');
  const logoImage = path.join(publicDir, 'ok_cavs_logo.png');

  const width = 1200;
  const height = 900;

  // 1. Crop focusing strictly on the bottom 65% of the photo (the athlete, barbell, and weight plates)
  // Position 'south' forces the crop to focus on the lower region (barbell & lifter)
  const croppedBaseBuffer = await sharp(baseImage)
    .resize(width, height, { fit: 'cover', position: 'south' })
    .toBuffer();

  // 2. Prepare Oklahoma Cavaliers logo
  const logoResizedBuffer = await sharp(logoImage)
    .resize(120, 120, { fit: 'contain' })
    .toBuffer();

  // 3. SVG Overlay: Solid matte dark facility wall covering top 360px (top 40% of canvas)
  // This completely covers any potential Virginia logo or non-Oklahoma banner on the background wall
  const svgOverlay = `
  <svg width="${width}" height="${height}" viewBox="0 0 ${width} ${height}" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <!-- Solid dark facility wall gradient extending down to y=380 with smooth dark fade -->
      <linearGradient id="wallSolidGrad" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stop-color="#0a0a0a" stop-opacity="1.0"/>
        <stop offset="65%" stop-color="#0f0f0f" stop-opacity="1.0"/>
        <stop offset="85%" stop-color="#141414" stop-opacity="0.95"/>
        <stop offset="100%" stop-color="#000000" stop-opacity="0.0"/>
      </linearGradient>

      <!-- Crimson & Gold Accent Bar -->
      <linearGradient id="goldBar" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stop-color="#800020"/>
        <stop offset="30%" stop-color="#ca8a04"/>
        <stop offset="70%" stop-color="#facc15"/>
        <stop offset="100%" stop-color="#800020"/>
      </linearGradient>

      <filter id="shadowFilter" x="-10%" y="-10%" width="120%" height="120%">
        <feDropShadow dx="0" dy="4" stdDeviation="6" flood-color="#000000" flood-opacity="0.9"/>
      </filter>
    </defs>

    <!-- Top 360px Solid Background Wall Mask -->
    <rect x="0" y="0" width="${width}" height="380" fill="url(#wallSolidGrad)" />
    
    <!-- Accent Line separating dark wall from lifting area -->
    <rect x="0" y="376" width="${width}" height="4" fill="url(#goldBar)" />

    <!-- Official Oklahoma Cavaliers Facility Wall Banner -->
    <g transform="translate(30, 25)" filter="url(#shadowFilter)">
      <rect x="0" y="0" width="540" height="72" rx="14" fill="#121212" stroke="#ca8a04" stroke-width="2" />
      <text x="140" y="32" font-family="'Impact', 'Arial Black', sans-serif" font-size="20" font-weight="900" fill="#ffffff" letter-spacing="2">OKLAHOMA CAVALIERS</text>
      <text x="140" y="52" font-family="'Arial', sans-serif" font-size="11" font-weight="bold" fill="#facc15" letter-spacing="3">ST. GREGORY CAMPUS • KROME ATHLETICS</text>
    </g>

    <!-- Top Right Program Badge -->
    <g transform="translate(${width - 320}, 25)" filter="url(#shadowFilter)">
      <rect x="0" y="0" width="290" height="42" rx="10" fill="#800020" stroke="#facc15" stroke-width="1.5" />
      <text x="145" y="26" text-anchor="middle" font-family="'Arial Black', sans-serif" font-size="12" font-weight="900" fill="#ffffff" letter-spacing="2">OKCAVS STRENGTH &amp; CONDITIONING</text>
    </g>
  </svg>
  `;

  const filesToProcess = [
    'val_improvement.jpg',
    'pillar_athletic.jpg',
    'weight_room_training.jpg',
    'gal_weight.jpg'
  ];

  for (const filename of filesToProcess) {
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
      .toFile(path.join(publicDir, filename));

    console.log(`Successfully generated public/${filename} with 100% clean Oklahoma Cavaliers branding!`);
  }
}

removeAllVirginiaBanners().catch(console.error);
