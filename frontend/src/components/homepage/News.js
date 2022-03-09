import React from "react";
import news_1 from "../../assets/images/news_1.jpg";
const News = () => {
  return (
    <section id="news" className="news">
      <div className="container">
        <div className="news-main flex-column">
          <div className="heading">
            <h2 className="skew">sản phẩm hot</h2>
          </div>
          <div className="news-main-content">
            <div className="item flex-column">
              <div className="image">
                <img src={news_1} className="img" />
                <div className="infomation">
                  <span className="date">
                    <i className="fa-solid fa-calendar-check"></i> 07/01/2021
                  </span>
                  <span className="user">
                    đăng bởi: <h4>Long Nguyen</h4>
                  </span>
                </div>
              </div>
              <a href="" alt="" className="caption">
                mẹo bảo quản và vệ sinh các đồ nội thất
              </a>
              <p className="description">
                đối với nội thất bằng kim loại-Khi xử lý các vết bẩn thông
                thường, bạn chỉ cần xịt...
              </p>
            </div>
            <div className="item flex-column">
              <div className="image">
                <img src={news_1} className="img" />
                <div className="infomation">
                  <span className="date">
                    <i className="fa-solid fa-calendar-check"></i> 07/01/2021
                  </span>
                  <span className="user">
                    đăng bởi: <h4>Long Nguyen</h4>
                  </span>
                </div>
              </div>
              <a href="" alt="" className="caption">
                mẹo bảo quản và vệ sinh các đồ nội thất
              </a>
              <p className="description">
                đối với nội thất bằng kim loại-Khi xử lý các vết bẩn thông
                thường, bạn chỉ cần xịt...
              </p>
            </div>
            <div className="item flex-column">
              <div className="image">
                <img src={news_1} className="img" />
                <div className="infomation">
                  <span className="date">
                    <i className="fa-solid fa-calendar-check"></i> 07/01/2021
                  </span>
                  <span className="user">
                    đăng bởi: <h4>Long Nguyen</h4>
                  </span>
                </div>
              </div>
              <a href="" alt="" className="caption">
                mẹo bảo quản và vệ sinh các đồ nội thất
              </a>
              <p className="description">
                đối với nội thất bằng kim loại-Khi xử lý các vết bẩn thông
                thường, bạn chỉ cần xịt...
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default News;
