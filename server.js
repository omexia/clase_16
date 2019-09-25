const express = require('express');
const app = express();
const router = express.Router();

// app.use(function(req, res, next){
//     res.send('Soy un middleware');
//     next();
// });

router.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/file.txt');
});

app.use('/asset', router);

app.listen(9000, () => {
    console.log("El servidor está escuchando en el puerto 9000");
});

/*app.get('/handler1', function(req, res) {
    res.status(200);
    res.set('Content-Type', 'text/plain');
    res.send('<h1> handler 1 </h1>');
    console.dir(req.baseUrl);
    console.dir(req.body);
    console.dir(req.hostname);
    console.dir(req.method);
    console.dir(req.originalUrl);
    console.dir(req.path);
    console.dir(req.protocol);
    console.dir(req.query);
});
*/

/*
EJERCICIO 2
app.get('/handler2', function(req, res) {
    res.send('handler 2');
});
*/
