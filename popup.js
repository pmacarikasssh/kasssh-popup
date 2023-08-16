import { htmlContent } from "./src/content.js";
import "./assets/css/popup.scss";
import { getScriptURL } from "./src/url-helper.js";
import emailRegex from "./src/email-regex";

class Kasssh {
  kassshPopupId = "kasssh-popup-container";
  email = null;
  phone = null;

  constructor(amount, scriptName = "popup.js", assetsUrl = null) {
    this.cartAmount = amount;
    this.scriptName = scriptName;
    this.assetsUrl = assetsUrl;
    this.onSubmitCallback = null;
    this.onCloseCallback = null;
  }

  init({ email = null, phone = null }) {
    this.email = email;
    this.phone = phone;

    //if code already injected then delete and add again
    const kassshPopupExist = document.getElementById(this.kassshPopupId);
    if (kassshPopupExist) {
      kassshPopupExist.remove();
    }

    // create new DOM element
    const kassshPopup = document.createElement("div");
    kassshPopup.id = this.kassshPopupId;
    kassshPopup.style.display = "none";
    kassshPopup.innerHTML = htmlContent(
      email,
      phone,
      this.cartAmount.toFixed(2),
      this.assetsUrl ? this.assetsUrl : this.getScriptURL(this.scriptName, this.assetsUrl)
    );

    // add new DOM element to the page
    document.body.appendChild(kassshPopup);

    // show/hide email/phone
    if (!!email) {
      document.querySelector("[data-kasssh-email][data-kasssh-input]").style.display = "none";
    } else {
      document.querySelector("[data-kasssh-email][data-kasssh-info]").style.display = "none";
    }
    if (!!phone) {
      document.querySelector("[data-kasssh-phone][data-kasssh-input]").style.display = "none";
    }

    this.bindEvents();

    if (this.cartAmount <= 300) {
      document.querySelector("[data-kasssh-amount-error]").style.display = "none";
    }
  }

  toggle(flag) {
    const kassshPopup = document.getElementById(this.kassshPopupId);
    if (flag) {
      kassshPopup.style.display = "block";
    } else {
      kassshPopup.style.display = "none";
    }
  }

  toggleSpinner(flag) {
    if(flag) {
      document.getElementById("kasssh-loading-spinner").classList.remove('d-none');
    } else {
      document.getElementById("kasssh-loading-spinner").classList.add('d-none');
    }
  }

  onSubmit(callback) {
    this.onSubmitCallback = callback;
  }

  onClose(callback) {
    this.onCloseCallback = callback;
  }

  bindEvents() {
    document.querySelectorAll("[data-kasssh-close]").forEach((node) => {
      node.addEventListener("click", () => {
        this.onCloseCallback ? this.onCloseCallback() : this.toggle(false);
      });
    });

    const submitButton = document.querySelector("[data-kasssh-submit]");
    submitButton.disabled = true;
    submitButton.addEventListener("click", () => {
      const phone = this.validatePhone();
      const email = this.validateEmail();
      if (phone && email) {
        this.onSubmitCallback({ phone, email });
      }
    });

    document.querySelectorAll("[data-kasssh-input]").forEach((node) =>
      node.addEventListener("input", this.validateForm.bind(this))
    );
  }

  validateForm() {
    const submitButton = document.querySelector("[data-kasssh-submit]");
    submitButton.disabled = true;

    if (this.cartAmount > 300) {
      return;
    }

    if (!this.validatePhone() || !this.validateEmail()) {
      return;
    }

    if (!document.querySelector("[data-kasssh-tnc]").checked) {
      return;
    }

    submitButton.disabled = false;
  }

  validatePhone() {
    if (this.phone) {
      return this.phone;
    }

    let field = document.querySelector("[data-kasssh-phone] input");
    field = field.value;
    return /^\d{10,}$/.test(field) ? field : null;
  }

  validateEmail() {
    if (this.email) {
      return this.email;
    }

    let field = document.querySelector("[data-kasssh-email] input");
    field = field.value;
    return emailRegex().test(field) ? field : null;
  }

  getScriptURL(scriptName, assetsUrl) {
    if (assetsUrl) {
      return `${assetsUrl}/${scriptName}`;
    } else {
      return getScriptURL(scriptName);
    }
  }
}

window.Kasssh = Kasssh;
export default Kasssh;
