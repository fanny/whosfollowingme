chrome.runtime.onMessage.addListener((res, sender, sendResponse) => {
    
    chrome.cookies.get({ url: 'https://github.com/', name: 'dotcom_user' }, cookie => {
        sendResponse({currentUser: cookie.value});
    });

    return true;
});