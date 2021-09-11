import React from "react";

class Footer extends React.Component {
  render() {
    return (
      <footer className="section footer-modern footer-modern-2">
        <div className="footer-modern-body section-xl">
          <div className="container">
            <div className="row row-40 row-md-50 justify-content-xl-between">
              <div className="col-md-10 col-lg-3 col-xl-4 wow fadeInRight">
                <div className="inset-xl-right-70 block-1">
                  <div className="footer-classic-brand">
                    {}
                    <a className="brand" href="index.html">
                      <img
                        className="brand-logo-dark"
                        src="images/logo-default-312x92.png"
                        alt
                        width={156}
                        height={46}
                      />
                      <img
                        className="brand-logo-light"
                        src="images/logo-inverse-312x92.png"
                        alt
                        width={156}
                        height={46}
                      />
                    </a>
                  </div>
                  <p className="footer-classic-text">
                    Our cake shop was founded in 1999 to provide delicious cakes
                    and other types of pastry for a variety of events including
                    weddings, birthdays, and parties. We are glad to provide the
                    cake you’ll love.
                  </p>
                </div>
              </div>
              <div
                className="col-sm-6 col-md-7 col-lg-5 wow fadeInRight"
                data-wow-delay=".1s"
              >
                <h5 className="footer-modern-title">Navigation</h5>
                <ul className="footer-modern-list footer-modern-list-2 d-sm-inline-block d-md-block">
                  <li>
                    <a href="about-us.html">About Us</a>
                  </li>
                  <li>
                    <a href="our-team.html">Our Team</a>
                  </li>
                  <li>
                    <a href="testimonials.html">Testimonials</a>
                  </li>
                  <li>
                    <a href="grid-shop.html">Shop</a>
                  </li>
                  <li>
                    <a href="#">FAQ</a>
                  </li>
                  <li>
                    <a href="contact-us.html">Contact Us</a>
                  </li>
                  <li>
                    <a href="#">Wedding Cakes</a>
                  </li>
                  <li>
                    <a href="#">Birthday Cakes</a>
                  </li>
                  <li>
                    <a href="#">Macarons</a>
                  </li>
                  <li>
                    <a href="#">Cupcakes</a>
                  </li>
                  <li>
                    <a href="#">Biscuits</a>
                  </li>
                </ul>
              </div>
              <div
                className="col-sm-6 col-md-5 col-lg-4 col-xl-3 wow fadeInRight"
                data-wow-delay=".2s"
              >
                <h5 className="footer-modern-title">Get in touch</h5>
                <ul className="contacts-creative">
                  <li>
                    <div className="unit unit-spacing-sm flex-column flex-md-row">
                      <div className="unit-left">
                        <span className="icon mdi mdi-map-marker" />
                      </div>
                      <div className="unit-body">
                        <a href="#">
                          523 Sylvan Ave, 5th Floor
                          <br />
                          Mountain View, CA 94041 USA
                        </a>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="unit unit-spacing-sm flex-column flex-md-row">
                      <div className="unit-left">
                        <span className="icon mdi mdi-phone" />
                      </div>
                      <div className="unit-body">
                        <a href="tel:#">(+844) 123 456 78</a>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="unit unit-spacing-sm flex-column flex-md-row">
                      <div className="unit-left">
                        <span className="icon mdi mdi-email-outline" />
                      </div>
                      <div className="unit-body">
                        <a href="mailto:#">info@demolink.org</a>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-modern-panel text-center">
          <div className="container">
            <p className="rights">
              <span>©  </span>
              <span className="copyright-year" />
              <span> </span>
              <span>Cupcake</span>
              <span>.  All rights reserved.</span>
              <span> </span>
              <a href="privacy-policy.html">Privacy Policy</a>
              <span>.</span>
            </p>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
