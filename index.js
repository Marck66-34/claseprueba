/* Crear un proyecto de servidor http en node.js que utilice la dependencia express, escuche en el puerto 808 y tenga tres rutas get configuradas:
A) '/' en esta ruta raíz , el servidor enviara un string con un elemento de título nivel 1( un h1 en formato HTML) que contenga el mensaje: ' Bienvenidos al servidor express' en color azul.
B) '/visitas' donde en cada request, el servidor devolverá un mensaje con la cantidad de visitas que hayan realizado a esre endpoint. Por ej. 'La cantidad de visitas es de 10
C)'/fyh' donde se devolverá la fecha y hora actual en formato objeto:
{fyh: '11/1/2021 1:34:09'}
Mostrar por consola el puerto de escucha del servidor al momento de realizar el listen. 
En caso de error mostrar el detalle*/
const express = require('express');

const app = express(); //guardo funcion express en una constante app
const PORT = process.env.PORT || 8080;
let visitas=0;



app.get('/', (req, res) => {
    res.send('<h1 style= "color:blue"> Bienvenidos al servidor expres</h1>')
})
app.get('/vistas', (req, res) => {
    visitas= visitas + 1;
    res.send(`La cantidad de visitas es:${visitas} `)
})
app.get('/fyh', (req, res) => {
    res.send({ mensaje: 'Hola desde express' })
})

const connectedServer = app.listen(PORT, () => {
    console.log(`Servidor activo y escuchando en el puerto: ${PORT}`)
});


connectedServer.on('error', (error) => {
    console.log(error.message);
})