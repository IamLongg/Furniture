import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import img from "../assets/images/product_1.jpg";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, removeProduct } from "../Redux/actions/cartActions";

const CartProducts = ({ match, location, history }) => {
  window.scrollTo(0, 0);
  const productId = match.params.id;
  const quantity = location.search ? Number(location.search.split("=")[1]) : 1;

  const dispatch = useDispatch();

  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;
  console.log(cartItems);

  const total = cartItems
    .reduce((a, i) => a + i.quantity * i.price, 0)
    .toFixed(2);
  console.log(total);
  useEffect(() => {
    if (productId) {
      dispatch(addToCart(productId, quantity));
    }
  }, [dispatch, productId, quantity]);

  const handleCheckOut = () => {
    history.pushState("/login?redirect=shipping");
  };

  const handleRemoveProduct = (id) => {
    dispatch(removeProduct(id));
  };
  return (
    <>
      <Header />
      <div id="cart" className="cart">
        <div className="container">
          <h3>giỏ hàng của bạn</h3>
          {cartItems.length === 0 ? (
            <div className="cart-empty">
              <h5>
                Không có sản phẩm nào trong giỏ hàng. Quay lại cửa hàng để tiếp
                tục mua sắm
              </h5>
            </div>
          ) : (
            <>
              <div className="shopping-cart">
                <div className="column-labels">
                  <label className="product-image">Hình Ảnh</label>
                  <label className="product-details">Sản Phẩm</label>
                  <label className="product-price">Giá</label>
                  <label className="product-quantity">Số Lượng</label>
                  <label className="product-removal">Xóa</label>
                  <label className="product-line-price">Thành Tiền</label>
                </div>
                {cartItems.map((item) => {
                  return (
                    <div className="product">
                      <div className="product-image">
                        <img src={item.image} />
                      </div>
                      <div className="product-details">
                        <div className="product-title">
                          <Link to={`/products/${item.product}`}>
                            {item.name}
                          </Link>
                        </div>
                      </div>
                      <div className="product-price">{item.price}</div>
                      <div className="product-quantity">
                        <select
                          value={item.quantity}
                          onChange={(e) =>
                            dispatch(
                              addToCart(item.product, Number(e.target.value))
                            )
                          }
                        >
                          {[...Array(item.countInStock).keys()].map((p) => (
                            <option key={p + 1} value={p + 1}>
                              {p + 1}
                            </option>
                          ))}
                        </select>
                      </div>
                      <div className="product-removal">
                        <button
                          onClick={() => handleRemoveProduct(item.product)}
                          className="remove-product"
                        >
                          Xóa
                        </button>
                      </div>
                      <div className="product-line-price">{item.price}</div>
                    </div>
                  );
                })}

                <div className="totals-item">
                  <label>Tổng số thành tiền:</label>
                  <div className="totals-value" id="cart-subtotal">
                    {total}
                  </div>
                </div>

                <div className="checkout">
                  <Link to="/">
                    <button className="btn bgc">tiếp tục mua hàng</button>
                  </Link>
                  {total > 0 && (
                    <button className="btn" onClick={handleCheckOut}>
                      tiến hành thanh toán
                    </button>
                  )}
                </div>
              </div>
            </>
          )}
        </div>
      </div>
      <Footer />
    </>
  );
};
export default CartProducts;
