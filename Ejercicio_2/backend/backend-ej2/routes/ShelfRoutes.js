const express = require('express');
const router = express.Router();
const { addShelf, getShelves } = require('../controllers/ShelfController');

router.post('/add', addShelf);
router.get('/', getShelves); 

module.exports = router;

