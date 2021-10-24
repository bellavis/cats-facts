import * as express from 'express';
const app = express.Router();
const mongoose = require('mongoose');
const axios = require('axios');
const Fact = require('./models/my-facts');
const URL = 'https://catfact.ninja/facts?limit=10';

export { app as routes };

mongoose.connect('mongodb://localhost:27017/cats-facts');

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", () => {
    console.log("Database connected");
});

app.get('/all-facts', async (req, res) => {
    await axios.get(URL)
        .then(facts => {
            let factsArray = facts.data.data.map((item) => {
                return {
                    fact: item.fact,
                    img: randomImage() + '.jpg'
                }
            });
            res.send(factsArray)
        })
        .catch(e => console.log(e));
});


app.post('/save-fact', async (req, res) => {
    try {
        const fact = new Fact(req.body.fact);
        await fact.save();
        res.send(fact);
        res.sendStatus(200);
    } catch (e) {
        res.sendStatus(500);
    }
});

app.get('/my-facts', async (req, res) => {
    try {
        const myFacts = await Fact.find({});
        res.send(myFacts);
    } catch (e) {
        console.log(`Error: ${e}`)
    }

});

app.get('/delete-fact/:id', async (req, res) => {
    try {
        const { id } = req.params;
        await Fact.findByIdAndDelete(id);
        res.sendStatus(200);
    } catch (e) {
        res.sendStatus(500);
    }
})


function randomImage() {
    return Math.floor(Math.random() * 30);
}