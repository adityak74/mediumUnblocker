/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!*******************************!*\
  !*** ./src/app/background.ts ***!
  \*******************************/
const supportedWebsiteUrls = ['https://medium.com', 'https://uxdesign.cc', 'https://levelup.gitconnected.com'];
chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    var currentTabUrl = new URL(sender.tab.url);
    // clear cookies and reload
    for (var i = 0; i < supportedWebsiteUrls.length; i += 1) {
        chrome.cookies.getAll({ url: supportedWebsiteUrls[i] }, function (cookie) {
            var allCookieInfo = [];
            for (var i = 0; i < cookie.length; i++) {
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

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFja2dyb3VuZC5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUFBLE1BQU0sb0JBQW9CLEdBQUcsQ0FBQyxvQkFBb0IsRUFBRSxxQkFBcUIsRUFBRSxrQ0FBa0MsQ0FBQyxDQUFDO0FBRS9HLE1BQU0sQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLFdBQVcsQ0FBQyxDQUFDLE9BQU8sRUFBRSxNQUFNLEVBQUUsWUFBWSxFQUFFLEVBQUU7SUFDbkUsSUFBSSxhQUFhLEdBQUcsSUFBSSxHQUFHLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUM1QywyQkFBMkI7SUFDM0IsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLG9CQUFvQixDQUFDLE1BQU0sRUFBRSxDQUFDLElBQUksQ0FBQyxFQUFFO1FBQ3JELE1BQU0sQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLEVBQUUsR0FBRyxFQUFFLG9CQUFvQixDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUUsVUFBVSxNQUFNO1lBQ3BFLElBQUksYUFBYSxHQUFHLEVBQUUsQ0FBQztZQUN2QixLQUFJLElBQUksQ0FBQyxHQUFDLENBQUMsRUFBRSxDQUFDLEdBQUcsTUFBTSxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRTtnQkFDakMsYUFBYSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBQzlDLE1BQU0sQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDO29CQUNsQixHQUFHLEVBQUUsRUFBRSxHQUFHLGFBQWEsQ0FBQyxRQUFRLEdBQUcsSUFBSSxHQUFHLGFBQWEsQ0FBQyxRQUFRLEdBQUcsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUk7b0JBQ2pGLElBQUksRUFBRSxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSTtpQkFDdkIsQ0FBQyxDQUFDO2FBQ047WUFDRCxNQUFNLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLEVBQUUsRUFBRSxFQUFFLEdBQUcsRUFBRSxNQUFNLENBQUMsR0FBRyxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUM7WUFDM0QsWUFBWSxDQUFDLEVBQUUsY0FBYyxFQUFFLElBQUksRUFBRSxDQUFDLENBQUM7UUFDM0MsQ0FBQyxDQUFDLENBQUM7S0FDTjtJQUNELE9BQU8sSUFBSSxDQUFDO0FBQ2hCLENBQUMsQ0FBQyxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbWVkaXVtLXVuYmxvY2tlci8uL3NyYy9hcHAvYmFja2dyb3VuZC50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBzdXBwb3J0ZWRXZWJzaXRlVXJscyA9IFsnaHR0cHM6Ly9tZWRpdW0uY29tJywgJ2h0dHBzOi8vdXhkZXNpZ24uY2MnLCAnaHR0cHM6Ly9sZXZlbHVwLmdpdGNvbm5lY3RlZC5jb20nXTtcblxuY2hyb21lLnJ1bnRpbWUub25NZXNzYWdlLmFkZExpc3RlbmVyKChtZXNzYWdlLCBzZW5kZXIsIHNlbmRSZXNwb25zZSkgPT4ge1xuICAgIHZhciBjdXJyZW50VGFiVXJsID0gbmV3IFVSTChzZW5kZXIudGFiLnVybCk7XG4gICAgLy8gY2xlYXIgY29va2llcyBhbmQgcmVsb2FkXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdXBwb3J0ZWRXZWJzaXRlVXJscy5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgICBjaHJvbWUuY29va2llcy5nZXRBbGwoeyB1cmw6IHN1cHBvcnRlZFdlYnNpdGVVcmxzW2ldIH0sIGZ1bmN0aW9uIChjb29raWUpIHtcbiAgICAgICAgICAgIHZhciBhbGxDb29raWVJbmZvID0gW107XG4gICAgICAgICAgICBmb3IodmFyIGk9MDsgaSA8IGNvb2tpZS5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIGFsbENvb2tpZUluZm8ucHVzaChKU09OLnN0cmluZ2lmeShjb29raWVbaV0pKTtcbiAgICAgICAgICAgICAgICBjaHJvbWUuY29va2llcy5yZW1vdmUoe1xuICAgICAgICAgICAgICAgICAgICB1cmw6IFwiXCIgKyBjdXJyZW50VGFiVXJsLnByb3RvY29sICsgXCIvL1wiICsgY3VycmVudFRhYlVybC5ob3N0bmFtZSArIGNvb2tpZVtpXS5wYXRoLFxuICAgICAgICAgICAgICAgICAgICBuYW1lOiBjb29raWVbaV0ubmFtZSxcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNocm9tZS50YWJzLnVwZGF0ZShzZW5kZXIudGFiLmlkLCB7IHVybDogc2VuZGVyLnRhYi51cmwgfSk7XG4gICAgICAgICAgICBzZW5kUmVzcG9uc2UoeyBjbGVhcmVkQ29va2llczogdHJ1ZSB9KTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIHJldHVybiB0cnVlO1xufSk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=