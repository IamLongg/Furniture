import React from "react";

const OrderProfile = () => {
  return (
    <>
      <table className="table" id="my-orders-table">
        <thead className="thead-default a-center">
          <tr>
            <th>Đơn hàng</th>
            <th>Ngày</th>
            <th>Giá trị đơn hàng</th>
            <th>Trạng thái thanh toán</th>
            <th>Trạng thái giao hàng</th>
          </tr>
        </thead>

        <tbody>
          <tr className="first odd">
            <td>
              <a
                href="/account/orders/d307d90600ef4a8f82e3ab3bd2b2d354"
                title=""
              >
                #100006
              </a>
            </td>
            <td>13/03/2022</td>
            <td>
              <span className="price">3,050,000₫</span>
            </td>
            <td>
              <em>Thanh toán một phần</em>
            </td>
            <td>
              <em>Chưa giao hàng</em>
            </td>
          </tr>
        </tbody>
      </table>
    </>
  );
};
export default OrderProfile;
