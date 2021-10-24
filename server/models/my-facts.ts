const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const factSchema = new Schema({
    fact: String,
    img: String
});

module.exports = mongoose.model("Fact", factSchema);