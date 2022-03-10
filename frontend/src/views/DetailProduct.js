import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { useEffect, useState } from "react";
import axios from "axios";
import ReactImageMagnify from "react-image-magnify";
import { useDispatch, useSelector } from "react-redux";
import { listProductDetails } from "../Redux/actions/ProductActions";
import { useParams } from "react-router-dom";

const DetailProduct = ({ match }) => {
  window.scrollTo(0, 0);
  const productId = match.params.id;
  const dispatch = useDispatch();
  const productDetails = useSelector((state) => state.productDetails);
  const { loading, error, product } = productDetails;

  useEffect(() => {
    dispatch(listProductDetails(productId));
  }, [dispatch, productId]);

  return (
    <>
      <Header />
      <div id="detailProduct" className="detailProduct">
        <div className="container">
          <div className="detailProduct-main">
            {product && (
              <>
                <div className="detailProduct-main-image">
                  <div className="img">
                    <ReactImageMagnify
                      {...{
                        smallImage: {
                          alt: product.name,
                          isFluidWidth: true,
                          src: product.image,
                        },
                        largeImage: {
                          src: product.imageLarge,
                          width: 600,
                          height: 600,
                        },
                      }}
                    />
                  </div>
                  {/* <img src={product.image} alt={product.name}></img> */}
                </div>
                <div className="detailProduct-main-box">
                  <h2 className="name">{product.name}</h2>
                  <h3 className="price skew">{product.price}</h3>
                  <h5 className="status">tình trạng: {product.status}</h5>
                  <p className="quantity">
                    số lượng
                    <select>
                      <option>1</option>
                      <option>2</option>
                      <option>3</option>
                    </select>
                  </p>
                  <button className="btn">thêm vào giỏ hàng</button>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};
export default DetailProduct;
