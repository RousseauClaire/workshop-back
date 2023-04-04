const Relation = require("../models/Relation");

exports.createRelation = (req, res, next) => {
    const relationObject = new Relation({
        compagnyContactId: req.body.compagnyContactId,
        personContactId: req.body.personContactId,
    });
    relationObject.save()
        .then(() => {res.status(201).json({message: "Relation créée !"})})
        .catch(error => res.status(400).json({error}));
}

exports.deleteRelation = (req, res, next) => {
    Relation.deleteOne({_id: req.params.id})
        .then(() => {res.status(200).json({message : "Relation supprimée"})})
        .catch(error => res.status(400).json({error}))
}

exports.getAllRelations = (req, res, next) => {
    Relation.find()
        .then(relation => res.status(200).json(relation))
        .catch(error => res.status(400).json({error}));
}

exports.getCompagnyRelations = (req, res, next) => {
    Relation.find({compagnyContactId: req.params.id})
        .then(relation => res.status(200).json(relation))
        .catch(error => res.status(400).json({error}));
}

exports.getPersonRelations = (req, res, next) => {
    Relation.find({personContactId: req.params.id})
        .then(relation => res.status(200).json(relation))
        .catch(error => res.status(400).json({error}));
}