const Action = require("../models/Action");

exports.saveAction = (req, res) => {
  const action = new Action(req.body);
  action.userId = req.auth.userId;
  action.save()
    .then(() => {
      res.status(201).json({ message: 'Action créée avec succès' });
    })
    .catch(error => {
      console.error(error);
      res.status(400).json({ error });
    });
}

exports.updateAction = (req, res) => {
  const actionId = req.params.id;
  Action.findByIdAndUpdate(actionId, req.body, { new: true, runValidators: true })
    .then(updatedAction => {
      res.status(200).json(updatedAction);
    })
    .catch(error => {
      console.error(error);
      res.status(500).json({ error: 'Erreur du serveur' });
    });
}

exports.getActionById = (req, res) => {
  const actionId = req.params.id;
  Action.findById(actionId)
    .then(doc => {
      if (doc) {
        const action = new Action(doc);
        res.status(200).json(action);
      } else {
        res.status(404).json({ error: 'Action non trouvée' });
      }
    })
    .catch(error => {
      console.error(error);
      res.status(500).json({ error: 'Erreur du serveur' });
    });
}

exports.getAllActions = (req, res) => {
  Action.find()
    .then(docs => {
      const actions = docs.map(doc => new Action(doc));
      res.status(200).json(actions);
    })
    .catch(error => {
      console.error(error);
      res.status(500).json({ error: 'Erreur du serveur' });
    });
}

exports.deleteAction = (req, res) => {
  const actionId = req.params.id;
  Action.findByIdAndDelete(actionId)
    .then(() => {
      res.status(200).json({ message: 'Action supprimée avec succès' });
    })
    .catch(error => {
      console.error(error);
      res.status(500).json({ error: 'Erreur du serveur' });
    });
}