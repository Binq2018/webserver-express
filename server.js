const express = require('express');
const app = express();
var hbs = require('hbs');
require('./hbs/helpers');

const port = process.env.PORT || 3000;

app.use(express.static(__dirname + '/public'));

//Express HBS engine
hbs.registerPartials(__dirname + '/views/parciales');
app.set('view engine', 'hbs');



app.get('/', (req, res) => {
    res.render('home', {
        nombre: 'Luis',
        anio: new Date().getFullYear()
    });
});

app.get('/about', (req, res) => {
    res.render('about', {
        anio: new Date().getFullYear()
    });
});


/*
app.get('/', (req, res) => {

    let salida = {
        nombre: 'Luis',
        edad: 35,
        url: req.url
    }

    res.send(salida);
})
*/

app.get('/data', (req, res) => {
    res.send('Hola Data');
})

app.listen(port, () => {
    console.log(`Escuchando peticiones en el puerto ${port}`);
})