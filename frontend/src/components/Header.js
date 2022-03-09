import React from "react";
import logo from "../assets/images/logo.png";
import "../styles/App.scss";
import { NavLink } from "react-router-dom";
import { Link, useHistory } from "react-router-dom";
const Header = (props) => {
  const { isShowBg } = props;
  return (
    <>
      {isShowBg === true && <div className="background"></div>}
      <section id="header" className="header">
        <div className="container boxShadow">
          <div className="header-main flex-center">
            <NavLink to="/" exact className="logo">
              <img src={logo} alt="" />
            </NavLink>
            <div className="search">
              <input type="text" placeholder="Nhập từ khóa tìm kiếm" />
              <button className="search-icon">
                <i className="fa-solid fa-magnifying-glass"></i>
              </button>
            </div>
            <div className="auth">
              <div className="register">
                <Link to="/register">đăng ký</Link>
              </div>
              <div className="login">
                <Link to="/login">đăng nhập</Link>
              </div>
              <div className="cart">
                <Link to="/cart">
                  <i className="fas fa-dolly">
                    <span className="cart-count">0</span>
                  </i>
                </Link>
              </div>
            </div>
          </div>
          <div className="header-content flex-center">
            <div className="categories">
              <button className="btn">
                <i className="fa-solid fa-bars"></i>
                danh mục sản phẩm
              </button>
            </div>
            <ul className="navbar flex-center">
              <li className="navbar-item">
                <NavLink to="/" exact className="links">
                  trang chủ
                </NavLink>
              </li>
              <li className="navbar-item">
                <a href="#" className="links">
                  giới thiệu
                </a>
              </li>
              <li className="navbar-item">
                <a href="#" className="links">
                  sản phẩm
                </a>
              </li>
              <li className="navbar-item">
                <a href="#" className="links">
                  tin tức
                </a>
              </li>
              <li className="navbar-item">
                <a href="#" className="links">
                  liên hệ
                </a>
              </li>
            </ul>
            <div className="hotline">
              <i className="fa-solid fa-headphones"></i>
              <span>
                hotline:<a href="tel:0912117494">0912117494</a>
              </span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default Header;
