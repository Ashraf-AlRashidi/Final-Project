// Eye Care Extension - background service worker
// Helps users follow the 20-20-20 rule to reduce eye strain

chrome.runtime.onInstalled.addListener(() => {
  chrome.permissions.contains(
    { permissions: ["notifications"] },
    (result) => {
      if (!result) {
        chrome.permissions.request({ permissions: ["notifications"] });
      }
    }
  );

  chrome.notifications.getPermissionLevel((permissionLevel) => {
    console.log("Notification permission level:", permissionLevel);
  });
});

chrome.alarms.onAlarm.addListener((alarm) => {
  if (alarm.name === "eye_care") {
    chrome.notifications.create(
      {
        type: "basic",
        iconUrl: "eye.png",
        title: "👁️ Eye Care Reminder",
        message: "Look 20 feet away for 20 seconds. Your eyes will thank you!",
        priority: 2,
        requireInteraction: true,
      },
      function (notificationId) {
        console.log("Notification sent:", notificationId);
        if (chrome.runtime.lastError) {
          console.error("Notification error:", chrome.runtime.lastError);
        }
      }
    );
  }
});

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  try {
    if (request.action === "reset") {
      chrome.alarms.clear("eye_care", () => {
        if (chrome.runtime.lastError) {
          console.error("Error clearing alarm:", chrome.runtime.lastError);
          sendResponse({ success: false, error: chrome.runtime.lastError });
        } else {
          sendResponse({ success: true });
        }
      });
      return true;
    }

    if (request.time) {
      const minutes = parseInt(request.time);
      if (isNaN(minutes) || minutes <= 0 || minutes > 999) {
        sendResponse({ success: false, error: "Invalid time value" });
        return true;
      }

      createAlarm(minutes);
      sendResponse({ success: true });
    }
  } catch (error) {
    console.error("Error in message handler:", error);
    sendResponse({ success: false, error: error.message });
  }
  return true;
});

function createAlarm(minutes) {
  console.log("Creating eye care alarm for", minutes, "minutes");
  chrome.alarms.clear("eye_care", () => {
    chrome.alarms.create("eye_care", {
      delayInMinutes: minutes,
      periodInMinutes: minutes,
    });
    console.log("Eye care alarm created successfully");

    chrome.alarms.get("eye_care", (alarm) => {
      console.log("Current alarm:", alarm);
    });
  });
}
