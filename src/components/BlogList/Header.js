import React from "react";

class Header extends React.Component {
  render() {
    return (
      <header className="section page-header">
        {}
        <div className="rd-navbar-wrap">
          <nav
            className="rd-navbar rd-navbar-classic"
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
                      <ul className="rd-menu rd-navbar-dropdown">
                        <li className="rd-dropdown-item">
                          <a className="rd-dropdown-link" href="about-us.html">
                            About Us
                          </a>
                        </li>
                        <li className="rd-dropdown-item">
                          <a
                            className="rd-dropdown-link"
                            href="what-we-offer.html"
                          >
                            What We Offer
                          </a>
                        </li>
                        <li className="rd-dropdown-item">
                          <a className="rd-dropdown-link" href="our-team.html">
                            Our Team
                          </a>
                        </li>
                        <li className="rd-dropdown-item">
                          <a
                            className="rd-dropdown-link"
                            href="testimonials.html"
                          >
                            Testimonials
                          </a>
                        </li>
                        <li className="rd-dropdown-item">
                          <a
                            className="rd-dropdown-link"
                            href="pricing-list.html"
                          >
                            Pricing List
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li className="rd-nav-item active">
                      <a className="rd-nav-link" href="grid-blog.html">
                        Blog
                      </a>
                      <ul className="rd-menu rd-navbar-dropdown">
                        <li className="rd-dropdown-item">
                          <a className="rd-dropdown-link" href="grid-blog.html">
                            Grid Blog
                          </a>
                        </li>
                        <li className="rd-dropdown-item active">
                          <a className="rd-dropdown-link" href="blog-list.html">
                            Blog List
                          </a>
                        </li>
                        <li className="rd-dropdown-item">
                          <a className="rd-dropdown-link" href="blog-post.html">
                            Blog Post
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li className="rd-nav-item">
                      <a className="rd-nav-link" href="grid-gallery.html">
                        Gallery
                      </a>
                      <ul className="rd-menu rd-navbar-dropdown">
                        <li className="rd-dropdown-item">
                          <a
                            className="rd-dropdown-link"
                            href="grid-gallery.html"
                          >
                            Grid Gallery
                          </a>
                        </li>
                        <li className="rd-dropdown-item">
                          <a
                            className="rd-dropdown-link"
                            href="grid-fullwidth-gallery.html"
                          >
                            Grid Fullwidth Gallery
                          </a>
                        </li>
                        <li className="rd-dropdown-item">
                          <a
                            className="rd-dropdown-link"
                            href="masonry-gallery.html"
                          >
                            Masonry Gallery
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li className="rd-nav-item">
                      <a className="rd-nav-link" href="#">
                        Elements
                      </a>
                      <ul className="rd-menu rd-navbar-megamenu">
                        <li className="rd-megamenu-item rd-megamenu-item-1">
                          <h6 className="rd-megamenu-title">
                            <span className="rd-megamenu-icon mdi mdi-apps" />
                            <span className="rd-megamenu-text">Elements</span>
                          </h6>
                          <ul className="rd-megamenu-list">
                            <li className="rd-megamenu-list-item">
                              <a
                                className="rd-megamenu-list-link"
                                href="typography.html"
                              >
                                Typography
                              </a>
                            </li>
                            <li className="rd-megamenu-list-item">
                              <a
                                className="rd-megamenu-list-link"
                                href="icon-lists.html"
                              >
                                Icon lists
                              </a>
                            </li>
                            <li className="rd-megamenu-list-item">
                              <a
                                className="rd-megamenu-list-link"
                                href="progress-bars.html"
                              >
                                Progress bars
                              </a>
                            </li>
                            <li className="rd-megamenu-list-item">
                              <a
                                className="rd-megamenu-list-link"
                                href="calls-to-action.html"
                              >
                                Calls to action
                              </a>
                            </li>
                            <li className="rd-megamenu-list-item">
                              <a
                                className="rd-megamenu-list-link"
                                href="tabs-and-accordions.html"
                              >
                                Tabs & accordions
                              </a>
                            </li>
                            <li className="rd-megamenu-list-item">
                              <a
                                className="rd-megamenu-list-link"
                                href="buttons.html"
                              >
                                Buttons
                              </a>
                            </li>
                            <li className="rd-megamenu-list-item">
                              <a
                                className="rd-megamenu-list-link"
                                href="tables.html"
                              >
                                Tables
                              </a>
                            </li>
                            <li className="rd-megamenu-list-item">
                              <a
                                className="rd-megamenu-list-link"
                                href="forms.html"
                              >
                                Forms
                              </a>
                            </li>
                            <li className="rd-megamenu-list-item">
                              <a
                                className="rd-megamenu-list-link"
                                href="counters.html"
                              >
                                Counters
                              </a>
                            </li>
                            <li className="rd-megamenu-list-item">
                              <a
                                className="rd-megamenu-list-link"
                                href="grid-system.html"
                              >
                                Grid system
                              </a>
                            </li>
                          </ul>
                        </li>
                        <li className="rd-megamenu-item rd-megamenu-item-2">
                          <h6 className="rd-megamenu-title">
                            <span className="rd-megamenu-icon mdi mdi-layers" />
                            <span className="rd-megamenu-text">
                              Additional pages
                            </span>
                          </h6>
                          <ul className="rd-megamenu-list">
                            <li className="rd-megamenu-list-item">
                              <a
                                className="rd-megamenu-list-link"
                                href="404-page.html"
                              >
                                404 Page
                              </a>
                            </li>
                            <li className="rd-megamenu-list-item">
                              <a
                                className="rd-megamenu-list-link"
                                href="coming-soon.html"
                              >
                                Coming Soon
                              </a>
                            </li>
                            <li className="rd-megamenu-list-item">
                              <a
                                className="rd-megamenu-list-link"
                                href="contact-us.html"
                              >
                                Contact Us
                              </a>
                            </li>
                            <li className="rd-megamenu-list-item">
                              <a
                                className="rd-megamenu-list-link"
                                href="privacy-policy.html"
                              >
                                Privacy Policy
                              </a>
                            </li>
                            <li className="rd-megamenu-list-item">
                              <a
                                className="rd-megamenu-list-link"
                                href="search-results.html"
                              >
                                Search Results
                              </a>
                            </li>
                          </ul>
                        </li>
                        <li className="rd-megamenu-item rd-megamenu-banner">
                          <div className="rd-megamenu-title">
                            <span className="rd-megamenu-icon mdi mdi-cake-variant" />
                            <span className="rd-megamenu-text">
                              Welcome to Our Store
                            </span>
                          </div>
                          <a className="banner-classic" href="grid-shop.html">
                            <img
                              src="images/banner-1-300x202.jpg"
                              alt
                              width={300}
                              height={202}
                            />
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li className="rd-nav-item">
                      <a className="rd-nav-link" href="grid-shop.html">
                        Shop
                      </a>
                      <ul className="rd-menu rd-navbar-dropdown">
                        <li className="rd-dropdown-item">
                          <a
                            className="rd-dropdown-link"
                            href="ecwid-shop.html"
                          >
                            Ecwid Shop
                          </a>
                        </li>
                        <li className="rd-dropdown-item">
                          <a className="rd-dropdown-link" href="grid-shop.html">
                            Grid Shop
                          </a>
                        </li>
                        <li className="rd-dropdown-item">
                          <a className="rd-dropdown-link" href="shop-list.html">
                            Shop List
                          </a>
                        </li>
                        <li className="rd-dropdown-item">
                          <a
                            className="rd-dropdown-link"
                            href="single-product.html"
                          >
                            Single Product
                          </a>
                        </li>
                        <li className="rd-dropdown-item">
                          <a className="rd-dropdown-link" href="cart-page.html">
                            Cart Page
                          </a>
                        </li>
                        <li className="rd-dropdown-item">
                          <a className="rd-dropdown-link" href="checkout.html">
                            Checkout
                          </a>
                        </li>
                      </ul>
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
                                <img
                                  src="images/product-mini-6-100x90.png"
                                  alt
                                  width={100}
                                  height={90}
                                />
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
                                <img
                                  src="images/product-mini-7-100x90.png"
                                  alt
                                  width={100}
                                  height={90}
                                />
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
                          <img
                            src="images/about-5-350x269.jpg"
                            alt
                            width={350}
                            height={269}
                          />
                          <img
                            src="images/about-6-350x269.jpg"
                            alt
                            width={350}
                            height={269}
                          />
                          <img
                            src="images/about-7-350x269.jpg"
                            alt
                            width={350}
                            height={269}
                          />
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
