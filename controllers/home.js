const express = require('express');
const models = require('../models');
const path = require ('path');
var app = express ();
const router = express.Router();

app.use('/static', express.static(__dirname + '/public'));

app.get('/', function (req, res) {
  //res.sendFile(path.join(__dirname+'/../justdesserts/public/index.html'));
  res.sendFile(path.join(__dirname+'/index.html'));
});



router.post('/', (req, res) => {
  res.json({
    msg: "Successful POST to '/' route"
  });
});

router.put('/:id', (req, res) => {
  res.json({
    msg: "Successful PUT to '/' route",
    id: req.params.id
  });
});

router.delete('/:id', (req, res) => {
  res.json({
    msg: "Successful DELETE to '/' route",
    id: req.params.id
  });
});

app.listen(8000);
module.exports = router;
