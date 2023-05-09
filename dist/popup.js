(()=>{"use strict";let s="kasssh-popup-container";window.initKassshPopup=({email:a,phone:n,amount:i})=>{document.getElementById(s)&&e.remove();const e=document.createElement("div");e.id=s,e.style.display="none",e.innerHTML=((s,a,n,i=".")=>`\n    <div class="kasssh-modal">\n        <div class="kasssh-modal-content">\n            <div id="kassshPopupPage" class="__kasssh-popup-page">\n                <img class="kasssh-close _kasssh-top-right __kasssh-small-icon" src="${i}/images/kasssh-popup/circle-close-cross.png" />\n                <div class="__kasssh-logo-container">\n                    <img class="__kasssh-image-full" src="${i}/images/kasssh-popup/kasssh-logo.png" />\n                </div>\n                <div class="kasssh-message">\n                    <h2>\n                        <span>What is Kasssh?</span> A new service that allows you to pay with cash to complete your transaction\n                    </h2>\n                </div>\n                <div id="kassshInstructions" class="__kasssh-center __kasssh-title-text">\n                    <div class="step">\n                        <p class="number">1</p>\n                        <div class="kasssh-image_container">\n                            <img src="${i}/images/kasssh-popup/icon-step-1.png" />\n                        </div>\n                        <p class="message">CLICK SUBMIT AND RECEIVE BARCODE IN EMAIL</p>\n                    </div>\n                    <div class="step">\n                        <p class="number">2</p>\n                        <div class="kasssh-image_container">\n                            <img src="${i}/images/kasssh-popup/icon-step-2.png" />\n                        </div>\n                        <p class="message">VISIT ONE OF 28,000 PAYPOINT STORES</p>\n                        <a class='kasssh-store-locator' href='https://www.paypoint.com/storelocator' target='_blank'><span>PayPoint Store Finder</span></a>\n                    </div>\n                    <div class="step">\n                        <p class="number">3</p>\n                        <div class="kasssh-image_container">\n                            <img src="${i}/images/kasssh-popup/icon-step-3.png" />\n                        </div>\n                        <p class="message">SHOW BARCODE AND PAY!</p>\n                    </div>\n                    <div class="step">\n                        <p class="number">4</p>\n                        <div class="kasssh-image_container">\n                            <img src="${i}/images/kasssh-popup/icon-step-4.png" />\n                        </div>\n                        <p class="message">YOUR PURCHASE IS COMPLETE</p>\n                    </div>\n                </div>\n                <div id="kassshConfirmation">\n                    <div class="rTable">\n                        <div class="rTableRow">\n                            <div class="rTableCell rWidth-50 kasssh-footer-left">\n                                <div class="rTableRow">\n                                    <div class="rTableCell rWidth-20 __kasssh-center">\n                                        <img class="__kasssh-table-icon" src="${i}/images/kasssh-popup/kasssh-cart.png" />\n                                    </div>\n                                    <div class="rTableCell rWidth-80">\n                                        <b id="kassshModalCartAmount">\n                                            ${n}\n                                        </b>\n                                    </div>\n                                </div>\n                                <div class="rTableRow">\n                                    <div class="rTableCell rWidth-20 __kasssh-center">\n                                        <img class="__kasssh-table-icon" src="${i}/images/kasssh-popup/kasssh-email.png" />\n                                    </div>\n                                    <div class="rTableCell rWidth-80 __kasssh-email" id="kassshModalCartEmail">\n                                        ${s}\n                                    </div>\n                                </div>\n                                <div class="rTableRow">\n                                    <div class="rTableCell rWidth-20 __kasssh-center">\n                                        <img class="__kasssh-table-icon" src="${i}/images/kasssh-popup/kasssh-phone.png" />\n                                    </div>\n                                    <div class="rTableCell rWidth-80 __kasssh-email" id="kassshModalCartPhone">\n                                        ${a}\n                                    </div>\n                                </div>\n                            </div>\n                            <div class="rTableCell __kasssh-center rWidth-50 __kasssh-pointer kasssh-footer-right">\n                                <button type="button" class="kasssh-continue-button">Continue</button>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n`)(a,n,i,(()=>{var s=document.currentScript||document.querySelector('script[src*="myscript.js"]');const[,a]=s.src.match(/^(.*)(\/.*\.js)/);return a})()),document.body.appendChild(e)},window.toggleKassshPopup=a=>{const n=document.getElementById(s);n.style.display=a?"block":"none"}})();