import * as express from 'express';
const mongoose = require('mongoose');
const app = express.Router();
const axios = require('axios')
const URL = 'https://catfact.ninja/facts?limit=10';
const randomCatURL = 'https://api.thecatapi.com/v1/images/search?format=json';

export { app as routes };

//mongoDB connection and settings

mongoose.connect('mongodb://localhost:27017/cat-facts');

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", () => {
    console.log("Database connected");
});



app.get('/', (req, res) => res.send('hello cats'));

app.get('/all-facts', async (req, res) => {
    await axios.get(URL)
        .then(facts => {
            let factsArray = facts.data.data.map((item) => {
                return {
                    fact: item.fact,
                    img: randomImage() + '.jpg'
                }
            });
            console.log(factsArray)
            res.send(factsArray)
        })
        .catch(e => console.log(e));
});


app.post('post-fact', (req, res) => {
    res.send({
        body: req.body
    });
});


function randomImage() {
    return Math.floor(Math.random() * 30);
}