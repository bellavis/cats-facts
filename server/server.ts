import { routes } from './routes';

const express = require('express');
const bp = require('body-parser');
const app = express();


const PORT = 4201;

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    res.header('Access-Control-Allow-Methods', 'OPTIONS, GET, POST, PUT, DELETE');
    if ('OPTIONS' == req.method) {
        res.sendStatus(200);
    } else {
        console.log(`${req.ip} ${req.method} ${req.url}`);
        next();
    }
});

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/', routes);

app.listen(PORT, () => {
    console.log(`[server]: Server is running at https://localhost:${PORT}`);
});