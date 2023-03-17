const express = require('express');
const fs = require('fs');
const { dirname } = require('path');
const path = require('path');
const db = require('./db/db.json');

const app = express();
const PORT = process.env.port || 3001;

// Makes Home page display the index file
app.get('/', (req, res) => res.sendFile(path.join(--dirname, '/public/index.html')));
// Makes Notes page display notes file
app.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, '/public/notes.html'))
});
// Parsing json/app
app.use(express.json());
// Static middleware for assets in public folder
app.use(express.static('public'));

app.use(express.urlencoded({ extended: true }));