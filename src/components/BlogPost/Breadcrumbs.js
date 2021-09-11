import React from "react";

class Breadcrumbs extends React.Component {
  render() {
    return (
      <section className="breadcrumbs-custom">
        <div
          className="parallax-container"
          data-parallax-img="images/bg-blog.jpg"
        >
          <div className="breadcrumbs-custom-body parallax-content context-dark">
            <div className="container">
              <h1 className="breadcrumbs-custom-title">Blog Post</h1>
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
              <li className="active">Blog Post</li>
            </ul>
          </div>
        </div>
      </section>
    );
  }
}

export default Breadcrumbs;
