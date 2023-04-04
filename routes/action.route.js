const express = require('express');
const router = express.Router();
const actionController = require("../controllers/action.controllers");
const auth = require('../middlewares/auth');

// Save a action
router.post('/save-action', auth, actionController.saveAction);

// Get all actions
router.get('/actions', auth, actionController.getAllActions);

// Get a action by id
router.get('/action/:id', auth, actionController.getActionById);

// Modify a action
router.put('/update-action/:id', auth, actionController.updateAction);

// Delete a action
router.delete('/delete-action/:id', auth, actionController.deleteAction);

module.exports = router;