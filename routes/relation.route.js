const express = require('express');
const router = express.Router();
const relationController = require("../controllers/relation.controllers");
const auth = require('../middlewares/auth');

// Create a relation
router.post('/create', relationController.createRelation);

// Delete a relation
router.delete('/:id', relationController.deleteRelation);

// Get all relations
router.get('/', relationController.getAllRelations);

// Get all relations for a compagny
router.get('/compagny/:id', relationController.getCompagnyRelations);

// Get all relations for a person
router.get('/person/:id', relationController.getPersonRelations);

module.exports = router;