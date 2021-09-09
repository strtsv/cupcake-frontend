import React from "react";

import Header from "../components/Header";
import Breadcrumbs from "../components/Breadcrumbs";
import SectionShop from "../components/BlogList/SectionShop";
import CustomLine from "../components/CustomLine";
import Footer from "../components/Footer";

const BlogList = () => {
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

export default BlogList;
