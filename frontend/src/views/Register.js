import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
const Register = (props) => {
  const { isShowBg } = props;
  console.log(isShowBg);
  return (
    <>
      <Header isShowBg={false} />
      <section id="register" className="register">
        <div className="container">
          <div className="box">
            <h2>đăng ký tài khoản</h2>
            <div className="box-user">
              <h5>họ tên</h5>
              <input type="text" placeholder="Họ tên" />
            </div>
            <div className="box-email">
              <h5>email</h5>
              <input type="text" placeholder="Email" />
            </div>
            <div className="box-pass">
              <h5>mật khẩu</h5>
              <input type="password" placeholder="Mật Khẩu" />
            </div>
            <button className="btn">đăng ký</button>
            <div className="notify">
              <span>
                Nếu đã có tài khoản trở về: <Link to="/login">đăng nhập</Link>
              </span>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};
export default Register;
