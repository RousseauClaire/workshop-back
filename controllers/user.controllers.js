const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require("../models/User");

exports.register = (req, res, next) => {
    // On vérifie que l'e-mail ne soit pas déjà présent en base
    User.findOne({email: req.body.email})
        .then(user => {
            if (user) {
                return res.status(400).json({message: "L'identifiant doit être unique"});
            }})
    // On crypt le mot de passe
    bcrypt.hash(req.body.password, 10)
        .then(mdpHash => {
            const user = new User({
                email: req.body.email,
                password: mdpHash,
                isAdmin: 0
            });
            user.save()
                .then(() => {res.status(201).json({message: "Utilisateur créé !"})})
                .catch(error => res.status(400).json({error}));
        })
        .catch(error =>res.status(500).json({error}));
}

exports.login = (req, res, next) => {
    User.findOne({email: req.body.email})
        .then(user => {
            if (!user) {
                return res.status(401).json({message: "Utilisateur ou mot de passe incorrect"});
            }
            bcrypt.compare(req.body.password, user.password)
                .then(valid => {
                    if (!valid) {
                        return res.status(401).json({message: "Utilisateur ou mot de passe incorrect"});
                    }
                    // Envoi du token et du userId
                    res.status(200).json({
                        userId: user._id,
                        token: jwt.sign(
                            {userId: user._id},
                            'RANDOM_TOKEN_SECRET',
                            {expiresIn: "24h"}
                        )
                    })

                })
                .catch(error => res.status(500).json({error}))
        })
        .catch(error => {
            res.status(400).json({error});
        });
}

exports.getProfile = (req, res, next) => {
    User.findOne({_id: req.auth.userId})
        .then(user => res.status(200).json(user))
        .catch(error => res.status(400).json({error}));
}

exports.getAllUsers = (req, res, next) => {
    User.find()
        .then(user => res.status(200).json(user))
        .catch(error => res.status(400).json({error}));
}

exports.getOneUser = (req, res, next) => {
    User.findOne({_id: req.params.id})
        .then(user => res.status(200).json(user))
        .catch(error => res.status(400).json({error}));
}

exports.modifyUser = (req, res, next) => {
}

exports.deleteUser = (req, res, next) => {
    User.deleteOne({_id: req.params.id})
        .then(() => {res.status(200).json({message : "User supprimé"})})
        .catch(error => res.status(400).json({error}))
}