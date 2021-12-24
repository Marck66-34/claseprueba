//express
const express = require('express');

const app = express(); //guardo funcion express en una constante app
// const PORT= process.env.PORT || 8080;

app.get('/',(req, res)=>{
    res.send({mensaje: 'Hola desde express'})
})
const connectedServer= app.listen(PORT, ()=>{
    console.log(`Servidor activo y escuchando en el puerto: ${PORT}`)
    connectedServer.emit('error', new Error('Esto es un error simulado'));
});


connectedServer.on('error', (error)=>{
console.log(error.message);
})