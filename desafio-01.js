/*Desarrollar un servidor en node.js que escuche peticiones en el puerto 8080 y responda un mensaje de acuerdo a la hora actual:
- Si la hora actual se ecuentra entre las 6 y las 12hs será'Buenos días!'.
- Entre las 13 y las 19hs será 'Buenas tardes!'.
- De 20 a 5hs será 'Buenas noches!¡.
Se mostrará por consola cuando el servidor esté listo para operar y en qué puerto la está haciendo
 */
const http = require('http');
const server= http.createServer((req, res)=>{
 const actualTime = new Date().getHours();//traer la fecha actual
 console.log(actualTime);
if (actualTime>= 6 && actualTime<= 12){
    res.end('Buenos dias')
}
    else if (actualTime >= 13 && actualTime <= 19) {
        res.end('Buenas Tardes! ')
    }
    else{
        res.end('Buenas noches!')
    }
});
const PORT = 8080;
server.listen(PORT, () => {
    console.log(`Servidor activo y escuchando en el puerto:${PORT}`)


});