// Create web server

// Import modules
const express = require('express');
const router = express.Router();
const commentController = require('../controllers/commentController');

// Define routes
router.get('/', commentController.index);
router.get('/:id', commentController.detail);
router.post('/', commentController.create);
router.put('/:id', commentController.update);
router.delete('/:id', commentController.delete);

// Export module
module.exports = router;