//Se dejo de utilizar este archivo
const http = require('http');

http.createServer((req, res) => {

        res.writeHead(200, { 'Content-Type': 'application/json' });

        let salida = {
            nombre: 'Luis',
            edad: 37,
            url: req.url
        }

        res.write(JSON.stringify(salida));

        res.end();
    })
    .listen(8080);

console.log('Escuchando el puerto 8080 y listo para ejecutar');
console.log("Terminado el archivo app.old.js");