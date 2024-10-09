const express = require('express');
const router = express.Router();
const { addShelf, getShelves, getShelfFillPercentage, getBooksSorted, getBooksByGenre } = require('../controllers/ShelfController');

router.post('/add', addShelf);
router.get('/', getShelves);
router.get('/:id/fill-percentage', getShelfFillPercentage);

router.get('/:id/books-sorted', getBooksSorted);

router.get('/:id/genre/:genre', getBooksByGenre);


module.exports = router;

