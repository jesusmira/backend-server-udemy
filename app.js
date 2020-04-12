// Requires
var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');

// Inicializar variables
var app = express();

// Body Parser

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json())

// Importar rutas
var appRoutes = require('./routes/app');
var usuarioRoutes = require('./routes/usuario');
var loginRoutes = require('./routes/login');

// Para quitar los warning que estan deprecados, y se quitaran en nuevas versiones
mongoose.set('useUnifiedTopology', true);
mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);

// Conexión a la base de datos
mongoose.connection.openUri('mongodb://localhost:27017/hospitalDB', { useNewUrlParser: true }, (err, res) => {

    if (err) throw err;

    console.log('Base de datos: \x1b[32m%s\x1b[0m ', 'online');


})


// Rutas
app.use('/usuario', usuarioRoutes);
app.use('/login', loginRoutes);
app.use('/', appRoutes);


// Escuchar peticiones
app.listen(3000, () => {
    console.log('Express server puerto 3000: \x1b[32m%s\x1b[0m ', 'online');
})