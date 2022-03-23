import React from "react";
import { PayPalButton } from "react-paypal-button-v2";
import { useSelector } from "react-redux";

const Order = () => {
  const orderCreate = useSelector((state) => state.orderCreate);
  const { order, success, error } = orderCreate;

  const addDecimals = (num) => {
    return (Math.round(num * 100) / 100).toFixed();
  };

  order.itemsPrice = addDecimals(
    order.orderItems.reduce((acc, item) => acc + item.price * item.quantity, 0)
  );
  order.shippingPrice = addDecimals(order.itemsPrice > 1000000 ? 0 : 100000);

  order.totalPrice = (
    Number(order.itemsPrice) + Number(order.shippingPrice)
  ).toFixed();

  return (
    <>
      <div id="shipping" className="shipping">
        <div className="deliver">
          <form className="form">
            <h2>Sea Furniture</h2>
            <h3 className="text">Xác nhận thông tin đơn hàng</h3>
            <div className="list-info">
              <div className="list-info-user">
                <div className="info-user">
                  <i class="fa-solid fa-user"></i>
                  <span>khách hàng</span>
                </div>
                <p>Tên khách hàng: {order.shippingAddress.name}</p>
                <p>Số điện thoại: {order.shippingAddress.phone}</p>
              </div>
              <div className="list-info-user">
                <div className="info-user">
                  <i class="fa-solid fa-location-dot"></i>
                  <span>địa chỉ giao hàng</span>
                </div>
                <p>
                  {order.shippingAddress.address},{" "}
                  {order.shippingAddress.selectedWard.label},{" "}
                  {order.shippingAddress.selectedDistrict.label},{" "}
                  {`Thành phố ${order.shippingAddress.selectedCity.label}`}
                </p>
                <div className="info-status">
                  <p>chưa được giao</p>
                </div>
              </div>
              <div className="list-info-user">
                <div className="info-user">
                  <i class="fa-solid fa-truck-moving"></i>
                  <span>phương thức giao hàng</span>
                </div>
                <p>Thanh toán qua: PayPal</p>
                <div className="info-status">
                  <p>thanh toán vào ngày 20/03/2022</p>
                </div>
              </div>
            </div>
          </form>
        </div>
        <div className="info-payment">
          <div className="max-with">
            {order.orderItems.map((item, index) => (
              <div className="info-product" key={index}>
                <div className="image">
                  <img src={item.image} alt="product" />
                  <span className="count">{item.quantity}</span>
                  <h5 className="name">{item.name}</h5>
                </div>
                <h5 className="price">
                  {new Intl.NumberFormat("vi-VN").format(`${item.price}`)}₫
                </h5>
              </div>
            ))}

            <div className="temporary-price">
              <p>tạm tính</p>
              <p>
                {new Intl.NumberFormat("vi-VN").format(`${order.itemsPrice}`)}₫
              </p>
            </div>
            <div className="temporary-price">
              <p>Phí vận chuyển</p>
              <p>
                {new Intl.NumberFormat("vi-VN").format(
                  `${order.shippingPrice}`
                )}
                ₫
              </p>
            </div>
            <div className="total">
              <h2 className="sumTotal">tổng cộng</h2>
              <h2 className="sumTotal">
                <span>vnd</span>
                {new Intl.NumberFormat("vi-VN").format(`${order.totalPrice}`)}₫
              </h2>
            </div>
            <div className="btn-paypal">
              <PayPalButton amount={345} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Order;
