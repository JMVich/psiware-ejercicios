const Book = require('../models/Book');

// Agregar un nuevo libro
exports.addBook = async (req, res) => {
    try {
        const newBook = new Book(req.body);
        await newBook.save();
        res.status(201).json(newBook);
    } catch (error) {
        res.status(400).json({ message: 'Error al agregar el libro', error });
    }
};

// Obtener todos los libros
exports.getBooks = async (req, res) => {
    try {
        const books = await Book.find();
        res.status(200).json(books);
    } catch (error) {
        res.status(500).json({ message: 'Error al obtener los libros', error });
    }
};

// Obtener libros por género
exports.getBooksByGenre = async (req, res) => {
    try {
        const genre = req.params.genre;
        const books = await Book.find({ genre });
        res.status(200).json(books);
    } catch (error) {
        res.status(500).json({ message: 'Error al obtener libros por género', error });
    }
};

// Obtener el libro más caro
exports.getMostExpensiveBook = async (req, res) => {
    try {
        const mostExpensiveBook = await Book.findOne().sort({ price: -1 });
        res.status(200).json(mostExpensiveBook);
    } catch (error) {
        res.status(500).json({ message: 'Error al obtener el libro más caro', error });
    }
};
