const Media = require("../models/Media");
const User = require("../models/User");

exports.create = (req, res, next) => {
    User.findOne({_id: req.auth.userId})
        .then(user => {
            //On vérifie que l'utilisateur soit admin
            if (user.isAdmin) {
                // On vérifie que le media ne soit pas déjà présent en base
                Media.findOne({label: req.body.label})
                    .then(media => {
                        if (media) {
                            return res.status(400).json({message: "Le label doit être unique"});
                        } else {
                            const mediaObject = new Media({
                                label: req.body.label
                            });
                            mediaObject.save()
                                .then(() => {res.status(201).json({message: "Media créé !"})})
                                .catch(error => res.status(400).json({error}));
                        }
                    })
            } else {
                return res.status(401).json({message: "Vous n'avez pas les droits."});
            }
        })
        .catch(error => res.status(400).json({error}));
}

exports.getAllMedias = (req, res, next) => {
    Media.find()
        .then(media => res.status(200).json(media))
        .catch(error => res.status(400).json({error}));
}

exports.getOneMedia = (req, res, next) => {
    Media.findOne({_id: req.params.id})
        .then(user => res.status(200).json(user))
        .catch(error => res.status(400).json({error}));
}

exports.modifyMedia = (req, res, next) => {
    User.findOne({_id: req.auth.userId})
        .then(user => {
            //On vérifie que l'utilisateur soit admin
            if (user.isAdmin) {
                // On vérifie que le media ne soit pas déjà présent en base
                Media.findOne({label: req.body.label})
                    .then(media => {
                        if (media) {
                            return res.status(400).json({message: "Le label doit être unique"});
                        } else {
                            delete req.body._id;
                            Media.updateOne({_id: req.params.id}, req.body)
                                .then(() => {res.status(200).json({message : "Media modifié"})})
                                .catch(error => res.status(400).json({error}))
                        }
                    })
            } else {
                return res.status(401).json({message: "Vous n'avez pas les droits."});
            }
        })
        .catch(error => res.status(400).json({error}));
}

exports.deleteMedia = (req, res, next) => {
    User.findOne({_id: req.auth.userId})
        .then(user => {
            //On vérifie que l'utilisateur soit admin
            if (user.isAdmin) {
                delete req.body._id;
                Media.deleteOne({_id: req.params.id})
                    .then(() => {res.status(200).json({message : "Media supprimé"})})
                    .catch(error => res.status(400).json({error}))
            } else {
                return res.status(401).json({message: "Vous n'avez pas les droits."});
            }
        })
        .catch(error => res.status(400).json({error}));
}