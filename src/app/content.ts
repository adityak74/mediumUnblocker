var WAIT_MINUTES = 1;
var WAIT_TIME_MILLIS = WAIT_MINUTES * 60 * 1000;
var KEEP_CHECKING = true;
var COMPLETE = "complete";

var checkReady = setInterval(() => {
    console.log("Checking for content...");
    if (document.readyState === COMPLETE) {
        clearInterval(checkReady);
        setTimeout(function() {
            KEEP_CHECKING = false;
        }, WAIT_TIME_MILLIS);
        var checkExist = setInterval(function() {
            const documentTreeString = document.documentElement.innerHTML.toLowerCase();
            console.log(documentTreeString);
            if (documentTreeString.search(/read.*(more|story).*((with.*free.*account)|(everything.*on.*medium))./g) > -1) {
                clearInterval(checkExist);
                console.log("Medium is ready");
                chrome.runtime.sendMessage({ clearCookies: true });
            }
            if (!KEEP_CHECKING) {
                clearInterval(checkExist); 
            }
         }, 500); // check every 500ms
    }
});
