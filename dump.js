const puppeteer = require('puppeteer');
(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto('https://lively-bunny-a1bd05.netlify.app', {waitUntil: 'networkidle2'});
  const html = await page.content();
  const fs = require('fs');
  fs.writeFileSync('rendered.html', html);
  await browser.close();
})();
