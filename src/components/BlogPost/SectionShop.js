import React from "react";

import i1 from "../../assets/images/post-7-800x394.jpg";
import i2 from "../../assets/images/post-4-370x239.jpg";
import i3 from "../../assets/images/post-5-370x239.jpg";
import i4 from "../../assets/images/user-1-119x119.jpg";
import i5 from "../../assets/images/user-2-119x119.jpg";
import i6 from "../../assets/images/user-3-119x119.jpg";
import i7 from "../../assets/images/user-4-123x123.jpg";
import i8 from "../../assets/images/post-mini-1-106x104.jpg";
import i9 from "../../assets/images/post-mini-2-106x104.jpg";

class SectionShop extends React.Component {
  render() {
    return (
      <section className="section section-xl bg-default text-md-left">
        <div className="container">
          <div className="row row-50 row-md-60">
            <div className="col-lg-8 col-xl-9">
              <div className="inset-xl-right-100">
                <div className="row row-50 row-md-60 row-lg-80">
                  <div className="col-12">
                    <article className="post post-modern-1 box-xxl">
                      <div className="post-modern-panel">
                        <div>
                          <a className="post-modern-tag" href="#">
                            News
                          </a>
                        </div>
                        <div>
                          <time
                            className="post-modern-time"
                            dateTime="2019-09-08"
                          >
                            August 9, 2019
                          </time>
                        </div>
                      </div>
                      <h3 className="post-modern-title">
                        25 Useful Tips for Baking Delicious Cakes
                      </h3>
                      <div className="post-modern-figure">
                        <img src={i1} alt width={800} height={394} />
                      </div>
                      <p className="post-modern-text">
                        Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
                        sed diam nonumy eirmod tempor invidunt ut labore et
                        dolore magna aliquyam erat, sed diam voluptua. At vero
                        eos et accusam et justo duo dolores et ea rebum. Stet
                        clita kasd gubergren, no sea takimata sanctus est Lorem
                        ipsum dolor sit amet. Lorem ipsum dolor sit amet
                      </p>
                      <p className="post-modern-text">
                        At vero eos et accusam et justo duo dolores et ea rebum.
                        Stet clita kasd gubergren, no sea takimata sanctus est
                        Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet,
                        consetetur sadipscing elitr, sed diam nonumy eirmod
                        tempor invidunt ut labore et dolore magna aliquyam erat,
                        sed diam voluptua. At vero eos et accusam et justo duo
                        dolores et ea rebum. Stet clita kasd gubergren, no sea
                        takimata sanctus est Lorem ipsum dolor sit amet. Stet
                        clita kasd gubergren, no sea takimata sanctus est
                      </p>
                    </article>
                    {}
                    <article className="quote-classic quote-classic-2">
                      <div className="quote-classic-text">
                        <div className="q">
                          If a cake recipe calls for butter, get it almost room
                          temperature. It’ll warm up when mixed.
                        </div>
                      </div>
                    </article>
                    <p>
                      Cum bulla messis, omnes mineralises gratia camerarius,
                      emeritis apolloniateses. Equiso de bi-color burgus,
                      examinare lapsus! Accola gratis usus est. Speciess sunt
                      equisos de emeritis calceus. Vae. Vortexs mori in tubinga!
                      Sunt quadraes amor bi-color, fatalis medicinaes. Cum
                      scutum resistere, omnes imberes locus
                    </p>
                    <div className="single-post-bottom-panel">
                      <div className="group-sm group-justify">
                        <div>
                          <div className="group-sm group-tags">
                            <a className="link-tag" href="#">
                              News
                            </a>
                            <a className="link-tag" href="#">
                              Cakes
                            </a>
                            <a className="link-tag" href="#">
                              Pastry
                            </a>
                          </div>
                        </div>
                        <div>
                          <div className="group-xs group-middle">
                            <span className="list-social-title">Share</span>
                            <div>
                              <ul className="list-inline list-social list-inline-sm">
                                <li>
                                  <a
                                    className="icon mdi mdi-facebook"
                                    href="#"
                                  />
                                </li>
                                <li>
                                  <a
                                    className="icon mdi mdi-twitter"
                                    href="#"
                                  />
                                </li>
                                <li>
                                  <a
                                    className="icon mdi mdi-instagram"
                                    href="#"
                                  />
                                </li>
                                <li>
                                  <a
                                    className="icon mdi mdi-google-plus"
                                    href="#"
                                  />
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-12">
                    <h6 className="single-post-title">Related Posts</h6>
                    <div className="row row-30">
                      <div className="col-sm-6">
                        {}
                        <article className="post post-classic box-md post-classic-2">
                          <a
                            className="post-classic-figure"
                            href="blog-post.html"
                          >
                            <img src={i2} alt width={370} height={239} />
                          </a>
                          <div className="post-classic-content">
                            <div className="post-classic-time">
                              <time dateTime="2019-09-08">August 9, 2019</time>
                            </div>
                            <h4 className="post-classic-title">
                              <a href="blog-post.html">
                                The Best Way to Make a Delicious Butter Cake
                              </a>
                            </h4>
                            <p className="post-classic-text">
                              Fluctuis accelerare, tanquam velox compater.
                              Ridetis grauiter ducunt ad festus solitudo. Cum
                              lamia congregabo.
                            </p>
                          </div>
                        </article>
                      </div>
                      <div className="col-sm-6">
                        {}
                        <article className="post post-classic box-md post-classic-2">
                          <a
                            className="post-classic-figure"
                            href="blog-post.html"
                          >
                            <img src={i3} alt width={370} height={239} />
                          </a>
                          <div className="post-classic-content">
                            <div className="post-classic-time">
                              <time dateTime="2019-09-08">August 9, 2019</time>
                            </div>
                            <h4 className="post-classic-title">
                              <a href="blog-post.html">
                                Top 5 Wedding Cake Trends in 2019
                              </a>
                            </h4>
                            <p className="post-classic-text">
                              Sunt poetaes promissio barbatus, albus
                              repressores. Emeritis, teres sagas unus consumere
                              de domesticus, fatalis zelus.
                            </p>
                          </div>
                        </article>
                      </div>
                    </div>
                  </div>
                  <div className="col-12">
                    <h6 className="single-post-title">3 Comments</h6>
                    <div className="box-comment">
                      <div className="unit flex-column flex-sm-row unit-spacing-md">
                        <div className="unit-left">
                          <a className="box-comment-figure" href="#">
                            <img src={i4} alt width={119} height={119} />
                          </a>
                        </div>
                        <div className="unit-body">
                          <div className="group-sm group-justify">
                            <div>
                              <div className="group-xs group-middle">
                                <h5 className="box-comment-author">
                                  <a href="#">Jane Doe</a>
                                </h5>
                                <a className="box-comment-reply" href="#">
                                  Reply
                                </a>
                              </div>
                            </div>
                            <div className="box-comment-time">
                              <time dateTime="2019-08-30">Aug 30, 2019</time>
                            </div>
                          </div>
                          <p className="box-comment-text">
                            Lorem ipsum dolor sit amet, has mutat labores
                            nostrum ei. Duo te blandit erroribus, ut sea ipsum
                            nonumy, mel no ignota accusamus gloriatur. Id has
                            habeo regione, explicari hendrerit reprimique cum
                            te.
                          </p>
                        </div>
                      </div>
                      <div className="box-comment">
                        <div className="unit flex-column flex-sm-row unit-spacing-md">
                          <div className="unit-left">
                            <a className="box-comment-figure" href="#">
                              <img src={i5} alt width={119} height={119} />
                            </a>
                          </div>
                          <div className="unit-body">
                            <div className="group-sm group-justify">
                              <div>
                                <div className="group-xs group-middle">
                                  <h5 className="box-comment-author">
                                    <a href="#">Jessica Brown</a>
                                  </h5>
                                  <a className="box-comment-reply" href="#">
                                    Reply
                                  </a>
                                </div>
                              </div>
                              <div className="box-comment-time">
                                <time dateTime="2019-08-30">Aug 30, 2019</time>
                              </div>
                            </div>
                            <p className="box-comment-text">
                              Lorem ipsum dolor sit amet, has mutat labores
                              nostrum ei. Duo te blandit erroribus, ut sea ipsum
                              nonumy, mel no ignota accusamus
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="box-comment">
                      <div className="unit flex-column flex-sm-row unit-spacing-md">
                        <div className="unit-left">
                          <a className="box-comment-figure" href="#">
                            <img src={i6} alt width={119} height={119} />
                          </a>
                        </div>
                        <div className="unit-body">
                          <div className="group-sm group-justify">
                            <div>
                              <div className="group-xs group-middle">
                                <h5 className="box-comment-author">
                                  <a href="#">Nick Stevens</a>
                                </h5>
                                <a className="box-comment-reply" href="#">
                                  Reply
                                </a>
                              </div>
                            </div>
                            <div className="box-comment-time">
                              <time dateTime="2019-08-30">Aug 30, 2019</time>
                            </div>
                          </div>
                          <p className="box-comment-text">
                            Lorem ipsum dolor sit amet, has mutat labores
                            nostrum ei. Duo te blandit erroribus, ut sea ipsum
                            nonumy, mel no ignota accusamus gloriatur. Id has
                            habeo regione, explicari hendrerit reprimique cum
                            te.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-12">
                    <h6 className="single-post-title">Leave a comment</h6>
                    <form
                      className="rd-form rd-mailform"
                      data-form-output="form-output-global"
                      data-form-type="contact"
                      method="post"
                      action="bat/rd-mailform.php"
                    >
                      <div className="row row-20 row-md-30">
                        <div className="col-sm-6">
                          <div className="form-wrap">
                            <input
                              className="form-input"
                              id="contact-first-name-2"
                              type="text"
                              name="name"
                              data-constraints="@Required"
                            />
                            <label
                              className="form-label"
                              htmlFor="contact-first-name-2"
                            >
                              First Name
                            </label>
                          </div>
                        </div>
                        <div className="col-sm-6">
                          <div className="form-wrap">
                            <input
                              className="form-input"
                              id="contact-last-name-2"
                              type="text"
                              name="name"
                              data-constraints="@Required"
                            />
                            <label
                              className="form-label"
                              htmlFor="contact-last-name-2"
                            >
                              Last Name
                            </label>
                          </div>
                        </div>
                        <div className="col-12">
                          <div className="form-wrap">
                            <label
                              className="form-label"
                              htmlFor="contact-message-2"
                            >
                              Message
                            </label>
                            <textarea
                              className="form-input textarea-lg"
                              id="contact-message-2"
                              name="phone"
                              data-constraints="@Required"
                              defaultValue={""}
                            />
                          </div>
                        </div>
                      </div>
                      <button
                        className="button button-sm button-primary button-zakaria"
                        type="submit"
                      >
                        Submit
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-xl-3">
              <div className="aside row row-30 row-md-50 justify-content-md-between">
                <div className="aside-item col-12">
                  <div className="team-info box-sm">
                    <a className="team-info-figure" href="#">
                      <img src={i7} alt width={123} height={123} />
                    </a>
                    <h6 className="team-info-title">
                      <a href="#">Rebecca Harison</a>
                    </h6>
                    <p className="team-info-text">
                      Sed eleifend, lacus nec bibendum pulvinar
                    </p>
                  </div>
                  {}
                  <form
                    className="rd-search form-search"
                    action="search-results.html"
                    method="GET"
                  >
                    <div className="form-wrap">
                      <label className="form-label" htmlFor="search-form">
                        Search blog...
                      </label>
                      <input
                        className="form-input"
                        id="search-form"
                        type="text"
                        name="s"
                        autoComplete="off"
                      />
                      <button
                        className="button-search fl-bigmug-line-search74"
                        type="submit"
                      />
                    </div>
                  </form>
                </div>
                <div className="aside-item col-sm-6 col-md-5 col-lg-12">
                  <h6 className="aside-title">Categories</h6>
                  <ul className="list-categories">
                    <li>
                      <a href="#">News</a>
                      <span className="list-categories-number">(18)</span>
                    </li>
                    <li>
                      <a href="#">Cakes</a>
                      <span className="list-categories-number">(9)</span>
                    </li>
                    <li>
                      <a href="#">Baking</a>
                      <span className="list-categories-number">(5)</span>
                    </li>
                    <li>
                      <a href="#">Tips</a>
                      <span className="list-categories-number">(8)</span>
                    </li>
                  </ul>
                </div>
                <div className="aside-item col-sm-6 col-lg-12">
                  <h6 className="aside-title">Latest Posts</h6>
                  <div className="row row-20 row-lg-30 gutters-10">
                    <div className="col-6 col-lg-12">
                      {}
                      <article className="post post-minimal">
                        <div className="unit unit-spacing-sm flex-column flex-lg-row align-items-lg-center">
                          <div className="unit-left">
                            <a
                              className="post-minimal-figure"
                              href="blog-post.html"
                            >
                              <img src={i8} alt width={106} height={104} />
                            </a>
                          </div>
                          <div className="unit-body">
                            <p className="post-minimal-title">
                              <a href="blog-post.html">
                                The Best Way to Make a Butter Cake
                              </a>
                            </p>
                            <div className="post-minimal-time">
                              <time dateTime="2019-03-15">March 15, 2019</time>
                            </div>
                          </div>
                        </div>
                      </article>
                    </div>
                    <div className="col-6 col-lg-12">
                      {}
                      <article className="post post-minimal">
                        <div className="unit unit-spacing-sm flex-column flex-lg-row align-items-lg-center">
                          <div className="unit-left">
                            <a
                              className="post-minimal-figure"
                              href="blog-post.html"
                            >
                              <img src={i9} alt width={106} height={104} />
                            </a>
                          </div>
                          <div className="unit-body">
                            <p className="post-minimal-title">
                              <a href="blog-post.html">
                                Top 5 Wedding Cake Trends in 2019
                              </a>
                            </p>
                            <div className="post-minimal-time">
                              <time dateTime="2019-03-15">March 15, 2019</time>
                            </div>
                          </div>
                        </div>
                      </article>
                    </div>
                  </div>
                </div>
                <div className="aside-item col-sm-6 col-md-5 col-lg-12">
                  <h6 className="aside-title">Popular tags</h6>
                  <div className="group-sm group-tags">
                    <a className="link-tag" href="#">
                      News
                    </a>
                    <a className="link-tag" href="#">
                      Bakery
                    </a>
                    <a className="link-tag" href="#">
                      Tips
                    </a>
                    <a className="link-tag" href="#">
                      Cakes
                    </a>
                    <a className="link-tag" href="#">
                      Trends
                    </a>
                    <a className="link-tag" href="#">
                      Pastry
                    </a>
                  </div>
                </div>
                <div className="aside-item col-sm-6 col-lg-12">
                  <h6 className="aside-title">Archives</h6>
                  <ul className="list-marked list-archives d-inline-block d-md-block">
                    <li>
                      <a href="#">March 2019</a>
                    </li>
                    <li>
                      <a href="#">February 2019</a>
                    </li>
                    <li>
                      <a href="#">January 2019</a>
                    </li>
                    <li>
                      <a href="#">December 2019</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default SectionShop;
