"use strict";

var express = require('express');

var dotenv = require('dotenv').config();

var axios = require('axios');

var app = express();
var port = process.env.PORT || 2000;
app.use(function (req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  next();
});
app.get('/api/translate/:word', function _callee(req, res) {
  var apiKey, word, response, translation;
  return regeneratorRuntime.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          apiKey = process.env.apiKey;
          word = req.params.word;
          _context.prev = 2;
          _context.next = 5;
          return regeneratorRuntime.awrap(axios.post('https://api.openai.com/v1/engines/text-davinci-003/completions', {
            prompt: "Translate the English word \"".concat(word, "\" to Traditional Chinese."),
            max_tokens: 50
          }, {
            headers: {
              'Content-Type': 'application/json',
              'Authorization': "Bearer ".concat(apiKey)
            }
          }));

        case 5:
          response = _context.sent;
          translation = response.data.choices[0].text.trim();
          res.json({
            translation: translation
          });
          _context.next = 14;
          break;

        case 10:
          _context.prev = 10;
          _context.t0 = _context["catch"](2);
          console.error('Error:', _context.t0.message);
          res.status(500).json({
            error: 'An error occurred'
          });

        case 14:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, [[2, 10]]);
});
app.listen(port, function () {
  console.log("Server is running on port ".concat(port));
});