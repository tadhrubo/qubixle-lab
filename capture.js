const puppeteer = require('puppeteer');
const fs = require('fs');
const path = require('path');

const sites = [
  { url: 'https://nicoletta-s.vercel.app/', name: 'work-1.jpg' },
  { url: 'https://chefs-lounge.vercel.app/', name: 'work-2.jpg' },
  { url: 'https://wolfies-restaurant.vercel.app/', name: 'work-3.jpg' },
  { url: 'https://la-forge-s-bbq.vercel.app/', name: 'work-4.jpg' },
  { url: 'https://mady-bd.vercel.app/', name: 'work-5.jpg' },
  { url: 'https://omoggle.games/', name: 'work-6.jpg' },
  { url: 'https://tanjiddhrubo.github.io/the-grotto-restaurant/', name: 'work-7.jpg' },
  { url: 'https://forget-me-not-cafe.vercel.app/', name: 'work-8.jpg' }
];

const workDir = path.join(__dirname, 'assets', 'work');

if (!fs.existsSync(workDir)) {
  fs.mkdirSync(workDir, { recursive: true });
}

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.setViewport({ width: 1440, height: 900 });

  for (const site of sites) {
    console.log(`Capturing ${site.url}...`);
    try {
      await page.goto(site.url, { waitUntil: 'networkidle2', timeout: 60000 });
      // Wait an extra second for any animations to finish
      await new Promise(r => setTimeout(r, 2000));
      await page.screenshot({ path: path.join(workDir, site.name), quality: 80, type: 'jpeg' });
      console.log(`Saved ${site.name}`);
    } catch (e) {
      console.error(`Failed to capture ${site.url}:`, e);
    }
  }

  await browser.close();
  console.log('All done!');
})();
