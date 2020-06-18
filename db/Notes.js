const mongoose = require('mongoose');

const NotesSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  note: {
    type: String,
    required: true,
  },
});

const Notes = mongoose.model('notes', NotesSchema);

module.exports = Notes;
