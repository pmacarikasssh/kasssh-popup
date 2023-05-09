/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
/* unused harmony exports initKassshPopup, toggleKassshPopup */



let kassshPopupId = "kasssh-popup-container"

const initKassshPopup = ({ email, phone, amount }) => {

    //if code already injected then delete and add again
    const kassshPopupExist = document.getElementById(kassshPopupId)
    if (kassshPopupExist) {
        kassshPopup.remove()
    }

    // create new DOM element
    const kassshPopup = document.createElement('div')
    kassshPopup.id = kassshPopupId
    kassshPopup.style.display = 'none'
    kassshPopup.innerHTML = htmlContent({
        email,
        phone,
        amount,
    })

    // add new DOM element to the page
    document.body.appendChild(kassshPopup)
}

const toggleKassshPopup = (flag) => {
    const kassshPopup = document.getElementById(kassshPopupId)
    if (flag) {
        kassshPopup.style.display = "block"
    } else {
        kassshPopup.style.display = "none"
    }
}

/******/ })()
;