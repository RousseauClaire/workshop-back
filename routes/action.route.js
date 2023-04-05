const express = require('express');
const router = express.Router();
const actionController = require("../controllers/action.controllers");
const auth = require('../middlewares/auth');

// Save a action
router.post('/save-action', actionController.saveAction);

// Get all actions
router.get('/actions', actionController.getAllActions);

// Get a action by id
router.get('/action/:id', actionController.getActionById);

// Modify a action
router.put('/update-action/:id', actionController.updateAction);

// Delete a action
router.delete('/delete-action/:id', actionController.deleteAction);

module.exports = router;