const express = require('express');
const Notes = require('../model/Notes');

const router = express.Router();

router.get('/notes', async (request, response) => {
  try {
    const notes = await Notes.find({});
    response.send(notes);
  } catch (err) {
    response.status(500).send({ message: 'Uh oh, something went wrong. We\'re on it!' });
  }
});

router.post('/notes', async (request, response) => {
  const { body: { title, note } } = request;
  if (title && note) {
    try {
      const newNote = await Notes.create({ title, note });
      response.json(newNote);
    } catch (err) {
      console.log(err);
      response.status(500).send({ error: 'Uh oh, something went wrong. We\'re on it!' });
    }
  } else {
    response.status(404).send({ error: 'Please ensure that your note has both a title and content' });
  }
});

module.exports = router;
