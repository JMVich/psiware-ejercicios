const mongoose = require('mongoose');
const Shelf = require('../models/Shelf');
const Book = require('../models/Book');


// Agregar estantería
exports.addShelf = async (req, res) => {
    try {
        const newShelf = new Shelf(req.body);
        await newShelf.save();
        res.status(201).json(newShelf);
    } catch (error) {
        res.status(400).json({ message: 'Error al agregar la estantería', error });
    }
};


// Obtener las estanterías
exports.getShelves = async (req, res) => {
    try {
        const shelves = await Shelf.find();
        res.status(200).json(shelves);
    } catch (error) {
        res.status(500).json({ message: 'Error al obtener las estanterías', error });
    }
};


// Función para calcular el porcentaje de la estantería, el valor total de los libros y obtener el libro más caro
exports.getShelfFunctions = async (req, res) => {
    try {
        const shelfId = req.params.id;

        // Verificamos si el ID es un ObjectId válido
        if (!mongoose.Types.ObjectId.isValid(shelfId)) {
            return res.status(400).json({ message: 'ID de estantería no válido' });
        }

        const shelf = await Shelf.findById(shelfId);

        if (!shelf) {
            return res.status(404).json({ message: 'Estantería no encontrada' });
        }

        // Recuperamos todos los libros asociados a esta estantería
        const books = await Book.find({ shelfId });

        // Calculamos el número de libros y el porcentaje de llenado
        const bookCount = books.length;
        const fillPercentage = (bookCount / shelf.maxCapacity) * 100;

        // Calculamos el valor total de los libros
        const totalValue = books.reduce((sum, book) => sum + book.price, 0);

        // Encontramos el libro con el precio más alto
        const mostExpensiveBook = books.reduce((prev, current) => (prev.price > current.price) ? prev : current, books[0]);

        // Respondemos con los datos de llenado, valor total y el libro más caro
        res.status(200).json({
            shelfId: shelf._id,
            location: shelf.location,
            bookCount,
            maxCapacity: shelf.maxCapacity,
            fillPercentage: `${fillPercentage.toFixed(2)}%`,
            totalValue: totalValue.toFixed(2),
            mostExpensiveBook: mostExpensiveBook ? {
                name: mostExpensiveBook.name,
                author: mostExpensiveBook.author,
                price: mostExpensiveBook.price.toFixed(2)
            } : null 
        });
    } catch (error) {
        res.status(500).json({ message: 'Error al calcular el porcentaje de la estantería, el valor total y el libro más caro', error });
    }
};


// Obtenemos los libros de manera ordenada
exports.getBooksSorted = async (req, res) => {
    try {
        const shelfId = req.params.id;

        // Verificamos si el ID es un ObjectId válido
        if (!mongoose.Types.ObjectId.isValid(shelfId)) {
            return res.status(400).json({ message: 'ID de estantería no válido' });
        }

        // Buscamos los libros de la estantería y los ordenamos por título
        const books = await Book.find({ shelfId }).sort({ name: 1 });  // Ordenamos alfabéticamente por el campo 'name'

        if (books.length === 0) {
            return res.status(404).json({ message: 'No hay libros en esta estantería' });
        }

        res.status(200).json({ books });
    } catch (error) {
        res.status(500).json({ message: 'Error al obtener los libros ordenados', error });
    }
};


// Obtenemos los libros por género
exports.getBooksByGenre = async (req, res) => {
    try {
        const shelfId = req.params.id;
        const genre = req.params.genre;

        // Verificamos si el ID es válido
        if (!mongoose.Types.ObjectId.isValid(shelfId)) {
            return res.status(400).json({ message: 'ID de estantería no válido' });
        }

        // Filtramos libros por estantería y género
        const books = await Book.find({ shelfId, genre: genre });

        if (books.length === 0) {
            return res.status(404).json({ message: 'No se encontraron libros para este género en la estantería' });
        }

        res.status(200).json({ books });
    } catch (error) {
        res.status(500).json({ message: 'Error al obtener los libros por género', error });
    }
};
