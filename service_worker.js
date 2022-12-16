/* Manager Interceptor includes identity */
chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
  if (
    changeInfo.status === "complete" &&
    /nfieldmr/.test(tab.url) &&
    !/interviewing/.test(tab.url) &&
    !/api\.nfieldmr/.test(tab.url)
  ) {
    chrome.scripting
      .insertCSS({
        target: { tabId: tabId },
        files: ["./app/assets/styles/app.css"],
      })
      .then(() => {
        chrome.scripting
          .executeScript({
            target: { tabId: tabId },
            files: ["./app/app.js"],
          })
          .catch((err) => console.log(err));
      });
  }
});

/* API Interceptor */
chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
  if (changeInfo.status === "complete" && /api\.nfieldmr/.test(tab.url)) {
    chrome.scripting
      .insertCSS({
        target: { tabId: tabId },
        files: ["./app/assets/styles/api.css"],
      })
      .then(() => {
    chrome.scripting
      .executeScript({
        target: { tabId: tabId },
        files: ["./app/api.js"],
      })
      .catch((err) => console.log(err));
  });
  }
});
