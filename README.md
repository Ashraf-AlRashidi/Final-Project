# 👁️ Eye Care — Chrome Extension

<div align="center">

![Eye Care Banner](https://capsule-render.vercel.app/api?type=waving&color=0:00dcff,100:8b5cf6&height=200&section=header&text=Eye%20Care&fontSize=60&fontColor=ffffff&animation=fadeIn&fontAlignY=38&desc=Protect%20Your%20Vision%20with%20the%2020-20-20%20Rule&descAlignY=55&descSize=18)

[![Made by](https://img.shields.io/badge/Made%20by-%F0%9F%91%A8%E2%80%8D%F0%9F%92%BB%20البشمهندس%20أشروووووف-00dcff?style=for-the-badge)](https://github.com/)
[![Chrome Extension](https://img.shields.io/badge/Chrome-Extension-4285F4?style=for-the-badge&logo=googlechrome&logoColor=white)](https://developer.chrome.com/docs/extensions/)
[![Manifest V3](https://img.shields.io/badge/Manifest-V3-8b5cf6?style=for-the-badge)](https://developer.chrome.com/docs/extensions/mv3/)
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)

<br/>

**🎬 Video Demo**

[![Video Demo](https://img.shields.io/badge/▶%20Watch%20Demo-YouTube-FF0000?style=for-the-badge&logo=youtube&logoColor=white)](https://youtu.be/1VaiVjeO6UM?si=5grGMtsOCqfDIzqj)

</div>

---

## 📖 Overview

**Eye Care** is a lightweight Chrome extension that helps computer users protect their vision by following the **20-20-20 rule**. It runs quietly in the background and sends a desktop notification at a user-defined interval, reminding you to look away from your screen and give your eyes a well-deserved break.

---

## 👁️ The 20-20-20 Rule

<div align="center">

| ⏱️ Every **20** Minutes | 👀 Look **20** Feet Away | ⏳ For **20** Seconds |
|:---:|:---:|:---:|
| Take a break from your screen | Focus on something in the distance | Let your eye muscles fully relax |

</div>

> 💡 This simple habit, recommended by eye care professionals, can significantly reduce **digital eye strain**, dry eyes, blurry vision, and headaches.

---

## 💡 Why I Built This

As someone who spends long hours in front of a computer screen — whether studying, coding, or browsing — I started noticing signs of digital eye strain: dry eyes, blurry vision, and headaches.

I wanted a **lightweight, always-available tool** to remind me to follow the 20-20-20 rule without relying on phone timers or sticky notes. A Chrome extension felt like the perfect fit — it lives in the browser, runs silently in the background, and sends a notification exactly when needed.

---

## ⚙️ How It Works

```
User sets interval (default: 20 min)
        │
        ▼
Chrome Alarms API schedules repeating alarm
        │
        ▼
Alarm fires → Chrome Notifications API sends reminder
        │
        ▼
Popup shows live countdown timer ⏱️
```

---

## 📁 Project Structure

```
eye-care/
├── 📄 manifest.json      # Extension config & permissions
├── ⚡ background.js      # Service worker (runs in background)
├── 🖼️  popup.html         # Extension popup UI
├── 🔧 popup.js           # Popup logic & countdown timer
└── 🎨 style.css          # Dark theme styling & animations
```

### File Descriptions

| File | Description |
|------|-------------|
| `manifest.json` | Declares extension name, version, permissions (`alarms`, `notifications`, `storage`), icons, and background service worker. Uses **Manifest V3**. |
| `background.js` | Service worker running independently of the popup. Listens for alarm events and creates notifications. Handles `Start` and `Reset` messages from popup. |
| `popup.html` | The UI shown when clicking the extension icon. Contains interval input, Start/Reset buttons, and countdown display. |
| `popup.js` | Handles input validation (1–999 min), saves interval to Chrome Storage, communicates with the service worker, and runs the live countdown. |
| `style.css` | Dark color scheme with purple accent, monospaced countdown font, blinking eye animation, and pulse effect on reminder. |

---

## 🛠️ Tech Stack

![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat-square&logo=javascript&logoColor=black)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat-square&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat-square&logo=css3&logoColor=white)
![Chrome](https://img.shields.io/badge/Chrome%20APIs-4285F4?style=flat-square&logo=googlechrome&logoColor=white)

**Chrome Extension APIs used:**
- 🔔 `chrome.alarms` — Schedule repeating reminders
- 📢 `chrome.notifications` — Send desktop alerts
- 💾 `chrome.storage` — Persist user preferences
- 📡 `chrome.runtime` — Communicate between popup and worker

---

## 🚀 Installation

> **No web store required — load it directly in Chrome!**

**1. Clone the repository**
```bash
git clone https://github.com/your-username/eye-care.git
cd eye-care
```

**2. Open Chrome Extensions page**
```
chrome://extensions/
```

**3. Enable Developer Mode**

Toggle **Developer Mode** on (top-right corner)

**4. Load the extension**

Click **"Load Unpacked"** → select the project folder

**5. Pin it!**

Click the puzzle icon 🧩 in Chrome toolbar → pin **Eye Care** for easy access

---

## 🎨 Design Decisions

### ✅ Persistent Alarm State
If a user sets a 20-minute reminder, closes the popup, and reopens it 10 minutes later — the countdown correctly shows **10 minutes remaining**, not 20. This was achieved by querying the alarm's scheduled time on popup load instead of restarting the timer.

### ✅ Flexible Interval
While the classic rule uses 20 minutes, the input accepts **1 to 999 minutes** so users can customize it to their workflow.

### ✅ Service Worker Architecture
Using a **Service Worker** instead of a background page ensures reminders fire even when the popup is closed or the browser is minimized.

---

## 📸 Screenshots

> *(Add your screenshots here)*

```
[Popup UI]          [Desktop Notification]
  ┌────────┐           ┌──────────────────┐
  │ 👁 Eye │           │ 👁️ Eye Care       │
  │  Care  │           │ Time for a break! │
  │ 19:42  │           │ Look 20ft away... │
  │[Start] │           └──────────────────┘
  └────────┘
```

---

## 📜 License

This project is open source and available under the [MIT License](LICENSE).

---

<div align="center">

![Footer](https://capsule-render.vercel.app/api?type=waving&color=0:8b5cf6,100:00dcff&height=120&section=footer)

**Made with ❤️ by البشمهندس أشروووووف**

*اعمل لعيونك حق — وريّحها كل 20 دقيقة 👁️*

</div>
