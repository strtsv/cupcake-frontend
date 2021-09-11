import React from "react";

import i from "../assets/images/bg-blog.jpg";

class Breadcrumbs extends React.Component {
  render() {
    return (
      <section className="breadcrumbs-custom">
        <div
          className="parallax-container"
          data-parallax-img={i}
          style={{
            backgroundImage: "url(" + i + ")",
          }}
        >
          <div className="breadcrumbs-custom-body parallax-content context-dark">
            <div className="container">
              <h1 className="breadcrumbs-custom-title">Blog List</h1>
            </div>
          </div>
        </div>
        <div className="breadcrumbs-custom-footer">
          <div className="container">
            <ul className="breadcrumbs-custom-path">
              <li>
                <a href="index.html">Home</a>
              </li>
              <li>
                <a href="grid-blog.html">Blog</a>
              </li>
              <li className="active">Blog List</li>
            </ul>
          </div>
        </div>
      </section>
    );
  }
}

export default Breadcrumbs;
