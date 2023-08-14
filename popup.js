import { htmlContent } from "./src/content.js";
import "./assets/css/popup.scss";
import { getScriptURL } from "./src/url-helper";
import emailRegex from "./src/email-regex";

let kassshPopupId = "kasssh-popup-container";
let cartAmount = 0;

const bindEvents = (onSubmit, onClose) => {
    document
        .querySelectorAll("[data-kasssh-close]")
        .forEach((node)=>{
            node.addEventListener("click", () => {
                onClose ? onClose() : toggleKassshPopup(false);
            });
        })

    const submitButton = document.querySelector("[data-kasssh-submit]");
    submitButton.disabled = true;
    submitButton.addEventListener("click", () => {
        onSubmit({
            phone: validatePhone(),
            email: validateEmail(),
        });
        toggleKassshPopup(false);
    });

    document
        .querySelectorAll("[data-kasssh-input]")
        .forEach(node => node.addEventListener("change", validateForm));
};

const validateForm = () => {
    const submitButton = document.querySelector("[data-kasssh-submit]");
    submitButton.disabled = true;

    if (cartAmount > 300) {
        // console.log("invalid amount");
        return;
    }

    if (!validatePhone() || !validateEmail()) {
        console.log("email or phone invalid");
        return;
    }

    if (!document.querySelector("[data-kasssh-tnc]").checked) {
        // console.log("tnc checck required");
        return;
    }

    submitButton.disabled = false;
};

const validatePhone = () => {
    let field = document.querySelector("[data-kasssh-phone]");
    if(field.tagName != "INPUT"){
        return field.innerText;
    }

    field = field.value;

    return /^\d{10,}$/.test(field) ? field : null;
};

const validateEmail = () => {
    let field = document.querySelector("[data-kasssh-email]");

    if(field.tagName != "INPUT"){
        return field.innerText;
    }

    field = field.value;

    return emailRegex().test(field) ? field : null;
};

export const initKassshPopup = (
    { email, phone, amount },
    onSubmit,
    onClose = null,
    scriptName = "popup.js",
    assetsUrl = null,
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
    kassshPopup.innerHTML = htmlContent(email, phone, amount.toFixed(2), assetsUrl ? assetsUrl : getScriptURL(scriptName));

    // add new DOM element to the page
    document.body.appendChild(kassshPopup);

    // show/hide email/phone
    if(!!email) {
        document.querySelector("[data-kasssh-email][data-kasssh-input]").style.display = 'none';
    } else {
        document.querySelector("[data-kasssh-email][data-kasssh-info]").style.display = 'none';
    }
    if(!!phone) {
        document.querySelector("[data-kasssh-phone][data-kasssh-input]").style.display = 'none';
    } else {
        document.querySelector("[data-kasssh-phone][data-kasssh-info]").style.display = 'none';
    }

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
