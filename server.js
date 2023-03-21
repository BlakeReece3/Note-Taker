const express = require('express');
const fs = require('fs');
const path = require('path');
const db = require('./db/db.json');

const app = express();
const PORT = process.env.port || 3001;

// Route for notes.html
app.get('/notes', (req, res) => {res.sendFile(path.join(__dirname, '/public/notes.html'))});
// Route for homepage
app.get('/', (req, res) => res.sendFile(path.join(__dirname, '/public/index.html')));

// Parsing json/app
app.use(express.json());
// Static middleware for assets in public folder
app.use(express.static('public'));

app.use(express.urlencoded({ extended: true }));

app.get('/api/notes', (req, res) => {
  const saves = db
  res.json(saves)
});




app.listen(PORT, () => {
    console.log(`Example app listening at http://localhost:${PORT}`);
  });