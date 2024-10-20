const express = require('express');
const routes = require('./routes/index');
const app = express();
const path = require('path');

app.use('/', routes);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hjs');
app.use(express.static(path.join(__dirname, 'public')));

app.listen(8080);
console.log('Servidor rodando na porta 8080');
