const express = require('express');
const router = express.Router();
const mediaController = require("../controllers/media.controllers");
const auth = require('../middlewares/auth');

// Create a media
router.post('/create', mediaController.create);

// Get all medias
router.get('/', mediaController.getAllMedias);

// Get a media
router.get('/:id', mediaController.getOneMedia);

// Modify a media
router.put('/:id', mediaController.modifyMedia);

// Delete a media
router.delete('/:id', mediaController.deleteMedia);

module.exports = router;