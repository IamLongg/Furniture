import React from "react";
import Header from "../components/Header";
import OutstandingProducts from "../components/homepage/OutstandingProducts";
import Footer from "../components/Footer";

const HomePage = ({ match, isShowBg }) => {
  const keyword = match.params.keyword;
  return (
    <div>
      <Header isShowBg={true} />
      <OutstandingProducts keyword={keyword} />
    </div>
  );
};
export default HomePage;
