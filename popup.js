import { htmlContent } from "/src/content.js";
import "./assets/css/popup.scss";
import { getScriptURL } from "./src/url-helper";

let kassshPopupId = "kasssh-popup-container";
let cartAmount = 0;

const bindEvents = (onSubmit, onClose) => {
    document
        .querySelector("[data-kasssh-close]")
        .addEventListener("click", () => {
            onClose ? onClose() : toggleKassshPopup(false);
        });

    const submitButton = document.querySelector("[data-kasssh-submit]");
    submitButton.disabled = true;
    submitButton.addEventListener("click", () => {
        onSubmit({
            phone: validatePhone(),
        });
        toggleKassshPopup(false);
    });

    document
        .querySelector("[data-kasssh-tnc]")
        .addEventListener("change", validateForm);
    document
        .querySelector("[data-kasssh-phone]")
        .addEventListener("change", validateForm);
};

const validateForm = () => {
    const submitButton = document.querySelector("[data-kasssh-submit]");
    submitButton.disabled = true;

    if (cartAmount > 300) {
        // console.log("invalid amount");
        return;
    }

    if (!validatePhone()) {
        // console.log("invalid phone", validatePhone());
        return;
    }

    if (!document.querySelector("[data-kasssh-tnc]").checked) {
        // console.log("tnc checck required");
        return;
    }

    submitButton.disabled = false;
};

const validatePhone = () => {
    let phone = document.querySelector("[data-kasssh-phone]");
    phone = phone.tagName == "INPUT" ? phone.value : phone.innerText;

    return /^\d{10,}$/.test(phone) ? phone : null;
};

export const initKassshPopup = (
    { email, phone, amount },
    onSubmit,
    onClose = null,
    scriptName = null
) => {
    cartAmount = amount;
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

    if (amount <= 300) {
        document.querySelector("[data-kasssh-amount-error]").style.display = "none";
    }
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
