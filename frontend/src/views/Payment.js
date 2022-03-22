import React from "react";
import { Link } from "react-router-dom";
import img from "../assets/images/product_1.jpg";

const Payment = () => {
  return (
    <>
      <div id="shipping" className="shipping">
        <div className="deliver">
          <form className="form">
            <h2>Sea Furniture</h2>
            <span>
              Giỏ hàng<i className="fa-solid fa-chevron-right"></i>
            </span>
            <span>
              Thông tin giao hàng<i className="fa-solid fa-chevron-right"></i>
            </span>
            <span className="active">
              Phương thức thanh toán
              <i className="fa-solid fa-chevron-right"></i>
            </span>
            <h3>phương thức vận chuyển</h3>

            <div className="radio-container">
              <input
                className="form-check-input"
                type="radio"
                // value={paymentMethod}
                // onChange={(e) => setPaymentMethod(e.target.value)}
              />
              <label className="form-check-label">
                thanh toán qua thẻ ngân hàng
              </label>
            </div>
            <div className="btn-deliver">
              <button type="submit">Tiến hành thanh toán</button>
            </div>
          </form>
        </div>
        <div className="info-payment">
          <div className="max-with">
            <div className="info-product">
              <div className="image">
                <img src={img} alt="product" />
                <span className="count">1</span>
                <h5 className="name">bàn binas</h5>
              </div>
              <h5 className="price">900,000</h5>
            </div>
            <div className="info-product">
              <div className="image">
                <img src={img} alt="product" />
                <span className="count">1</span>
                <h5 className="name">bàn binas</h5>
              </div>
              <h5 className="price">900,000</h5>
            </div>
            <div className="temporary-price">
              <p>tạm tính</p>
              <p>1,360,000</p>
            </div>
            <div className="total">
              <h2 className="sumTotal">tổng cộng</h2>
              <h2 className="sumTotal">
                <span>vnd</span>1,360,000
              </h2>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Payment;
