const express = require('express');
require('dotenv').config();
const axios = require('axios');

const app = express();
const port = process.env.PORT || 9000;

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  next();
});

app.post('/api/translate/:word', async (req, res) => {
  const apiKey =  process.env.apiKey;
  const word = req.params.word;

  try {
    const response = await axios.post(
      'https://api.openai.com/v1/chat/completions',
      {
        model: "gpt-3.5-turbo",
        messages: [
          { role: 'system', content: 'You are a helpful assistant.' },
          { role: 'user', content: `將英文單字 "${word}" 翻譯成繁體中文不要羅馬拼音` },
        ],
        max_tokens: 50,
        n: 1,
        stop: null
      },
      {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${apiKey}`
        }
      }
    );
    const translation = response.data.choices?.[0]?.message?.['content']?.trim();
    console.log(translation);
    if (translation) {
      res.json({ translation });
    } else {
      console.error('Invalid API response format:', response.data);
      res.status(500).json({ error: 'An error occurred' });
    }
  } catch (error) {
    console.error('Error:', error.message);
    res.status(500).json({ error: 'An error occurred' });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
