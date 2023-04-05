const express = require('express');
const router = express.Router();
const contactController = require("../controllers/contact.controller");
const auth = require('../middlewares/auth');

// Save a contact
router.post('/save-contact', contactController.saveContact);

// Delete a contact
router.delete('/delete-contact/:id', contactController.deleteContact);

// Get all contacts
router.get('/contacts', contactController.getAllContacts);

// Get contacts type as leads
router.get('/leads', contactController.getLeads);

// Get contacts type as prospects
router.get('/prospects', contactController.getProspects);

// Get contacts type as clients
router.get('/clients', contactController.getClients);

// Modifiy contact
router.put('/update-contact/:id', contactController.updateContact);

// Get contact by id
router.get('/contact/:id', contactController.getContactById);

module.exports = router;