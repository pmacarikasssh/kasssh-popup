export const htmlContent = (email, phone, amount, baseUrl = ".") => `
<div class="kasssh-popup shadow-lg">

    <div class="kasssh-popup-logo">
        <img class="img-fluid" src="${baseUrl}/images/kasssh-logo.png" />
    </div>

    <!-- close button -->
    <button class="kasssh-close-button btn" data-kasssh-close>
        <img class="" src="${baseUrl}/images/circle-close-cross.png" />
    </button>

    <div class="popup-body">

        <div class="kasssh-message text-center">
            <h3>
                <span>What is Kasssh?</span> A new service that allows you to pay with cash to complete your transaction
            </h3>
        </div>

        <div class="kasssh-steps row m-5 py-4">

            <!--Step start-->
            <div class="kasssh-step col-lg-3 col-md-6 col-sm-12 ">
                <div class="d-flex flex-column align-items-center justify-content-center  text-center">
                    <h3 class="step-number mt-auto">1</h3>
                    <div class="step-img mt-2 rounded-circle border">
                        <img class="img-fluid" src="${baseUrl}/images/icon-step-1.png" />
                    </div>
                    <p class="step-message">CLICK SUBMIT AND RECEIVE BARCODE IN EMAIL</p>
                </div>
            </div>
            <!--Step end-->


            <!--Step start-->
            <div class="kasssh-step col-lg-3 col-md-6 col-sm-12 ">
                <div class="d-flex flex-column align-items-center justify-content-center  text-center">
                    <h3 class="step-number mt-auto">2</h3>
                    <div class="step-img mt-2 rounded-circle border">
                        <img class="img-fluid" src="${baseUrl}/images/icon-step-2.png" />
                    </div>
                    <p class="step-message">VISIT ONE OF 28,000 PAYPOINT STORES</p>
                    <a class='kasssh-store-locator' href='https://www.paypoint.com/storelocator' target='_blank'><span>PayPoint Store Finder</span></a>
                </div>
            </div>
            <!--Step end-->


            <!--Step start-->
            <div class="kasssh-step col-lg-3 col-md-6 col-sm-12 ">
                <div class="d-flex flex-column align-items-center justify-content-center  text-center">
                    <h3 class="step-number mt-auto">3</h3>
                    <div class="step-img mt-2 rounded-circle border">
                        <img class="img-fluid" src="${baseUrl}/images/icon-step-3.png" />
                    </div>
                    <p class="step-message">SHOW BARCODE AND PAY!</p>
                </div>
            </div>
            <!--Step end-->


            <!--Step start-->
            <div class="kasssh-step col-lg-3 col-md-6 col-sm-12 ">
                <div class="d-flex flex-column align-items-center justify-content-center  text-center">
                    <h3 class="step-number mt-auto">4</h3>
                    <div class="step-img mt-2 rounded-circle border">
                        <img class="img-fluid" src="${baseUrl}/images/icon-step-4.png" />
                    </div>
                    <p class="step-message">YOUR PURCHASE IS COMPLETE</p>
                </div>
            </div>
            <!--Step end-->
        </div>

    </div>
    <!-- popup-body end -->

    <div class="kasssh-footer py-2">
        <div class="row">
            <div class="col-md-6 kasssh-summary">
                <div class="d-flex mx-4 gap-2">
                    <span class="kasssh-icon">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                          <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
                        </svg>
                    </span>
                    <span class="info-text" data-kasssh-cart-amount>
                        ${amount}
                    </span>
                </div>
                <div class="d-flex my-auto mx-4 gap-2">
                    <span class="kasssh-icon">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                          <path stroke-linecap="round" stroke-linejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                        </svg>
                    </span>
                    <span class="info-text" data-kasssh-email>${email}</span>
                </div>
                <div class="d-flex my-auto mx-4 gap-2">
                    <span class="kasssh-icon">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                          <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                        </svg>
                    </span>
                    ${
                        phone ?
                            `<span class="info-text" data-kasssh-cart-phone>${phone}</span>`
                            :
                            `<input data-kasssh-phone type="text" class="kasssh-input-phone" />`
                    }
                </div>

                <label class="check-box-container mx-4 mt-2 gap-2 d-flex">
                    <input data-kasssh-tnc type="checkbox">
                    <span class="checkmark"></span>
                    I Agree to T&C
                </label>

            </div>
            <div class="col-md-6 px-md-5 kasssh-confirm d-flex justify-content-md-end justify-content-center my-auto">
                <button type="button" data-kasssh-submit class="kasssh-submit-button btn btn-lg">
                    <img src="${baseUrl}/images/kasssh-rectangle.png" class="img-fluid">
                </button>
            </div>
        </div>
    </div>


</div>
`
