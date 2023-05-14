import { htmlContent } from "./content.js";
import "./assets/css/popup.scss";

let kassshPopupId = "kasssh-popup-container";

const getScriptURL = (scriptName = "popup.js") => {
    var script =
        document.currentScript ||
        document.querySelector(`script[src*="${scriptName}"]`);
    const [, url] = script.src.match(/^(.*)(\/.*\.js)/);
    return url;
};

const bindEvents = (onSubmit, onClose) => {
    document
        .querySelector("[data-kasssh-close]")
        .addEventListener("click", () => {
            onClose ? onClose() : toggleKassshPopup(false);
        });

    const submitButton = document.querySelector("[data-kasssh-submit]");
    submitButton.disabled = true;
    submitButton.addEventListener("click", () => {
        let phone = document.querySelector("[data-kasssh-phone]");
        onSubmit({
            phone: phone.value ? phone.value : phone.innerText,
        });
        toggleKassshPopup(false);
    });

    document.querySelector("[data-kasssh-tnc]").addEventListener("change", (e) => {
        if (e.target.checked) {
            submitButton.disabled = false;
        } else {
            submitButton.disabled = true;
        }
    });
};

export const initKassshPopup = (
    { email, phone, amount },
    onSubmit,
    onClose = null,
    scriptName = null
) => {
    //if code already injected then delete and add again
    const kassshPopupExist = document.getElementById(kassshPopupId);
    if (kassshPopupExist) {
        kassshPopupExist.remove();
    }

    // create new DOM element
    const kassshPopup = document.createElement("div");
    kassshPopup.id = kassshPopupId;
    kassshPopup.style.display = "none";
    kassshPopup.innerHTML = htmlContent(email, phone, amount, getScriptURL());

    // add new DOM element to the page
    document.body.appendChild(kassshPopup);
    bindEvents(onSubmit, onClose);
};

export const toggleKassshPopup = (flag) => {
    const kassshPopup = document.getElementById(kassshPopupId);
    if (flag) {
        kassshPopup.style.display = "block";
    } else {
        kassshPopup.style.display = "none";
    }
};

window.initKassshPopup = initKassshPopup;
window.toggleKassshPopup = toggleKassshPopup;
