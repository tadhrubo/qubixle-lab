# Qubixle Lab — Website

Static site, no build step, no framework, no dependencies to install.

## Structure
    index.html        Markup
    css/style.css      All styles (custom properties at the top)
    js/main.js         Nav scroll state, mobile menu, scroll-reveal, hero voxel animation
    assets/            Logo marks (bone = light version for dark backgrounds, graphite = dark version, copper = accent version)

## Run it locally
Just open index.html in a browser, or use a local server for the best experience
(VS Code "Live Server" extension, or run `python3 -m http.server` from this folder
and visit http://localhost:8000).

## Fonts
Clash Display + General Sans, loaded from Fontshare's CDN in the <head>.
No local font files needed.

## Design tokens
All colors, fonts, spacing live as CSS custom properties at the top of style.css
under :root. Change a value there and it propagates everywhere.
