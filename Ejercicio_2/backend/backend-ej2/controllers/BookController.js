const Book = require('../models/Book');

// Agregar libro
exports.addBook = async (req, res) => {
    try {
        const newBook = new Book(req.body);
        await newBook.save();
        res.status(201).json(newBook);
    } catch (error) {
        res.status(400).json({ message: 'Error al agregar el libro', error });
    }
};

