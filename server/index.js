const express = require('express');
const dotenv = require('dotenv').config();
const axios = require('axios');

const app = express();
const port = process.env.PORT || 9000;

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  next();
});

app.get('/api/translate/:word', async (req, res) => {
  const apiKey =  process.env.apiKey;
  const word = req.params.word;

  try {
    const response = await axios.post(
      'https://api.openai.com/v1/engines/davinci-text-002/completions',
      {
        prompt: `Translate the English word "${word}" to Traditional Chinese.`,
        max_tokens: 50
      },
      {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${apiKey}`
        }
      }
    );

    const translation = response.data.choices[0].text.trim();
    res.json({ translation });
  } catch (error) {
    console.error('Error:', error.message);
    res.status(500).json({ error: 'An error occurred' });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
