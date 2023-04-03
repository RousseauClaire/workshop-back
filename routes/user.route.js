const express = require('express');
const router = express.Router();
const userController = require("../controllers/user.controllers");
const auth = require('../middlewares/auth');

// Create a user
router.post('/register', userController.register);

// Connect a user
router.put('/login', userController.login);

// Get self profile informations
router.get('/profile', auth, userController.getProfile);

module.exports = router;