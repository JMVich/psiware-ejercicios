const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
    ISBN: { type: Number, required: true },
    name: { type: String, required: true },
    author: { type: String, required: true },
    genre: { type: String, required: true },
    price: { type: Number, required: true },
    shelfId: { type: mongoose.Schema.Types.ObjectId, ref: 'Shelf', required: true },  // Unimos los libros con las estanterías
});

module.exports = mongoose.model('Book', bookSchema);

