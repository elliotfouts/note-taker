const path = require('path');
const express = require('express');

const router = express.Router();

router.get('/notes', (req, res) => {
  const filePath = path.join(__dirname, '/../public/notes.html');
  res.sendFile(filePath);
});

router.get('*', (req, res) => {
  const filePath = path.join(__dirname, '/../public/index.html');
  res.sendFile(filePath);
});

module.exports = router;
