import {htmlContent} from './content.js'
import './assets/css/popup.css'

let kassshPopupId = "kasssh-popup-container"

const getScriptURL = (scriptName) => {
 var script =  document.currentScript || document.querySelector(`script[src*="${scriptName}"]`)
 const [,url,] = script.src.match(/^(.*)(\/.*\.js)/)
 return url
}

const bindEvents = (onSubmit, onClose) => {
    document.getElementById('kasssh-popup-close-btn').addEventListener('click', () => {
        onClose ? onClose() : toggleKassshPopup(false)
    })
    document.getElementById('kasssh-popup-submit-btn').addEventListener('click', () => {
        onSubmit ? onSubmit() : toggleKassshPopup(false)
    })
}

export const initKassshPopup = ({ email, phone, amount }, onSubmit, onClose, scriptName) => {

    //if code already injected then delete and add again
    const kassshPopupExist = document.getElementById(kassshPopupId)
    if (kassshPopupExist) {
        kassshPopup.remove()
    }

    // create new DOM element
    const kassshPopup = document.createElement('div')
    kassshPopup.id = kassshPopupId
    kassshPopup.style.display = 'none'
    kassshPopup.innerHTML = htmlContent(
        email,
        phone,
        amount,
        getScriptURL( scriptName ? scriptName : 'popup.js'),
    )

    // add new DOM element to the page
    document.body.appendChild(kassshPopup)
    bindEvents(onSubmit, onClose)
}

export const toggleKassshPopup = (flag) => {
    const kassshPopup = document.getElementById(kassshPopupId)
    if (flag) {
        kassshPopup.style.display = "block"
    } else {
        kassshPopup.style.display = "none"
    }
}

window.initKassshPopup = initKassshPopup
window.toggleKassshPopup = toggleKassshPopup

