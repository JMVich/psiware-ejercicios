const express = require('express');
const router = express.Router();
const { addShelf, getShelves, getShelfFillPercentage } = require('../controllers/ShelfController');

router.post('/add', addShelf);
router.get('/', getShelves);
router.get('/:id/fill-percentage', getShelfFillPercentage);

module.exports = router;

