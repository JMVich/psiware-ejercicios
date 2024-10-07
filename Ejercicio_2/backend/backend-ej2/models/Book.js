const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
    isbn: { type: Number, required: true },
    title: { type: String, required: true },
    author: { type: String, required: true },
    genre: { type: String, required: true },
    price: { type: Number, required: true },
/*     shelfId: { type: mongoose.Schema.Types.ObjectId, ref: 'Shelf', required: true }, */
});

module.exports = mongoose.model('Book', bookSchema);
