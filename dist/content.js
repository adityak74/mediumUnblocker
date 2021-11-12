/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!****************************!*\
  !*** ./src/app/content.ts ***!
  \****************************/
var WAIT_MINUTES = 1;
var WAIT_TIME_MILLIS = WAIT_MINUTES * 60 * 1000;
var KEEP_CHECKING = true;
var COMPLETE = "complete";
var checkReady = setInterval(() => {
    if (document.readyState === COMPLETE) {
        clearInterval(checkReady);
        setTimeout(function () {
            KEEP_CHECKING = false;
        }, WAIT_TIME_MILLIS);
        var checkExist = setInterval(function () {
            const documentTreeString = document.documentElement.innerHTML;
            if (documentTreeString.search(/Read.*story.*with.*free.*account./g) > -1) {
                clearInterval(checkExist);
                chrome.runtime.sendMessage({ clearCookies: true });
            }
            if (!KEEP_CHECKING) {
                clearInterval(checkExist);
            }
        }, 500); // check every 500ms
    }
});

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udGVudC5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUFBLElBQUksWUFBWSxHQUFHLENBQUMsQ0FBQztBQUNyQixJQUFJLGdCQUFnQixHQUFHLFlBQVksR0FBRyxFQUFFLEdBQUcsSUFBSSxDQUFDO0FBQ2hELElBQUksYUFBYSxHQUFHLElBQUksQ0FBQztBQUN6QixJQUFJLFFBQVEsR0FBRyxVQUFVLENBQUM7QUFFMUIsSUFBSSxVQUFVLEdBQUcsV0FBVyxDQUFDLEdBQUcsRUFBRTtJQUM5QixJQUFJLFFBQVEsQ0FBQyxVQUFVLEtBQUssUUFBUSxFQUFFO1FBQ2xDLGFBQWEsQ0FBQyxVQUFVLENBQUMsQ0FBQztRQUMxQixVQUFVLENBQUM7WUFDUCxhQUFhLEdBQUcsS0FBSyxDQUFDO1FBQzFCLENBQUMsRUFBRSxnQkFBZ0IsQ0FBQyxDQUFDO1FBQ3JCLElBQUksVUFBVSxHQUFHLFdBQVcsQ0FBQztZQUN6QixNQUFNLGtCQUFrQixHQUFHLFFBQVEsQ0FBQyxlQUFlLENBQUMsU0FBUyxDQUFDO1lBQzlELElBQUksa0JBQWtCLENBQUMsTUFBTSxDQUFDLG9DQUFvQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUU7Z0JBQ3RFLGFBQWEsQ0FBQyxVQUFVLENBQUMsQ0FBQztnQkFDMUIsTUFBTSxDQUFDLE9BQU8sQ0FBQyxXQUFXLENBQUMsRUFBRSxZQUFZLEVBQUUsSUFBSSxFQUFFLENBQUMsQ0FBQzthQUN0RDtZQUNELElBQUksQ0FBQyxhQUFhLEVBQUU7Z0JBQ2hCLGFBQWEsQ0FBQyxVQUFVLENBQUMsQ0FBQzthQUM3QjtRQUNKLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQyxDQUFDLG9CQUFvQjtLQUNqQztBQUNMLENBQUMsQ0FBQyxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbWVkaXVtLXVuYmxvY2tlci8uL3NyYy9hcHAvY29udGVudC50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgV0FJVF9NSU5VVEVTID0gMTtcclxudmFyIFdBSVRfVElNRV9NSUxMSVMgPSBXQUlUX01JTlVURVMgKiA2MCAqIDEwMDA7XHJcbnZhciBLRUVQX0NIRUNLSU5HID0gdHJ1ZTtcclxudmFyIENPTVBMRVRFID0gXCJjb21wbGV0ZVwiO1xyXG5cclxudmFyIGNoZWNrUmVhZHkgPSBzZXRJbnRlcnZhbCgoKSA9PiB7XHJcbiAgICBpZiAoZG9jdW1lbnQucmVhZHlTdGF0ZSA9PT0gQ09NUExFVEUpIHtcclxuICAgICAgICBjbGVhckludGVydmFsKGNoZWNrUmVhZHkpO1xyXG4gICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgIEtFRVBfQ0hFQ0tJTkcgPSBmYWxzZTtcclxuICAgICAgICB9LCBXQUlUX1RJTUVfTUlMTElTKTtcclxuICAgICAgICB2YXIgY2hlY2tFeGlzdCA9IHNldEludGVydmFsKGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICBjb25zdCBkb2N1bWVudFRyZWVTdHJpbmcgPSBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuaW5uZXJIVE1MO1xyXG4gICAgICAgICAgICBpZiAoZG9jdW1lbnRUcmVlU3RyaW5nLnNlYXJjaCgvUmVhZC4qc3RvcnkuKndpdGguKmZyZWUuKmFjY291bnQuL2cpID4gLTEpIHtcclxuICAgICAgICAgICAgICAgIGNsZWFySW50ZXJ2YWwoY2hlY2tFeGlzdCk7XHJcbiAgICAgICAgICAgICAgICBjaHJvbWUucnVudGltZS5zZW5kTWVzc2FnZSh7IGNsZWFyQ29va2llczogdHJ1ZSB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoIUtFRVBfQ0hFQ0tJTkcpIHtcclxuICAgICAgICAgICAgICAgIGNsZWFySW50ZXJ2YWwoY2hlY2tFeGlzdCk7IFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgIH0sIDUwMCk7IC8vIGNoZWNrIGV2ZXJ5IDUwMG1zXHJcbiAgICB9XHJcbn0pO1xyXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=