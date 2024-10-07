const express = require('express');
const router = express.Router();
const { addShelf } = require('../controllers/ShelfController');

router.post('/add', addShelf);

module.exports = router;
