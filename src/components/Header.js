import React from "react";
import $ from "jquery";
import { WOW } from "../assets/js/wow.js";

import "../assets/js/tmstickup.js";
import "../assets/js/jquery.ui.totop.my.js";
import "../assets/js/parallax.js";
import "../assets/js/jquery.easing.1.3.js";

import i1 from "../assets/images/logo-default-312x92.png";
import i2 from "../assets/images/logo-inverse-312x92.png";
import i3 from "../assets/images/banner-1-300x202.jpg";
import i4 from "../assets/images/product-mini-6-100x90.png";
import i5 from "../assets/images/product-mini-7-100x90.png";
import i6 from "../assets/images/about-5-350x269.jpg";
import i7 from "../assets/images/about-6-350x269.jpg";
import i8 from "../assets/images/about-7-350x269.jpg";

class Header extends React.Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    new WOW().init();
    $(".rd-navbar").TMStickUp({});
    $().UItoTop({
      easingType: "easeOutQuad",
      containerClass: "ui-to-top fa fa-angle-up",
    });
  }
  render() {
    return (
      <header className="section page-header">
        {}
        <div className="rd-navbar-wrap">
          <nav
            className="rd-navbar rd-navbar-classic rd-navbar-original rd-navbar-static"
            data-layout="rd-navbar-fixed"
            data-sm-layout="rd-navbar-fixed"
            data-md-layout="rd-navbar-fixed"
            data-md-device-layout="rd-navbar-fixed"
            data-lg-layout="rd-navbar-static"
            data-lg-device-layout="rd-navbar-fixed"
            data-xl-layout="rd-navbar-static"
            data-xl-device-layout="rd-navbar-static"
            data-xxl-layout="rd-navbar-static"
            data-xxl-device-layout="rd-navbar-static"
            data-lg-stick-up-offset="100px"
            data-xl-stick-up-offset="100px"
            data-xxl-stick-up-offset="100px"
            data-lg-stick-up="true"
            data-xl-stick-up="true"
            data-xxl-stick-up="true"
          >
            <div className="rd-navbar-main-outer">
              <div className="rd-navbar-main">
                {}
                <div className="rd-navbar-panel">
                  {}
                  <button
                    className="rd-navbar-toggle"
                    data-rd-navbar-toggle=".rd-navbar-nav-wrap"
                  >
                    <span />
                  </button>
                  {}
                  <div className="rd-navbar-brand">
                    {}
                    <a className="brand" href="index.html">
                      <img
                        className="brand-logo-dark"
                        src={i1}
                        alt
                        width={156}
                        height={46}
                      />
                      <img
                        className="brand-logo-light"
                        src={i2}
                        alt
                        width={156}
                        height={46}
                      />
                    </a>
                  </div>
                </div>
                <div className="rd-navbar-nav-wrap">
                  <ul className="rd-navbar-nav">
                    <li className="rd-nav-item">
                      <a className="rd-nav-link" href="index.html">
                        Home
                      </a>
                    </li>
                    <li className="rd-nav-item">
                      <a className="rd-nav-link" href="#">
                        Pages
                      </a>
                    </li>
                    <li className="rd-nav-item active">
                      <a className="rd-nav-link" href="grid-blog.html">
                        Blog
                      </a>
                    </li>
                    <li className="rd-nav-item">
                      <a className="rd-nav-link" href="blog-post.html">
                        Blog post
                      </a>
                    </li>
                    <li className="rd-nav-item">
                      <a className="rd-nav-link" href="#">
                        Elements
                      </a>
                    </li>
                    <li className="rd-nav-item">
                      <a className="rd-nav-link" href="grid-shop.html">
                        Shop
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="rd-navbar-main-element">
                  {}
                  <div className="rd-navbar-search rd-navbar-search-2">
                    <button
                      className="rd-navbar-search-toggle rd-navbar-fixed-element-3"
                      data-rd-navbar-toggle=".rd-navbar-search"
                    >
                      <span />
                    </button>
                    <form
                      className="rd-search"
                      action="search-results.html"
                      data-search-live="rd-search-results-live"
                      method="GET"
                    >
                      <div className="form-wrap">
                        <input
                          className="rd-navbar-search-form-input form-input"
                          id="rd-navbar-search-form-input"
                          type="text"
                          name="s"
                          autoComplete="off"
                        />
                        <label
                          className="form-label"
                          htmlFor="rd-navbar-search-form-input"
                        >
                          Search...
                        </label>
                        <div
                          className="rd-search-results-live"
                          id="rd-search-results-live"
                        />
                        <button
                          className="rd-search-form-submit fl-bigmug-line-search74"
                          type="submit"
                        />
                      </div>
                    </form>
                  </div>
                  {}
                  <div className="rd-navbar-basket-wrap">
                    <button
                      className="rd-navbar-basket fl-bigmug-line-shopping202"
                      data-rd-navbar-toggle=".cart-inline"
                    >
                      <span>2</span>
                    </button>
                    <div className="cart-inline">
                      <div className="cart-inline-header">
                        <h5 className="cart-inline-title">
                          In cart:<span> 2</span> Products
                        </h5>
                        <h6 className="cart-inline-title">
                          Total price:<span> $30</span>
                        </h6>
                      </div>
                      <div className="cart-inline-body">
                        <div className="cart-inline-item">
                          <div className="unit unit-spacing-sm align-items-center">
                            <div className="unit-left">
                              <a
                                className="cart-inline-figure"
                                href="single-product.html"
                              >
                                <img src={i3} alt width={100} height={90} />
                              </a>
                            </div>
                            <div className="unit-body">
                              <h6 className="cart-inline-name">
                                <a href="single-product.html">Unicorn Cake</a>
                              </h6>
                              <div>
                                <div className="group-xs group-middle">
                                  <div className="table-cart-stepper">
                                    <input
                                      className="form-input"
                                      type="number"
                                      data-zeros="true"
                                      defaultValue={1}
                                      min={1}
                                      max={1000}
                                    />
                                  </div>
                                  <h6 className="cart-inline-title">$13.00</h6>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="cart-inline-item">
                          <div className="unit unit-spacing-sm align-items-center">
                            <div className="unit-left">
                              <a
                                className="cart-inline-figure"
                                href="single-product.html"
                              >
                                <img src={i4} alt width={100} height={90} />
                              </a>
                            </div>
                            <div className="unit-body">
                              <h6 className="cart-inline-name">
                                <a href="single-product.html">
                                  Strawberry Cupcakes
                                </a>
                              </h6>
                              <div>
                                <div className="group-xs group-middle">
                                  <div className="table-cart-stepper">
                                    <input
                                      className="form-input"
                                      type="number"
                                      data-zeros="true"
                                      defaultValue={1}
                                      min={1}
                                      max={1000}
                                    />
                                  </div>
                                  <h6 className="cart-inline-title">$17.00</h6>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="cart-inline-footer">
                        <div className="group-sm">
                          <a
                            className="button button-default-outline-2 button-zakaria"
                            href="cart-page.html"
                          >
                            Go to cart
                          </a>
                          <a
                            className="button button-primary button-zakaria"
                            href="checkout.html"
                          >
                            Checkout
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <a
                    className="rd-navbar-basket rd-navbar-basket-mobile fl-bigmug-line-shopping202 rd-navbar-fixed-element-2"
                    href="cart-page.html"
                  >
                    <span>2</span>
                  </a>
                  <button
                    className="rd-navbar-project-hamburger rd-navbar-project-hamburger-open rd-navbar-fixed-element-1"
                    type="button"
                    data-multitoggle=".rd-navbar-main"
                    data-multitoggle-blur=".rd-navbar-wrap"
                    data-multitoggle-isolate="data-multitoggle-isolate"
                  >
                    <span className="project-hamburger">
                      <span className="project-hamburger-line" />
                      <span className="project-hamburger-line" />
                      <span className="project-hamburger-line" />
                      <span className="project-hamburger-line" />
                    </span>
                  </button>
                </div>
                <div className="rd-navbar-project">
                  <div className="rd-navbar-project-header">
                    <button
                      className="rd-navbar-project-hamburger rd-navbar-project-hamburger-close"
                      type="button"
                      data-multitoggle=".rd-navbar-main"
                      data-multitoggle-blur=".rd-navbar-wrap"
                      data-multitoggle-isolate
                    >
                      <span className="project-close">
                        <span />
                        <span />
                      </span>
                    </button>
                    <h5 className="rd-navbar-project-title">Our Contacts</h5>
                  </div>
                  <div className="rd-navbar-project-content">
                    <div>
                      <div>
                        {}
                        <div
                          className="owl-carousel"
                          data-items={1}
                          data-dots="true"
                          data-autoplay="true"
                        >
                          <img src={i5} alt width={350} height={269} />
                          <img src={i6} alt width={350} height={269} />
                          <img src={i7} alt width={350} height={269} />
                        </div>
                        <ul className="contacts-modern">
                          <li>
                            <a href="#">
                              523 Sylvan Ave, 5th Floor
                              <br />
                              Mountain View, CA 94041 USA
                            </a>
                          </li>
                          <li>
                            <a href="tel:#">+1 (844) 123 456 78</a>
                          </li>
                        </ul>
                      </div>
                      <div>
                        <ul className="list-inline list-social list-inline-xl">
                          <li>
                            <a className="icon mdi mdi-facebook" href="#" />
                          </li>
                          <li>
                            <a className="icon mdi mdi-twitter" href="#" />
                          </li>
                          <li>
                            <a className="icon mdi mdi-instagram" href="#" />
                          </li>
                          <li>
                            <a className="icon mdi mdi-google-plus" href="#" />
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </nav>
        </div>
      </header>
    );
  }
}

export default Header;
