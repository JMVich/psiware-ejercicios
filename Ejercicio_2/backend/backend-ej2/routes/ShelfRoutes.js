const express = require('express');
const router = express.Router();
const { addShelf, getShelves, getShelfFunctions, getBooksSorted, getBooksByGenre } = require('../controllers/ShelfController');

router.post('/add', addShelf);

router.get('/', getShelves);
router.get('/:id/shelf-functions', getShelfFunctions);
router.get('/:id/books-sorted', getBooksSorted);
router.get('/:id/genre/:genre', getBooksByGenre);


module.exports = router;

