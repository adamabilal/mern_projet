const mongoose = require('mongoose');

const BookSchema = new mongoose.Schema({
  titre: {
    type: String,
    required: true
  },
  isbn: {
    type: String,
    required: true
  },
  auteur: {
    type: String,
    required: true
  },
  description: {
    type: String
  },
  date_publication: {
    type: Date
  },
  editeur: {
    type: String
  },
  date_mise_à_jour: {
    type: Date,
    default: Date.now
  }
});

module.exports = Book = mongoose.model('book', BookSchema);