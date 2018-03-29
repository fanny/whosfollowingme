/* global chrome */

export default () => {
    return new Promise((resolve, reject) => {
        chrome.runtime.sendMessage({}, (response) => {
            resolve(response.currentUser);
        });
    });
};
