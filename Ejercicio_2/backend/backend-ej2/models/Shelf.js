const mongoose = require('mongoose');

const shelfSchema = new mongoose.Schema({
    name: { type: String, required: true },
    capacity: { type: Number, required: true }
    // Crear más campos
});

module.exports = mongoose.model('Shelf', shelfSchema);

