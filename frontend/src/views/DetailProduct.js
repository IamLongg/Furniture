import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { useEffect, useState } from "react";
import axios from "axios";
import ReactImageMagnify from "react-image-magnify";

const DetailProduct = ({ match }) => {
  window.scrollTo(0, 0);

  const [product, setProduct] = useState({});
  useEffect(() => {
    const fetchProducts = async () => {
      const { data } = await axios.get(`/api/products/${match.params.id}`);
      setProduct(data);
    };
    fetchProducts();
  }, [match]);

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
