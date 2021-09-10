import React from "react";

import Header from "../components/Header";
import Breadcrumbs from "../components/Breadcrumbs";
import SectionShop from "../components/BlogPost/SectionShop";
import CustomLine from "../components/CustomLine";
import Footer from "../components/Footer";

const BlogPost = () => {
  return (
    <div className="page animated">
      <Header />
      <Breadcrumbs />
      <SectionShop />
      <CustomLine />
      <Footer />
    </div>
  );
};

export default BlogPost;
