const express = require('express');
const fs = require('fs');
const { dirname } = require('path');
const path = require('path');
const db = require('./db/db.json');

const app = express();
const PORT = process.env.port || 3001;

app.get('/', (req, res) => res.sendFile(path.join(--dirname, '/public/index.html')));

app.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, '/public/notes.html'))
});