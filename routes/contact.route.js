const express = require('express');
const router = express.Router();
const contactController = require("../controllers/contact.controller");
const auth = require('../middlewares/auth');

// Save a contact
router.post('/save-contact', auth, contactController.saveContact);

// Delete a contact
router.delete('/delete-contact/:id', auth, contactController.deleteContact);

// Get all contacts
router.get('/contacts', auth, contactController.getAllContacts);

// Get contacts type as leads
router.get('/leads', auth, contactController.getLeads);

// Get contacts type as prospects
router.get('/prospects', auth, contactController.getProspects);

// Get contacts type as clients
router.get('/clients', auth, contactController.getClients);

// Modifiy contact
router.put('/update-contact/:id', auth, contactController.updateContact);

// Get contact by id
router.get('/contact/:id', auth, contactController.getContactById);

module.exports = router;