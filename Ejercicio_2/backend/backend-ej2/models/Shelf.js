const mongoose = require('mongoose');

const shelfSchema = new mongoose.Schema({
    id: { type: Number, required: true },
    location: { type: String, required: true },
    width: { type: Number, required: true },
    height: { type: Number, required: true },
    depth: { type: Number, required: true },
    maxCapacity: { type: Number, required: true }
});

module.exports = mongoose.model('Shelf', shelfSchema);

