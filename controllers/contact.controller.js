const Contact = require("../models/Contact");

exports.saveContact = (req, res, next) => { 

  const contact = new Contact({
    name: req.body.name,
    tel: req.body.tel,
    email: req.body.email,
    fax: req.body.fax,
    address: req.body.address,
    status: req.body.status,
    contactType: req.body.contactType,
    comment: req.body.comment
  });
  contact.save()
      .then(() => {res.status(201).json({message: "Contact créé !"})})
      .catch(error => res.status(400).json({error}));
}

exports.getAllContacts = (req, res, next) => {
  Contact.find({})
    .then(docs => {
      const contacts = docs.map(doc => new Contact(doc));
      res.status(200).json(contacts);
    })
    .catch(error => {
      console.error(error);
      res.status(500).json({ error: 'Erreur du serveur' });
    });
}

exports.getLeads = (req, res) => {
  Contact.find({ status: 'lead' })
    .then(docs => {
      const contacts = docs.map(doc => new Contact(doc));
      res.status(200).json(contacts);
    })
    .catch(error => {
      console.error(error);
      res.status(500).json({ error: 'Erreur du serveur' });
    });
}

exports.getProspects = (req, res) => {
  Contact.find({ status: 'prospect' })
    .then(docs => {
      const contacts = docs.map(doc => new Contact(doc));
      res.status(200).json(contacts);
    })
    .catch(error => {
      console.error(error);
      res.status(500).json({ error: 'Erreur du serveur' });
    });
}

exports.getClients = (req, res) => {
  Contact.find({ status: 'client' })
    .then(docs => {
      const contacts = docs.map(doc => new Contact(doc));
      res.status(200).json(contacts);
    })
    .catch(error => {
      console.error(error);
      res.status(500).json({ error: 'Erreur du serveur' });
    });
}

exports.deleteContact = (req, res) => {
  const contactId = req.params.id;
  Contact.findByIdAndDelete(contactId)
    .then(() => {
      res.status(204).send();
    })
    .catch(error => {
      console.error(error);
      res.status(500).json({ error: 'Erreur du serveur' });
    });
}


