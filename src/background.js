chrome.runtime.onMessage.addListener(function(res, sender, sendResponse) {
    chrome.cookies.get({ url: 'https://github.com/', name: 'dotcom_user' }, async (cookies) => {
      let cookiesFinal = await fetchTheData(cookies);
      console.log(cookiesFinal)
      sendResponse(cookiesFinal);
    });

    const fetchTheData = (value) => {
        return new Promise(function(resolve, reject){
            if(value){
                resolve(value);
            }
            else{
                reject('an error encoutered');
            }
        });
    };
});