# 📲 InstallPWA

InstallPWA is a minimal, fully functional Progressive Web App (PWA) demo built with vanilla HTML, CSS, and JavaScript. It showcases how to trigger a custom **"Install App"** prompt using the `beforeinstallprompt` event and implements a basic service worker for offline support.

---

## 🚀 Features

- ✅ Custom "Install App" button (CTA) for users to manually trigger installation
- 📦 PWA manifest with app icons and metadata
- ⚙️ Basic service worker for future offline capabilities
- 📱 Mobile-first design and installability
- 🌐 HTTPS-ready (required for full PWA functionality)

---

## 🧩 How it Works

1. The browser detects that the site meets PWA criteria.
2. It fires the `beforeinstallprompt` event (if allowed).
3. The event is saved and later triggered when the user clicks the "Install App" button.
4. The PWA can then be added to the home screen or desktop.

---

## 📁 File Structure

```
.
├── index.html             # Main page with install logic
├── manifest.json          # Web App Manifest
├── service-worker.js      # Registers a service worker
├── icon-192.png           # 192x192 icon
└── icon-512.png           # 512x512 icon
```

---

## 💻 How to Run Locally

You must serve this project via HTTPS or localhost.

### Option 1: Use any local server (e.g. `http-server`, `vite`, etc.)

```bash
npx http-server -p 8080
# then visit http://localhost:8080
```

### Option 2: Serve via Lando or Docker with HTTPS (see Lando README if needed)

---

## 📲 How to Install

Once running:

1. Open in Chrome or Edge on desktop or mobile.
2. When prompted or by clicking the **"Install App"** button, install the app.
3. Enjoy a standalone, app-like experience.

---

## 🛠 Requirements

- A modern browser (Chrome, Edge, Safari for iOS has limited support)
- HTTPS or localhost
- Basic familiarity with browser DevTools (for debugging)

---

## 📄 License

MIT — Use this freely in your own projects!

---

## ✨ Author

Built by ALAREZ  
Feel free to fork, reuse, and adapt!
