const express = require('express');
const router = express.Router();
const contactController = require("../controllers/contact.controller");

// Save a contact
router.post('/save-contact', contactController.saveContact);

// Delete a contact
router.delete('/contacts/:id', contactController.deleteContact);

// Get all contacts
router.get('/contacts', contactController.getAllContacts);

// Get contacts type as leads
router.get('/leads', contactController.getLeads);

// Get contacts type as prospects
router.get('/prospects', contactController.getProspects);

// Get contacts type as clients
router.get('/clients', contactController.getClients);

module.exports = router;