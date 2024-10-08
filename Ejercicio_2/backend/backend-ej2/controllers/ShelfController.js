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


// Función para calcular el porcentaje de llenado de la estantería (Ejercicio 2-B)
//http://localhost:4000/api/shelves/shelfID/fill-percentage

exports.getShelfFillPercentage = async (req, res) => {
    try {
        const shelfId = req.params.id;

        // Verificamos si el ID de la estantería es válido 
        if (!mongoose.Types.ObjectId.isValid(shelfId)) {
            return res.status(400).json({ message: 'ID de estantería no válido' });
        }

        const shelf = await Shelf.findById(shelfId);

        // Calculamos cúantos libros tiene la estantería
        const bookCount = await Book.countDocuments({ shelfId });

        // Calculamos el porcentaje de llenado
        const fillPercentage = (bookCount / shelf.maxCapacity) * 100;

        res.status(200).json({
            shelfId: shelf._id,
            location: shelf.location,
            bookCount,
            maxCapacity: shelf.maxCapacity,
            fillPercentage: `${fillPercentage.toFixed(2)}%`  
        });
    } catch (error) {
        res.status(500).json({ message: 'Error al calcular el porcentaje', error });
    }
};