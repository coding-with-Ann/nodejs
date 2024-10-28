const express = require('express');
const https = require('https');
const { JSDOM } = require('jsdom');

const app = express();
const port = 4500
const timeUrl = 'https://time.com/';

app.get('/getTimeStories', async (req, res) => {
      const htmlData = await fetchHtmlData(timeUrl);
      const stories = extractStories(htmlData);
  
      res.json(stories);
    })


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
          });
        });
      }

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

app.listen(port)
