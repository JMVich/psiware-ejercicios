const Shelf = require('../models/Shelf');

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

