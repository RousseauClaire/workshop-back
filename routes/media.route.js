const express = require('express');
const router = express.Router();
const mediaController = require("../controllers/media.controllers");
const auth = require('../middlewares/auth');