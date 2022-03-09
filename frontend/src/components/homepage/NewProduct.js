import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";

const NewProduct = () => {
  const [products, setProducts] = useState([]);
  const productHot = products.slice(5, 10);

  useEffect(() => {
    const fetchProducts = async () => {
      const { data } = await axios.get("/api/products");
      setProducts(data);
    };
    fetchProducts();
  }, []);
  return (
    <section id="newProducts" className="newProducts">
      <div className="container">
        <div className="newProducts-main flex-column">
          <div className="heading">
            <h2 className="skew">sản phẩm mới về</h2>
          </div>
          <div className="content">
            {productHot &&
              productHot.length > 0 &&
              productHot.map((product) => (
                <Link to={`/products/${product.id}`} className="item">
                  <div className="image">
                    <img src={product.image} className="img" />
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
        </div>
      </div>
    </section>
  );
};
export default NewProduct;
