var d=Object.defineProperty;var m=(i,s,e)=>s in i?d(i,s,{enumerable:!0,configurable:!0,writable:!0,value:e}):i[s]=e;var o=(i,s,e)=>(m(i,typeof s!="symbol"?s+"":s,e),e);(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))a(n);new MutationObserver(n=>{for(const t of n)if(t.type==="childList")for(const l of t.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&a(l)}).observe(document,{childList:!0,subtree:!0});function e(n){const t={};return n.integrity&&(t.integrity=n.integrity),n.referrerPolicy&&(t.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?t.credentials="include":n.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function a(n){if(n.ep)return;n.ep=!0;const t=e(n);fetch(n.href,t)}})();const u=`<div data-kasssh-popup class="d-flex flex-column">
    <div id="kasssh-loading-spinner" class="kasssh-loading-container position-absolute d-none d-flex justify-content-center align-items-center">
        <div class="kasssh-loading"></div>
    </div>
    <div class="kasssh-popup d-flex flex-column shadow-lg border-1">
        
        <!-- header -->
        <div class="kasssh-header">
            <!-- logo -->
            <div class="kasssh-logo text-center mt-md-4 mt-2 mb-1 mb-md-2">
                <img class="img-fluid" src="{{baseUrl}}/images/kasssh-logo.png" />
            </div>
        </div>

        <!-- body -->
        <div class="kasssh-body px-2">

            <h3 class="my-md-4 my-1 text-center kasssh-text-color">
                Pay with cash to complete your order
            </h3>

            <div class="steps row w-100">

                <!-- step-1 -->
                <div class="step col-md-3 col-6 mb-md-0 mb-1">
                    <div class="step-img">
                        <img class="img-fluid" src="{{baseUrl}}/images/icon-step-1.png" />
                    </div>
                    <p class="step-message">
                        Receive barcode in email
                    </p>
                </div>

                <!-- step-2 -->
                <div class="step col-md-3 col-6 mb-md-0 mb-1">
                    <div class="step-img">
                        <img class="img-fluid" src="{{baseUrl}}/images/icon-step-2.png" />
                    </div>
                    <p class="step-message">
                        Visit one of 28,000 paypoint stores
                    </p>
                </div>

                <!-- step-3 -->
                <div class="step col-md-3 col-6 mb-md-0 mb-1">
                    <div class="step-img">
                        <img class="img-fluid" src="{{baseUrl}}/images/icon-step-3.png" />
                    </div>
                    <p class="step-message">
                        Show barcode and pay!
                    </p>
                </div>
                
                <!-- step-4 -->
                <div class="step col-md-3 col-6 mb-md-0 mb-1">
                    <div class="step-img">
                        <img class="img-fluid" src="{{baseUrl}}/images/icon-step-4.png" />
                    </div>
                    <p class="step-message">
                        Your purchase is complete
                    </p>
                </div>

            </div>

            <p class="text-center mt-md-4 mt-sm-2">
                <a
                    class="kasssh-store-locator"
                    href="https://www.paypoint.com/storelocator"
                    target="_blank"
                >
                    Find your nearest PayPoint?
                </a>
            </p>

        </div>

        <!-- footer -->
        <div class="kasssh-footer mt-auto py-4 px-2">
            <div data-kasssh-amount-error>
                <h2 class="text-center py-1">
                    Kasssh can only be used for transactions of £300 and under.
                </h2>
            </div>

            <div class="text-center">

                <h3 class="">
                    Order Total:
                    <span data-kasssh-currency>£</span><span data-kasssh-cart-amount>{{amount}}</span>
                </h3>

                <div class="my-0 py-0">
                    <p data-kasssh-email data-kasssh-info class="py-lg-4 my-1 py-0">
                        We will email the barcode to <span>{{email}}</span>
                    </p>
                </div>

            </div>

            <div class="text-center lg-my-2 my-1">

                <div class="mt-2 mb-3" data-kasssh-email data-kasssh-input>
                    <label class="form-label d-block">
                        We need your email to send the barcode:
                    </label>
                    <input class="mx-auto form-control" value="{{email}}" placeholder="enter your email" type="email" />
                </div>

                <div class="mt-2 mb-3" data-kasssh-phone data-kasssh-input>
                    <label class="form-label d-block">
                        Phone number is required for verification and compliance:
                    </label>
                    <input class="mx-auto form-control" value="{{phone}}" placeholder="enter your phone number" type="text" />
                    
                </div>
                
                <div class="mb-3">
                    <label class="check-box-container" kasssh-tnc-label>
                        <input data-kasssh-tnc data-kasssh-input type="checkbox" />
                        <span class="checkmark"></span>
                        <span>
                          I have read and agreed to the Kasssh
                          <a
                              class="kasssh-text-color"
                              href="https://kasssh.com/kasssh-service/"
                              target="_blank"
                              >
                              T&Cs
                          </a>
                          and
                          <a
                              class="kasssh-text-color"
                              href="https://kasssh.com/terms-conditions/"
                              target="_blank"
                          >
                              Privacy Policy
                          </a>
                        </span>
                    </label>
                </div>
                <div
                    class="my-2"
                >
                    <button
                    type="button"
                    data-kasssh-submit
                    class="kasssh-submit-button btn btn-lg"
                    >
                        Checkout with Kasssh
                    </button>
                </div>

                <div class="col-12 text-center mt-4 mb-0">
                    <a href="#" class="kasssh-cancel-link" data-kasssh-close>Cancel and go back to merchant store</a>
                </div>

            </div>

        </div>

    </div>
</div>
`,p=(i,s,e,a=".")=>{const n={amount:e,baseUrl:a,email:i,phone:s};let t=u;return Object.keys(n).forEach(l=>{const c=n[l]?n[l]:"",r=new RegExp(`{{${l}}}`,"g");t=t.replace(r,c)}),t};const h=i=>{var s=document.currentScript||document.querySelector(`script[src*="${i}"]`);const[,e]=s.src.match(/^(.*)(\/.*\.js)/);return e},b=()=>/^(?:[a-z0-9!#$%&'*+\/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+\/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])$/;class v{constructor(s,e="popup.js",a=null){o(this,"kassshPopupId","kasssh-popup-container");o(this,"email",null);o(this,"phone",null);this.cartAmount=s,this.scriptName=e,this.assetsUrl=a,this.onSubmitCallback=null,this.onCloseCallback=null}init({email:s=null,phone:e=null}){this.email=s,this.phone=e;const a=document.getElementById(this.kassshPopupId);a&&a.remove();const n=document.createElement("div");n.id=this.kassshPopupId,n.style.display="none",n.innerHTML=p(s,e,this.cartAmount.toFixed(2),this.assetsUrl?this.assetsUrl:this.getScriptURL(this.scriptName,this.assetsUrl)),document.body.appendChild(n),s?document.querySelector("[data-kasssh-email][data-kasssh-input]").style.display="none":document.querySelector("[data-kasssh-email][data-kasssh-info]").style.display="none",e&&(document.querySelector("[data-kasssh-phone][data-kasssh-input]").style.display="none"),this.bindEvents(),this.cartAmount<=300&&(document.querySelector("[data-kasssh-amount-error]").style.display="none")}toggle(s){const e=document.getElementById(this.kassshPopupId);s?e.style.display="block":e.style.display="none"}toggleSpinner(s){s?document.getElementById("kasssh-loading-spinner").classList.remove("d-none"):document.getElementById("kasssh-loading-spinner").classList.add("d-none")}onSubmit(s){this.onSubmitCallback=s}onClose(s){this.onCloseCallback=s}bindEvents(){document.querySelectorAll("[data-kasssh-close]").forEach(e=>{e.addEventListener("click",()=>{this.onCloseCallback?this.onCloseCallback():this.toggle(!1)})});const s=document.querySelector("[data-kasssh-submit]");s.disabled=!0,s.addEventListener("click",()=>{const e=this.validatePhone(),a=this.validateEmail();e&&a&&this.onSubmitCallback({phone:e,email:a})}),document.querySelectorAll("[data-kasssh-input]").forEach(e=>e.addEventListener("input",this.validateForm.bind(this)))}validateForm(){const s=document.querySelector("[data-kasssh-submit]");s.disabled=!0,!(this.cartAmount>300)&&(!this.validatePhone()||!this.validateEmail()||document.querySelector("[data-kasssh-tnc]").checked&&(s.disabled=!1))}validatePhone(){if(this.phone)return this.phone;let s=document.querySelector("[data-kasssh-phone] input");return s=s.value,/^\d{10,}$/.test(s)?s:null}validateEmail(){if(this.email)return this.email;let s=document.querySelector("[data-kasssh-email] input");return s=s.value,b().test(s)?s:null}getScriptURL(s,e){return e?`${e}/${s}`:h(s)}}window.Kasssh=v;
