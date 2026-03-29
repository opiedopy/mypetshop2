# mypetshop2

## [cite_start]Folder Structure [cite: 13-25]
- `index.html` - Main entry and update logic
- `manifest.json` - PWA config
- `sw.js` - Cache-first service worker
- `images/` - dog.png, cat.png, curler-hamster-icon.png

## [cite_start]Deployment Workflow [cite: 12]
1. [cite_start]Upload files to GitHub repository `mypetshop2`. [cite: 6]
2. Enable **GitHub Pages** in Settings -> Pages.
3. [cite_start]Access via HTTPS. [cite: 26]

## [cite_start]How to Update 
1. Edit `sw.js`.
2. Change `CACHE_VERSION = 'v1'` to `'v2'`.
3. Push change to GitHub.
4. [cite_start]Users will see a banner on their next visit to update instantly. [cite: 8]
