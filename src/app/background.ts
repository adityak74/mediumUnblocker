chrome.runtime.onMessage.addListener((_, sender, sendResponse) => {
    var currentTabUrl = new URL(sender.tab.url);
    // clear cookies and reload
    chrome.cookies.getAll({ url: 'https://medium.com' },function (cookie){
        var allCookieInfo = [];
        for(var i=0; i < cookie.length; i++) {
            allCookieInfo.push(JSON.stringify(cookie[i]));
            chrome.cookies.remove({
                url: "" + currentTabUrl.protocol + "//" + currentTabUrl.hostname + cookie[i].path,
                name: cookie[i].name,
            });
        }
        chrome.tabs.update(sender.tab.id, { url: sender.tab.url });
        sendResponse({ clearedCookies: true });
    });
    return true;
});
