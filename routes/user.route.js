const express = require('express');
const router = express.Router();
const userController = require("../controllers/user.controllers");
const auth = require('../middlewares/auth');

// Create an user
router.post('/register', userController.register);

// Connect an user
router.put('/login', userController.login);

// Get self profile informations
router.get('/profile', auth, userController.getProfile);

// Get all users
router.get('/', auth, userController.getAllUsers);

// Get an user
router.get('/:id', auth, userController.getOneUser);

// Modify an user
router.put('/:id', auth, userController.modifyUser);

// Delete an user
router.delete('/:id', auth, userController.deleteUser);

module.exports = router;