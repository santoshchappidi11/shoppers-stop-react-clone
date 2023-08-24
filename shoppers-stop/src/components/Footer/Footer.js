import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <>
      <div id="footer">
        <div id="footer-sec-1">
          <div id="sec-1-left">
            <div className="sec-1-left">
              <i class="fa-solid fa-certificate fa-xl"></i>
              <p>Authentic Products</p>
            </div>
            <div className="sec-1-left">
              <i class="fa-solid fa-store fa-xl"></i>
              <p>Express store pickup</p>
            </div>
            <div className="sec-1-left">
              <i class="fa-solid fa-shield fa-xl"></i>
              <p>Secure Payment</p>
            </div>
            <div className="sec-1-left">
              <i class="fa-solid fa-arrow-rotate-left fa-xl"></i>
              <p>Easy return and Exchange</p>
            </div>
          </div>
          <div id="sec-1-right">
            <div id="search-brands">
              <p>Brands</p>
              <i class="fa-solid fa-angle-down fa-lg"></i>
            </div>
          </div>
        </div>
        <div id="footer-sec-2">
          <div className="sec-2-common">
            <h5>PAY SECURELY BY</h5>
            <div id="sec-2-common">
              <div>
                <img
                  src="https://constant.myntassets.com/checkout/assets/img/footer-bank-visa.png"
                  alt="visa"
                />
              </div>
              <div>
                <img
                  src="https://constant.myntassets.com/checkout/assets/img/footer-bank-mc.png"
                  alt="master-card"
                />
              </div>
              <div>
                <img
                  src="https://constant.myntassets.com/checkout/assets/img/footer-bank-ae.png"
                  alt="american-express"
                />
              </div>
              <div>
                <img
                  src="https://constant.myntassets.com/checkout/assets/img/footer-bank-rupay.png"
                  alt="rupay"
                />
              </div>
            </div>
          </div>
          <div className="sec-2-common" id="reach-us">
            <h5>REACH US</h5>
            <p>For Any Query Please Email Us questions?</p>
            <span>customercare@shoppersstop.com</span>
          </div>
          <div className="sec-2-common" id="download">
            <h5>DOWNLOAD THE APP ON</h5>
            <i class="fa-brands fa-google-play fa-2x"></i>
            <i class="fa-brands fa-apple fa-2x"></i>
          </div>
          <div className="sec-2-common" id="follow">
            <h5>FOLLOW US ON</h5>
            <i class="fa-brands fa-square-facebook fa-2x"></i>
            <i class="fa-brands fa-square-twitter fa-2x"></i>
            <i class="fa-brands fa-square-instagram fa-2x"></i>
          </div>
        </div>
        <div id="footer-sec-3">
          <div className="sec-3-common">
            <h5>CUSTOMER</h5>
            <div>
              <span>HELP/FAQS</span>
              <span>TRACK ORDER</span>
              <span>SIZE GUIDE</span>
              <span>SIZE GUIDE</span>
              <span>HOW DO I SHOP?</span>
              <span>HOW DO I PAY?</span>
              <span>FIND PLACES WE DELIVER</span>
              <span>STYLE HUB</span>
            </div>
          </div>
          <div className="sec-3-common">
            <h5>STORES AND SITES</h5>
            <div>
              <span>ABOUT US</span>
              <span>CONTACT US</span>
              <span>CORPORATE SITE</span>
              <span>STORE LOCATOR</span>
              <span>CAREERS</span>
              <span>SITEMAP</span>
            </div>
          </div>
          <div className="sec-3-common">
            <h5>POLICIES</h5>
            <div>
              <span>TERMS OF USE</span>
              <span>PRIVACY</span>
              <span>DELIVERY POLICY</span>
              <span>EXCHANGES & RETURNS</span>
            </div>
          </div>
          <div className="sec-3-common">
            <h5>FIRST CITIZEN</h5>
            <div>
              <span>FIRST CITIZEN CLUB</span>
            </div>
          </div>
          <div className="sec-3-common">
            <h5>DELIGHTFUL PROGRAMS</h5>
            <div>
              <span>INSTANT GIFTING</span>
              <span>EXPRESS STORE PICK UP</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
