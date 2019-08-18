const express = require('express');
const app = express();

const hbs = require('hbs');
require('./hbs/helpers');

const port = process.env.PORT || 3000;


/** Un middleware es una instruccion o un callback que se va a 
 *  ejecutar siempre no importa que URL es el que la persona pida
 */

app.use(express.static(__dirname + '/public'));

//Express HBS Engine

hbs.registerPartials(__dirname + '/views/partials');

app.set('view engine', 'hbs');


/** Estamos configurando una solicitud web cuando el path sea / 
 *  Todas las peticiones que entren por / van a ejecutar esa funcion
 * */

app.get('/', (req, res) => {

    // let salida = {
    //     nombre: 'David',
    //     edad: 30,
    //     url: req.url
    // };

    // Internamente la funcion send va a detectar que es un objeto y
    // lo va a serializar en JSON
    //res.send(salida);

    res.render('home', {
        nombre: 'david'
    });

    //res.send('Hola Mundo');
});

/** 
 * Si no existe una variable en los render, va a buscar en el helper
 */

app.get('/about', (req, res) => {

    res.render('about', {
        nombre: 'David'
    });

});

app.get('/data', (req, res) => {

    res.send('Hola Data');
});

app.listen(port, () => {
    console.log(`Escuchando peticiones en el puerto ${ port }`);
});