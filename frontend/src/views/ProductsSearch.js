import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector, shallowEqual } from "react-redux";
import Header from "../components/Header";
import OutstandingProducts from "../components/homepage/OutstandingProducts";
import { listProduct } from "../Redux/actions/ProductActions";

const ProductsSearch = ({ match, pagenumber }) => {
  const keyword = match.params.keyword;
  const dispatch = useDispatch();

  const products = useSelector(
    (state) => state.productList.products,
    shallowEqual
  );
  useEffect(() => {
    dispatch(listProduct(keyword, pagenumber));
  }, [dispatch, keyword, pagenumber]);

  return (
    <>
      <Header isShowBg={true} />
      <div className="productSearch">
        <div className="container">
          {products ? (
            <>
              <h2>Có {products.length} kết quả tìm kiếm</h2>
              <OutstandingProducts keyword={keyword} />
            </>
          ) : (
            <div></div>
          )}
        </div>
      </div>
      {console.log("rerender")}
    </>
  );
};
export default ProductsSearch;
