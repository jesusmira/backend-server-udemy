var express = require('express');

const path = require('path');
const fs = require('fs');

var app = express();

app.get('/:tipo/:img', (req, res, next) => {

    var img = req.params.img;
    var tipo = req.params.tipo;

    var pathImagen = path.resolve(__dirname, `../uploads/${ tipo }/${ img }`);

    if (fs.existsSync(pathImagen)) {
        res.sendFile(pathImagen);
    } else {
        var pathNoImagen = path.resolve(__dirname, '../assets/no-img.jpg');
        res.sendFile(pathNoImagen);
    }

});

module.exports = app;