// index.js - Express server for Shopify <> AppCollaborative Sync
require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const axios = require('axios');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());

app.post('/webhook/appcollaborative', async (req, res) => {
  // AppCollaborative → Shopify logic
  res.status(200).send('Stub response from AppCollaborative webhook');
});

app.post('/webhook/shopify', async (req, res) => {
  // Shopify → AppCollaborative logic
  res.status(200).send('Stub response from Shopify webhook');
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
