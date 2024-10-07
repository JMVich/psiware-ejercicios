const express = require('express');
const router = express.Router();
const { addBook } = require('../controllers/BookController');

router.post('/add', addBook);

module.exports = router;
