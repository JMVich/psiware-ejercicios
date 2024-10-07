const express = require('express');
const router = express.Router();
const { addBook, getBooks, getBooksByGenre, getMostExpensiveBook } = require('../controllers/BookController');

router.post('/add', addBook);
router.get('/', getBooks);
router.get('/genre/:genre', getBooksByGenre);
router.get('/most-expensive', getMostExpensiveBook);

module.exports = router;
