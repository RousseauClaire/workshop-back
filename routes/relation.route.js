const express = require('express');
const router = express.Router();
const relationController = require("../controllers/relation.controllers");
const auth = require('../middlewares/auth');

// Create a relation
router.post('/create', auth, relationController.createRelation);

// Delete a relation
router.delete('/:id', auth, relationController.deleteRelation);

// Get all relations
router.get('/', auth, relationController.getAllRelations);

// Get all relations for a compagny
router.get('/compagny/:id',  auth, relationController.getCompagnyRelations);

// Get all relations for a person
router.get('/person/:id', auth, relationController.getPersonRelations);

module.exports = router;