import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import img from "../assets/images/product_1.jpg";
const CartProducts = () => {
  return (
    <>
      <Header />
      <div id="cart" className="cart">
        <div className="container">
          <h3>giỏ hàng của bạn</h3>
          <div className="shopping-cart">
            <div className="column-labels">
              <label className="product-image">Hình Ảnh</label>
              <label className="product-details">Sản Phẩm</label>
              <label className="product-price">Giá</label>
              <label className="product-quantity">Số Lượng</label>
              <label className="product-removal">Xóa</label>
              <label className="product-line-price">Thành Tiền</label>
            </div>

            <div className="product">
              <div className="product-image">
                <img src={img} />
              </div>
              <div className="product-details">
                <div className="product-title">Bàn Allien</div>
              </div>
              <div className="product-price">460.000₫</div>
              <div className="product-quantity">
                <select>
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                </select>
              </div>
              <div className="product-removal">
                <button className="remove-product">Xóa</button>
              </div>
              <div className="product-line-price">460.000₫</div>
            </div>

            <div className="totals-item">
              <label>Tổng số thành tiền:</label>
              <div className="totals-value" id="cart-subtotal">
                460.000₫
              </div>
            </div>

            <div className="checkout">
              <button className="btn bgc">tiếp tục mua hàng</button>
              <button className="btn">tiến hành thanh toán</button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};
export default CartProducts;
