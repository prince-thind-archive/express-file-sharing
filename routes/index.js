const fs = require('fs');
const express = require('express');
const router = express.Router();


router.get('/', function (req, res, next) {

  const files = [];
  fs.readdir('./download', (err, data) => {
    for (const fileOrDir of data) {
      if (fileOrDir == '.gitkeep') continue;
      if (fileOrDir.split(".").length == 1) continue;
      files.push(fileOrDir)
    }
    res.render('index', { files });

  })
});

router.get('/download/:name', function (req, res, next) {
  const name = req.params.name;
  res.download('./download/'+name)
});

module.exports = router;
