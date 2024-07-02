require('dotenv').config();
const express = require('express');
const cors = require('cors');
const fs = require('fs');
const mongoose = require('mongoose');
const app = express();
const PORT = process.env.PORT || 3500;
const database_url = process.env.DATABASE_URL;

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
  res.send('Hello World')
});

app.get('/notes', async (req, res) => {
  res.json({message: 'Here are your notes'});
})

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});