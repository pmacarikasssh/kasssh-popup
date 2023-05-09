import {htmlContent} from './content.js'
import './assets/css/popup.css'

let kassshPopupId = "kasssh-popup-container"

export const initKassshPopup = ({ email, phone, amount }) => {

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

export const toggleKassshPopup = (flag) => {
    const kassshPopup = document.getElementById(kassshPopupId)
    if (flag) {
        kassshPopup.style.display = "block"
    } else {
        kassshPopup.style.display = "none"
    }
}
