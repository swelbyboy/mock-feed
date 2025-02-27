const express = require('express');
const fs = require('fs').promises;
const path = require('path');

const app = express();

app.get('/feed', async (req, res) => {
    try {
        const feedContent = await fs.readFile(path.join(__dirname, 'mock-feed.xml'), 'utf8');
        res.set('Content-Type', 'application/rss+xml');
        res.send(feedContent);
    } catch (error) {
        console.error('Error serving feed:', error);
        res.status(500).send('Error serving feed');
    }
});

// Remove the app.listen() call for Vercel deployment
// Export the Express app
module.exports = app;