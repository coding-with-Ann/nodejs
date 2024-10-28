// index.js

const express = require('express');
const https = require('https');
const { JSDOM } = require('jsdom');

const app = express();
const PORT = process.env.PORT || 8080;

// Define the URL for TIME's website
const timeUrl = 'https://time.com/';

// Route to get the latest 6 stories
app.get('/getTimeStories', async (req, res) => {
  try {
    const htmlData = await fetchHtmlData(timeUrl);
    const stories = extractStories(htmlData);

    res.json(stories);
  } catch (error) {
    console.error('Error fetching stories:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Fetch HTML content from TIME's website
function fetchHtmlData(url) {
  return new Promise((resolve, reject) => {
    https.get(url, (response) => {
      let htmlData = '';
      response.on('data', (chunk) => {
        htmlData += chunk;
      });

      response.on('end', () => {
        resolve(htmlData);
      });

      response.on('error', (error) => {
        reject(error);
      });
    });
  });
}

// Extract the latest 6 stories from the HTML
function extractStories(html) {
  const dom = new JSDOM(html);
  const storyElements = dom.window.document.querySelectorAll('.latest-stories__item');
  console.log(storyElements)

  const stories = [];
  for (let i = 0; i < Math.min(storyElements.length, 6); i++) {
    const title = storyElements[i].textContent.trim();
    stories.push({ title });
  }

  return stories;
}

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
