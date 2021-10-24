import { routes } from './routes';

const express = require('express');
const app = express();
const router = express.Router();
const PORT = 4201;


app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Header', 'Origin, X-Requested-With, Content-Type, Accept');
    res.header('Access-Control-Allow-Methods', 'OPTIONS, GET, POST, PUT, DELETE');
    if ('OPTIONS' == req.method) {
        res.sendStatus(200);
    } else {
        console.log(`${req.ip} ${req.method} ${req.url}`);
        next();
    }
});

//any req that coming from post added to the body of the req
app.use(express.json());
app.use('/', routes);

app.listen(PORT, () => {
    console.log(`[server]: Server is running at https://localhost:${PORT}`);

});