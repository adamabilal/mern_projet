const express = require('express');
const router = express.Router();

const Book = require('../../models/Book');

router.get('/', (req, res) => {
    Book.find()
      .then(books => res.json(books))
      .catch(err => res.status(404).json({ nobooksfound: 'livre introuvables' }));
  });
  router.get('/:id', (req, res) => {
    Book.findById(req.params.id)
      .then(book => res.json(book))
      .catch(err => res.status(404).json({ nobookfound: 'livre introuvables' }));
  });
  router.post('/', (req, res) => {
    Book.create(req.body)
      .then(book => res.json({ msg: 'livre ajouté avec succés' }))
      .catch(err => res.status(400).json({ error: 'ajout du livre echoué' }));
  });
  router.put('/:id', (req, res) => {
    Book.findByIdAndUpdate(req.params.id, req.body)
      .then(book => res.json({ msg: 'mise à jour réussie' }))
      .catch(err =>
        res.status(400).json({ error: 'echec mise à jour à la base de donnée' })
      );
  });
  router.delete('/:id', (req, res) => {
    Book.findByIdAndRemove(req.params.id, req.body)
      .then(book => res.json({ mgs: 'suppression livre réussie' }))
      .catch(err => res.status(404).json({ error: 'aucune livre' }));
  });
module.exports = router;