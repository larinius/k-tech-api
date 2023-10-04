const fs = require('fs');
const path = require('path');
require('dotenv').config();

function generateRandomString(length) {
  const characters = 'abcdefghijklmnopqrstuvwxyz0123456789';
  let randomString = '';
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    randomString += characters[randomIndex];
  }
  return randomString;
}

function saveFile(file) {
  const destinationFolder = process.env.UPLOAD_PATH || 'uploads/images';
  const fileExtension = path.extname(file.originalname).toLowerCase();
  const randomFileName = generateRandomString(6) + fileExtension;
  const filePath = path.join(destinationFolder, randomFileName);

  try {
    fs.writeFileSync(filePath, file.buffer);
    return randomFileName;
  } catch (err) {
    throw new Error('Failed to save the file');
  }
}

module.exports = {
  saveFile,
};
