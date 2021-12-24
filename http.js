const http = require('http');//importo http

//funcionalidades
const server = http.createServer((req, res) => {//crear el servidor
    if (req.method == 'GET' && req.url == '/') {
        res.end('hola')
    }
    else {
        res.end(`<h1 style="font-size:100px"> OH oh!</h1>
        <p>la pagina que buscas no exite</p>
            `)
    }
    // res.write('HOLA MUNDO!');//respuesta que queremos
    res.end();
});
const PORT = 8080;
server.listen(PORT, () => {
    console.log(`Servidor activo y escuchando en el puerto:${PORT}`)


});
// // //crea un servidor al asar
// const connectedServer = server.listen(PORT, () => {
//     console.log(`Servidor activo y escuchando en el puerto: ${connectedServer.address().port}`);
// });