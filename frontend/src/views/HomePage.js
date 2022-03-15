import React from "react";
import { useState } from "react";
import Header from "../components/Header";
import OutstandingProducts from "../components/homepage/OutstandingProducts";
import Banner from "../components/homepage/Banner";
import ProductSpecial from "../components/homepage/ProductSpecial";
import Advertise from "../components/homepage/Advertise";
import NewProduct from "../components/homepage/NewProduct";
import News from "../components/homepage/News";
import Footer from "../components/Footer";

const HomePage = ({ match }) => {
  const [isShowBg, setIsShowBg] = useState(true);
  const keyword = match.params.keyword;
  const pagenumber = match.params.pagenumber;
  return (
    <div>
      <Header isShowBg={isShowBg} />
      <OutstandingProducts keyword={keyword} pagenumber={pagenumber} />
      <Banner />
      <ProductSpecial keyword={keyword} pagenumber={pagenumber} />
      <Advertise />
      <NewProduct keyword={keyword} pagenumber={pagenumber} />
      <News />
      <Footer />
    </div>
  );
};
export default HomePage;
