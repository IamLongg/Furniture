import React from "react";
import Message from "../LoadingError/Error";
import Loading from "../LoadingError/Loading";
import moment from "moment";

const OrderProfile = ({ loading, error, orders }) => {
  return (
    <>
      <table className="table" id="my-orders-table">
        {loading ? (
          <Loading />
        ) : error ? (
          <Message variant="alert-danger">{error}</Message>
        ) : (
          <>
            {orders.length === 0 ? (
              <>
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
                    <td></td>
                    <td></td>
                    <td>
                      <em>Tạm thời chưa có đơn hàng nào</em>
                    </td>
                    <td></td>
                    <td></td>
                  </tr>
                </tbody>
              </>
            ) : (
              <>
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
                  {orders.map((item, index) => (
                    <tr className="first odd">
                      <td>
                        <a
                          href="/account/orders/d307d90600ef4a8f82e3ab3bd2b2d354"
                          title=""
                          style={{ color: "#36304a" }}
                        >
                          {item._id}
                        </a>
                      </td>
                      <td>{moment(item.createdAt).format("DD/MM/YY")}</td>
                      <td>
                        <span className="price">
                          {new Intl.NumberFormat("vi-VN").format(
                            `${item.totalPrice}`
                          )}
                          ₫
                        </span>
                      </td>
                      <td>
                        <em>
                          {orders.isPaid === true ? (
                            <>Đã Thanh Toán</>
                          ) : (
                            <>Chưa Thanh Toán</>
                          )}
                        </em>
                      </td>
                      <td>
                        <em>Chưa nhận hàng</em>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </>
            )}
          </>
        )}
      </table>
    </>
  );
};
export default OrderProfile;
