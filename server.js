// File: server.js
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

app.use(cors());
app.use(bodyParser.json());

let documentContent = '';

// Endpoint to get the document content
app.get('/document', (req, res) => {
  res.json({ content: documentContent });
});

// Endpoint to update the document content
app.post('/document', (req, res) => {
  documentContent = req.body.content;
  res.json({ message: 'Document updated' });
});

// Endpoint to clear the document content
app.delete('/document', (req, res) => {
  documentContent = '';
  res.json({ message: 'Document cleared' });
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
