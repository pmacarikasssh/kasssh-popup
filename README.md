# Kasssh Popup

The Kasssh Popup JS library offers an easier way to display popups to customers, providing details on how to pay using Kasssh. The library ensures the correct details are provided and that the customer agrees to the Terms and Conditions (TNC) and Privacy Policy.

## Setup

### CDN

To include the Kasssh CSS and JavaScript using CDN, add the following code to your checkout page:

```html
<link
  rel="stylesheet"
  href="https://cdn.jsdelivr.net/gh/pmacarikasssh/kasssh-popup/dist/popup.css"
/>
<script src="https://cdn.jsdelivr.net/gh/pmacarikasssh/kasssh-popup/dist/popup.js"></script>
```

For a specific version:

```html
<script src="https://cdn.jsdelivr.net/gh/pmacarikasssh/kasssh-popup@0.4.0/dist/popup.js"></script>
```

### NPM

Install the Kasssh popup library using NPM:

```sh
npm i @kasssh-js/popup
```

Then, import it in your JS file:

```js
import Kasssh from "@kasssh-js/popup/popup.js";
```

## Checkout Process

During your checkout event, add the following:

```js
// Create an object for Kasssh
var kasssh = new window.Kasssh(300.0);

// Initialize with customer data
kasssh.init({ email: "customer@example.com", phone: "0123456789" });

// Set up a callback for Kasssh on the submit event
kasssh.onSubmit((data) => {
  // Display a spinner
  kasssh.toggleSpinner(true);

  // Perform HTTP calls to your server to create an order with Kasssh as the payment method

  // Hide the spinner and the popup
  kasssh.toggleSpinner(false);
  kasssh.toggle(false);

  // TODO: Redirect the customer to the order confirmation page
});

// add this to event when user clicks checkout with kasssh
kasssh.toggle(true);
```
