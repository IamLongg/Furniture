import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
const Login = (props) => {
  const { isShowBg } = props;
  console.log(isShowBg);
  return (
    <>
      <Header isShowBg={false} />
      <section id="login" className="login">
        <div className="container">
          <div className="box">
            <h2>tài khoản</h2>
            <p>nếu chưa có tài khoản vui lòng đăng ký trước khi đăng nhập</p>
            <div className="box-email">
              <h5>email</h5>
              <input type="text" placeholder="Email" />
            </div>
            <div className="box-pass">
              <h5>mật khẩu</h5>
              <input type="password" placeholder="Mật Khẩu" />
            </div>
            <button className="btn">đăng nhập</button>
            <div className="notify">
              <span>
                Chưa có tài khoản: <Link to="/register">đăng ký</Link>
              </span>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};
export default Login;
