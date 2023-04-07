const express = require('express');
const router = express.Router();
const mediaController = require("../controllers/media.controllers");
const auth = require('../middlewares/auth');

// Create a media
router.post('/create', auth, mediaController.create);

// Get all medias
router.get('/', auth, mediaController.getAllMedias);

// Get a media
router.get('/:id', auth, mediaController.getOneMedia);

// Modify a media
router.put('/:id', auth, mediaController.modifyMedia);

// Delete a media
router.delete('/:id', auth, mediaController.deleteMedia);

module.exports = router;