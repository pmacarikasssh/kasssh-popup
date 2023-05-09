import {htmlContent} from './content.js'
import './assets/css/app.css'

let kassshPopupId = "kasssh-popup-container"

const kassshUrl = process.env.KASSSH_URL
window.initKassshPopup = ({ email, phone, amount }) => {
    // create new DOM element
    const kassshPopup = document.createElement('div')
    kassshPopup.id = kassshPopupId
    kassshPopup.style.display = 'none'
    kassshPopup.innerHTML = htmlContent({
        kassshUrl,
        email,
        phone,
        amount,
    })

    // add new DOM element to the page
    document.body.appendChild(kassshPopup)
}

window.toggleKassshPopup = (flag) => {
    const kassshPopup = document.getElementById(kassshPopupId)
    if (flag) {
        kassshPopup.style.display = "block"
    } else {
        kassshPopup.style.display = "none"
    }
}
