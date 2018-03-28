chrome.runtime.onMessage.addListener((res, sender, sendResponse) => {
    
    chrome.cookies.get({ url: 'https://github.com/', name: 'dotcom_user' }, cookie => {
        sendResponse({currentUser: cookie.value});
    });

    return true;
});

chrome.webNavigation.onHistoryStateUpdated.addListener((details) => {
    chrome.tabs.executeScript(null, { file : "build/static/js/main.59f78dd7.js"});
});