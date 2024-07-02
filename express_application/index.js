require('dotenv').config();
const express = require('express');
const cors = require('cors');
const fs = require('fs');
const mongoose = require('mongoose');
const app = express();
const PORT = process.env.PORT || 3500;
const database_url = process.env.DATABASE_URL;
const { NoteModel } = require('./schema/Note');

// Connect to MongoDB
mongoose.connect(database_url, { useNewUrlParser: true, useUnifiedTopology: true}).
then(() => {
  console.log('Connected to MongoDB');
}).catch((error) => {
  console.error('Error connecting to MongoDB', error);
})

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true}));

app.get('/', (req, res) => {
  console.log(req.query);
  res.send('Hello World');
});

app.get('/notes', async (req, res) => {
  try {
    const notes = await NoteModel.find();
    res.status(200).json({ data: notes });
  }catch(error){
    res.status(500).json({ error: error.message });
  }
})

app.post('/notes', async (req, res) => {
  try {
    const note = new NoteModel(req.body);
    const savedNote = await note.save();
    res.status(200).json({ data: savedNote });
  }catch(error){
    res.status(500).json({ error: error.message });
  }
});

app.put('/notes/:id', async (req, res) => {
  console.log(req.body);
  console.log(req.params.id);
  res.status(200).json({ message: "Updated task" });
})

app.delete('notes/:id', async (req, res) => {

});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});