const supportedWebsiteUrls = ['https://medium.com', 'https://uxdesign.cc', 'https://levelup.gitconnected.com'];

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    var currentTabUrl = new URL(sender.tab.url);
    // clear cookies and reload
    for (var i = 0; i < supportedWebsiteUrls.length; i += 1) {
        chrome.cookies.getAll({ url: supportedWebsiteUrls[i] }, function (cookie) {
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
    }
    return true;
});
