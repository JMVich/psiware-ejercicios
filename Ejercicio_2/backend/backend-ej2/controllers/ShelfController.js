const Shelf = require('../models/Shelf');

// Agregar una nueva estantería
exports.addShelf = async (req, res) => {
    try {
        const newShelf = new Shelf(req.body);
        await newShelf.save();
        res.status(201).json(newShelf);
    } catch (error) {
        res.status(400).json({ message: 'Error al agregar la estantería', error });
    }
};
