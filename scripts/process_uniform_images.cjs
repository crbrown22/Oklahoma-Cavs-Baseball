const sharp = require('sharp');
const fs = require('fs');

async function processBaseballImage() {
  const width = 1200;
  const height = 900;

  // Create an SVG overlay that places an authentic "CAVALIERS" jersey wordmark and team crest
  const svgOverlay = `
  <svg width="${width}" height="${height}" viewBox="0 0 ${width} ${height}" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="jerseyGlow" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#800020" stop-opacity="0.95"/>
        <stop offset="100%" stop-color="#4a0012" stop-opacity="0.98"/>
      </linearGradient>
      <filter id="shadow" x="-10%" y="-10%" width="120%" height="120%">
        <feDropShadow dx="0" dy="4" stdDeviation="6" flood-color="#000000" flood-opacity="0.8"/>
      </filter>
    </defs>

    <!-- Custom uniform overlay covering chest area cleanly -->
    <!-- CAVALIERS Athletic Jersey Wordmark Banner -->
    <g transform="translate(${width/2}, ${height * 0.58})" filter="url(#shadow)">
      <!-- Jersey chest arc background pill -->
      <path d="M -260,-45 Q 0,-65 260,-45 L 250,35 Q 0,15 -250,35 Z" fill="url(#jerseyGlow)" stroke="#facc15" stroke-width="3.5" rx="8" />
      
      <!-- CAVALIERS Text -->
      <text x="0" y="5" 
            text-anchor="middle" 
            font-family="'Impact', 'Arial Black', sans-serif" 
            font-size="48" 
            font-weight="900" 
            letter-spacing="6" 
            fill="#ffffff" 
            stroke="#1c1917" 
            stroke-width="2" 
            paint-order="stroke fill">CAVALIERS</text>
      
      <!-- Baseball stitching detail line -->
      <text x="0" y="24" 
            text-anchor="middle" 
            font-family="'Arial', sans-serif" 
            font-size="11" 
            font-weight="bold" 
            letter-spacing="4" 
            fill="#facc15">OKLAHOMA BASEBALL</text>
    </g>

    <!-- Top Left Official Program Stamp -->
    <g transform="translate(40, 40)" filter="url(#shadow)">
      <rect x="0" y="0" width="220" height="42" rx="10" fill="#0f0f0f" opacity="0.85" stroke="#facc15" stroke-width="1.5" />
      <text x="110" y="26" text-anchor="middle" font-family="'Arial Black', sans-serif" font-size="13" font-weight="900" fill="#facc15" letter-spacing="2">OKLAHOMA CAVALIERS</text>
    </g>
  </svg>
  `;

  // Composite over the base photo
  await sharp('public/val_intl_2.jpg')
    .resize(width, height, { fit: 'cover' })
    .composite([
      {
        input: Buffer.from(svgOverlay),
        top: 0,
        left: 0,
      }
    ])
    .toFile('public/pillar_baseball.jpg');

  console.log('Processed pillar_baseball.jpg successfully');
}

async function processLeadershipImage() {
  const width = 1200;
  const height = 900;

  const svgOverlay = `
  <svg width="${width}" height="${height}" viewBox="0 0 ${width} ${height}" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="jerseyGlowLeadership" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#800020" stop-opacity="0.95"/>
        <stop offset="100%" stop-color="#1e1b4b" stop-opacity="0.98"/>
      </linearGradient>
      <filter id="shadowLd" x="-10%" y="-10%" width="120%" height="120%">
        <feDropShadow dx="0" dy="4" stdDeviation="6" flood-color="#000000" flood-opacity="0.8"/>
      </filter>
    </defs>

    <!-- CAVALIERS Jersey Wordmark for Leadership -->
    <g transform="translate(${width/2}, ${height * 0.55})" filter="url(#shadowLd)">
      <path d="M -260,-45 Q 0,-65 260,-45 L 250,35 Q 0,15 -250,35 Z" fill="url(#jerseyGlowLeadership)" stroke="#facc15" stroke-width="3.5" />
      
      <text x="0" y="5" 
            text-anchor="middle" 
            font-family="'Impact', 'Arial Black', sans-serif" 
            font-size="48" 
            font-weight="900" 
            letter-spacing="6" 
            fill="#ffffff" 
            stroke="#1c1917" 
            stroke-width="2" 
            paint-order="stroke fill">CAVALIERS</text>
      
      <text x="0" y="24" 
            text-anchor="middle" 
            font-family="'Arial', sans-serif" 
            font-size="11" 
            font-weight="bold" 
            letter-spacing="4" 
            fill="#facc15">LEADERSHIP &amp; CHARACTER</text>
    </g>

    <!-- Program Stamp -->
    <g transform="translate(40, 40)" filter="url(#shadowLd)">
      <rect x="0" y="0" width="220" height="42" rx="10" fill="#0f0f0f" opacity="0.85" stroke="#facc15" stroke-width="1.5" />
      <text x="110" y="26" text-anchor="middle" font-family="'Arial Black', sans-serif" font-size="13" font-weight="900" fill="#facc15" letter-spacing="2">OKLAHOMA CAVALIERS</text>
    </g>
  </svg>
  `;

  await sharp('public/val_intl_3.jpg')
    .resize(width, height, { fit: 'cover' })
    .composite([
      {
        input: Buffer.from(svgOverlay),
        top: 0,
        left: 0,
      }
    ])
    .toFile('public/pillar_leadership.jpg');

  console.log('Processed pillar_leadership.jpg successfully');
}

async function processPlayerOnFieldImage() {
  const width = 1200;
  const height = 900;

  const svgOverlay = `
  <svg width="${width}" height="${height}" viewBox="0 0 ${width} ${height}" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="jerseyGlowField" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#800020" stop-opacity="0.95"/>
        <stop offset="100%" stop-color="#4a0012" stop-opacity="0.98"/>
      </linearGradient>
      <filter id="shadowField" x="-10%" y="-10%" width="120%" height="120%">
        <feDropShadow dx="0" dy="4" stdDeviation="6" flood-color="#000000" flood-opacity="0.8"/>
      </filter>
    </defs>

    <!-- CAVALIERS Jersey Wordmark for Player on Field -->
    <g transform="translate(${width/2}, ${height * 0.58})" filter="url(#shadowField)">
      <path d="M -260,-45 Q 0,-65 260,-45 L 250,35 Q 0,15 -250,35 Z" fill="url(#jerseyGlowField)" stroke="#facc15" stroke-width="3.5" />
      
      <text x="0" y="5" 
            text-anchor="middle" 
            font-family="'Impact', 'Arial Black', sans-serif" 
            font-size="48" 
            font-weight="900" 
            letter-spacing="6" 
            fill="#ffffff" 
            stroke="#1c1917" 
            stroke-width="2" 
            paint-order="stroke fill">CAVALIERS</text>
      
      <text x="0" y="24" 
            text-anchor="middle" 
            font-family="'Arial', sans-serif" 
            font-size="11" 
            font-weight="bold" 
            letter-spacing="4" 
            fill="#facc15">OKLAHOMA BASEBALL</text>
    </g>
  </svg>
  `;

  await sharp('public/val_intl_1.jpg')
    .resize(width, height, { fit: 'cover' })
    .composite([
      {
        input: Buffer.from(svgOverlay),
        top: 0,
        left: 0,
      }
    ])
    .toFile('public/player_on_field.jpg');

  console.log('Processed player_on_field.jpg successfully');
}

async function main() {
  await processBaseballImage();
  await processLeadershipImage();
  await processPlayerOnFieldImage();
}

main().catch(console.error);
