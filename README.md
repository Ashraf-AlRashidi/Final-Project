# Eye Care
#### Video Demo: <URL HERE>
#### Description:

## Overview

Eye Care is a Chrome extension designed to help computer users protect their vision by following the 20-20-20 rule. The extension runs quietly in the background and sends a notification at a user-defined interval, reminding them to look away from their screen and give their eyes a much-needed break.

## Why I Built This

As someone who spends long hours in front of a computer screen — whether studying, coding, or browsing — I started noticing signs of digital eye strain: dry eyes, blurry vision, and headaches. After some research, I came across the 20-20-20 rule, which is widely recommended by eye care professionals. The rule is simple: every 20 minutes, look at something 20 feet away for 20 seconds. This brief habit can significantly reduce eye strain caused by prolonged screen use.

I wanted a lightweight, always-available tool to remind me to follow this rule without having to rely on phone timers or sticky notes. A Chrome extension felt like the perfect fit — it lives in the browser, runs silently in the background, and sends a notification exactly when needed.

## How It Works

The extension uses the Chrome Alarms API to schedule repeating reminders at a user-specified interval (defaulting to 20 minutes). When the alarm fires, the Chrome Notifications API sends a desktop notification prompting the user to look away. A live countdown timer in the popup shows how much time remains until the next reminder, so the user always knows where they are in the cycle.

## Files

### `manifest.json`
This is the configuration file for the Chrome extension. It declares the extension's name, description, version, permissions, icons, and background service worker. The extension requires three permissions: `alarms` (to schedule recurring reminders), `notifications` (to send desktop alerts), and `storage` (to save the user's preferred timer interval across sessions). It uses Manifest Version 3, the current standard for Chrome extensions.

### `background.js`
This is the service worker that runs in the background, independent of the popup UI. It handles two main responsibilities. First, it listens for alarm events — when the `eye_care` alarm fires, it creates a Chrome notification reminding the user to follow the 20-20-20 rule. Second, it listens for messages from the popup: when the user clicks "Start," the popup sends the chosen interval in minutes, and `background.js` clears any existing alarm and creates a new repeating one. When the user clicks "Reset," the alarm is cleared entirely.

The service worker approach ensures the reminders work even when the popup is closed or the browser is minimized.

### `popup.html`
This is the HTML structure for the extension's popup interface — what the user sees when they click the extension icon. It contains a number input for setting the reminder interval, a Start button to activate the timer, a Reset button to cancel it, and a countdown display area. It loads the stylesheet and the popup script.

### `popup.js`
This file controls all the interactivity in the popup. It handles input validation to ensure the user enters a number between 1 and 999 minutes. When the user clicks "Start," it saves the chosen interval to Chrome's local storage, sends a message to the background service worker to create the alarm, and starts a live countdown timer that updates every second. If an alarm already exists when the popup opens (because the user had previously started a timer), the countdown resumes from the correct remaining time.

### `style.css`
This file contains all the visual styling for the popup. The design uses a dark color scheme with a purple accent, a monospaced font for the countdown display, and subtle animations — including a blinking eye icon and a pulsing effect when the reminder fires. The layout is clean and minimal, fitting within the small popup window without feeling cluttered.

## Design Decisions

One key decision was whether to reset the countdown when the popup is closed and reopened. I decided to persist the alarm state — meaning if a user sets a 20-minute reminder, closes the popup, and reopens it 10 minutes later, the countdown will correctly show 10 minutes remaining. This was achieved by querying the existing alarm's scheduled time when the popup loads, rather than restarting the timer from scratch.

Another decision was the default interval. While the classic 20-20-20 rule uses 20 minutes, I kept the input flexible so users can customize it to their own workflow.

## Technologies Used

- JavaScript (Chrome Extension APIs: Alarms, Notifications, Storage, Runtime)
- HTML & CSS
- Chrome Manifest V3

## How to Install

1. Download or clone this repository
2. Open Chrome and go to `chrome://extensions/`
3. Enable **Developer Mode** (top right corner)
4. Click **Load Unpacked** and select the project folder
5. The Eye Care extension will appear in your extensions bar — pin it for easy access
