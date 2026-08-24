const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

async function processUniqueImages() {
  const assetsDir = path.join(__dirname, '../src/assets/images');
  const publicDir = path.join(__dirname, '../public');

  console.log('Processing unique images...');

  // 1. val_excellence.jpg - American player on field in focused action
  await sharp(path.join(assetsDir, 'player_focused_1787531790916.jpg'))
    .resize(1200, 900, { fit: 'cover' })
    .toFile(path.join(publicDir, 'val_excellence.jpg'));
  console.log('Created public/val_excellence.jpg');

  // 2. val_improvement.jpg - Strength & conditioning athletic training
  await sharp(path.join(assetsDir, 'cavs_weight_training_1787525742825.jpg'))
    .resize(1200, 900, { fit: 'cover' })
    .toFile(path.join(publicDir, 'val_improvement.jpg'));
  console.log('Created public/val_improvement.jpg');

  // 3. val_service.jpg - Leadership & clubhouse brotherhood
  await sharp(path.join(assetsDir, 'cavs_locker_room_1787528908461.jpg'))
    .resize(1200, 900, { fit: 'cover' })
    .toFile(path.join(publicDir, 'val_service.jpg'));
  console.log('Created public/val_service.jpg');

  // 4. gal_field.jpg - Gallery photo for baseball field
  await sharp(path.join(assetsDir, 'ok_cavs_fielder_shallow_1787526562242.jpg'))
    .resize(1200, 900, { fit: 'cover' })
    .toFile(path.join(publicDir, 'gal_field.jpg'));
  console.log('Created public/gal_field.jpg');

  // 5. gal_weight.jpg - Gallery photo for weight room
  await sharp(path.join(assetsDir, 'ok_cavs_weight_room_1787525952847.jpg'))
    .resize(1200, 900, { fit: 'cover' })
    .toFile(path.join(publicDir, 'gal_weight.jpg'));
  console.log('Created public/gal_weight.jpg');

  // 6. gal_indoor.jpg - Gallery photo for indoor batting facility
  await sharp(path.join(assetsDir, 'cavs_batting_cage_1787525767344.jpg'))
    .resize(1200, 900, { fit: 'cover' })
    .toFile(path.join(publicDir, 'gal_indoor.jpg'));
  console.log('Created public/gal_indoor.jpg');

  // 7. gal_lockers.jpg - Gallery photo for locker room
  await sharp(path.join(assetsDir, 'cavs_baseball_locker_room_1787528750438.jpg'))
    .resize(1200, 900, { fit: 'cover' })
    .toFile(path.join(publicDir, 'gal_lockers.jpg'));
  console.log('Created public/gal_lockers.jpg');

  // 8. gal_housing.jpg - Gallery photo for student housing
  await sharp(path.join(assetsDir, 'campus_rock_cleaned_1787529931168.jpg'))
    .resize(1200, 900, { fit: 'cover' })
    .toFile(path.join(publicDir, 'gal_housing.jpg'));
  console.log('Created public/gal_housing.jpg');

  console.log('All unique image assets generated successfully!');
}

processUniqueImages().catch(console.error);
