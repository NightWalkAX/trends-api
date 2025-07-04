const express = require('express');
const googleTrends = require('google-trends-api');
const app = express();

app.get('/', (req, res) => {
  res.json({ message: 'Google Trends API Serverless. Endpoints: /daily, /realtime, /related-topics' });
});

app.get('/daily', async (req, res) => {
  try {
    const { geo = 'US' } = req.query;
    const results = await googleTrends.dailyTrends({ geo });
    res.json(JSON.parse(results));
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.get('/realtime', async (req, res) => {
  try {
    const { geo = 'US', category = 'all' } = req.query;
    const results = await googleTrends.realTimeTrends({ geo, category });
    res.json(JSON.parse(results));
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.get('/related-topics', async (req, res) => {
  try {
    const { keyword, geo = 'US' } = req.query;
    if (!keyword) return res.status(400).json({ error: 'keyword is required' });
    const results = await googleTrends.relatedTopics({ keyword, geo });
    res.json(JSON.parse(results));
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

const serverless = require('serverless-http');
module.exports = serverless(app);