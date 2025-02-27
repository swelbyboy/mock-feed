const express = require('express');
const fs = require('fs').promises;
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

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

app.listen(PORT, () => {
    console.log(`RSS feed server running on port ${PORT}`);
});