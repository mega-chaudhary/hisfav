# Made in Japan · His Favs → Now Mine

Plain HTML + CSS + React (JSX) with **no install and no build**.

## Open it
In VS Code, right-click **index.html** → **Open with Live Server**.
(Needs the "Live Server" extension and an internet connection, since React loads from a CDN.)

Double-clicking index.html will NOT work. Browsers block the .jsx files when the page
isn't served, so always use Live Server.

## Files
```
index.html        loads React, then each file in js/ in order
style.css         all the styling
songs/            ← put your mp3 files here
js/
  playlist.js     ← your song list (titles, artists, files)
  art.js          generates the chrome swirl artwork
  Icons.jsx       play / pause / next icons
  DiscArt.jsx     the printed face of the CD
  CoverArt.jsx    the cover on the little screen
  Disc.jsx        spinning disc (spin-up / slow-down)
  Screen.jsx      the small display UI
  Device.jsx      housing, ring, arcs, hub, knob
  usePlayer.js    audio playback logic
  App.jsx         page layout, keyboard, drag & drop
  main.jsx        starts the app
```

## Add songs
1. Put `made-in-japan.mp3` (and others) in `songs/`
2. Edit `js/playlist.js`, e.g.
   `{ title: 'Made in Japan', artist: 'Artist', src: songs('made-in-japan.mp3') },`
3. Save. Live Server reloads by itself.

You can also click **ADD +** on the player or drag mp3 files onto the page.

## Adding a new .jsx file
Add a `<script type="text/babel" data-presets="react" src="js/YourFile.jsx"></script>`
line in index.html **before** the files that use it. Don't use `import` / `export`.
Every file shares one scope.
