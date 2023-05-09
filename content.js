export const htmlContent = ({kassshUrl, email, phone, amount}) => `
    <div class="kasssh-modal">
        <div class="kasssh-modal-content">
            <div id="kassshPopupPage" class="__kasssh-popup-page">
                <img class="kasssh-close _kasssh-top-right __kasssh-small-icon" src="${kassshUrl}/images/popup/circle-close-cross.png" />
                <div class="__kasssh-logo-container">
                    <img class="__kasssh-image-full" src="${kassshUrl}/images/popup/kasssh-logo.png" />
                </div>
                <div class="kasssh-message">
                    <h2>
                        <span>What is Kasssh?</span> A new service that allows you to pay with cash to complete your transaction
                    </h2>
                </div>
                <div id="kassshInstructions" class="__kasssh-center __kasssh-title-text">
                    <div class="step">
                        <p class="number">1</p>
                        <div class="kasssh-image_container">
                            <img src="${kassshUrl}/images/popup/icon-step-1.png" />
                        </div>
                        <p class="message">CLICK SUBMIT AND RECEIVE BARCODE IN EMAIL</p>
                    </div>
                    <div class="step">
                        <p class="number">2</p>
                        <div class="kasssh-image_container">
                            <img src="${kassshUrl}/images/popup/icon-step-2.png" />
                        </div>
                        <p class="message">VISIT ONE OF 28,000 PAYPOINT STORES</p>
                        <a class='kasssh-store-locator' href='https://www.paypoint.com/storelocator' target='_blank'><span>PayPoint Store Finder</span></a>
                    </div>
                    <div class="step">
                        <p class="number">3</p>
                        <div class="kasssh-image_container">
                            <img src="${kassshUrl}/images/popup/icon-step-3.png" />
                        </div>
                        <p class="message">SHOW BARCODE AND PAY!</p>
                    </div>
                    <div class="step">
                        <p class="number">4</p>
                        <div class="kasssh-image_container">
                            <img src="${kassshUrl}/images/popup/icon-step-4.png" />
                        </div>
                        <p class="message">YOUR PURCHASE IS COMPLETE</p>
                    </div>
                </div>
                <div id="kassshConfirmation">
                    <div class="rTable">
                        <div class="rTableRow">
                            <div class="rTableCell rWidth-50 kasssh-footer-left">
                                <div class="rTableRow">
                                    <div class="rTableCell rWidth-20 __kasssh-center">
                                        <img class="__kasssh-table-icon" src="${kassshUrl}/images/popup/kasssh-cart.png" />
                                    </div>
                                    <div class="rTableCell rWidth-80">
                                        <b id="kassshModalCartAmount">
                                            ${amount}
                                        </b>
                                    </div>
                                </div>
                                <div class="rTableRow">
                                    <div class="rTableCell rWidth-20 __kasssh-center">
                                        <img class="__kasssh-table-icon" src="${kassshUrl}/images/popup/kasssh-email.png" />
                                    </div>
                                    <div class="rTableCell rWidth-80 __kasssh-email" id="kassshModalCartEmail">
                                        ${email}
                                    </div>
                                </div>
                                <div class="rTableRow">
                                    <div class="rTableCell rWidth-20 __kasssh-center">
                                        <img class="__kasssh-table-icon" src="${kassshUrl}/images/popup/kasssh-phone.png" />
                                    </div>
                                    <div class="rTableCell rWidth-80 __kasssh-email" id="kassshModalCartPhone">
                                        ${phone}
                                    </div>
                                </div>
                            </div>
                            <div class="rTableCell __kasssh-center rWidth-50 __kasssh-pointer kasssh-footer-right">
                                <button type="button" class="kasssh-continue-button">Continue</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
`
