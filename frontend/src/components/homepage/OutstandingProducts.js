import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Pagination from "./Pagination";
import axios from "axios";

const OutstandingProducts = () => {
  const [products, setProducts] = useState([]);
  const singleProduct = products.slice(0, 1);
  const sliceProduct = products.slice(0, 8);

  useEffect(() => {
    const fetchProducts = async () => {
      const { data } = await axios.get("/api/products");
      setProducts(data);
    };
    fetchProducts();
  }, []);

  return (
    <section id="outstanding_products" className="outstanding_products">
      <div className="container">
        <div className="outstanding_products-main">
          <div className="product-large">
            {singleProduct &&
              singleProduct.length > 0 &&
              singleProduct.map((item) => (
                <>
                  <Link
                    to={`/products/${item.id}`}
                    className="image"
                    key={singleProduct.id}
                  >
                    <img src={item.image} className="img" />
                    <div className="info">
                      <Link to={`/products/${item.id}`} className="iconProduct">
                        <i className="fa-solid fa-eye"></i>
                      </Link>
                      <Link to="/cart" className="iconProduct">
                        <i className="fas fa-dolly"></i>
                      </Link>
                    </div>
                  </Link>
                  <div className="name">
                    <a href="" alt="">
                      {item.name}
                    </a>
                  </div>
                  <div className="price">
                    <h2>{item.price}</h2>
                  </div>
                </>
              ))}
          </div>
          <div className="product-medium flex-column">
            <div className="heading">
              <h2 className="skew">nổi bật nhất</h2>
            </div>
            <div className="content">
              {sliceProduct &&
                sliceProduct.length > 0 &&
                sliceProduct.map((product) => (
                  <Link to={`/products/${product.id}`} className="item">
                    <div className="image">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="img"
                      />
                      <div className="info">
                        <Link
                          to={`/products/${product.id}`}
                          className="iconProduct"
                        >
                          <i className="fa-solid fa-eye"></i>
                        </Link>
                        <Link to="/cart" className="iconProduct">
                          <i className="fas fa-dolly"></i>
                        </Link>
                      </div>
                    </div>
                    <a href="" alt="">
                      {product.name}
                    </a>
                    <p>{product.price}</p>
                  </Link>
                ))}
            </div>
            <Pagination />
          </div>
        </div>
      </div>
    </section>
  );
};
export default OutstandingProducts;
