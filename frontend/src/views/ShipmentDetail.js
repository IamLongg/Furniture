import React from "react";
import useLocationForm from "./UseLocationForm";
import Select from "react-select";
import img from "../assets/images/product_1.jpg";
import { Link } from "react-router-dom";

const ShipmentDetail = () => {
  const { state, onCitySelect, onDistrictSelect, onWardSelect, onSubmit } =
    useLocationForm(false);

  const {
    cityOptions,
    districtOptions,
    wardOptions,
    selectedCity,
    selectedDistrict,
    selectedWard,
  } = state;
  return (
    <div id="shipping" className="shipping">
      <div className="deliver">
        <form className="form">
          <h2>Sea Furniture</h2>
          <span className="active">
            Giỏ hàng<i className="fa-solid fa-chevron-right"></i>
          </span>
          <span>
            Thông tin giao hàng<i className="fa-solid fa-chevron-right"></i>
          </span>
          <span>
            Phương thức thanh toán
            <i className="fa-solid fa-chevron-right"></i>
          </span>
          <h3>Thông tin giao hàng</h3>
          <div className="user">
            <div className="image">
              <i class="fa-solid fa-user"></i>
            </div>
            <span>name</span>
            <span>(email)</span>
          </div>
          <div className="form__div">
            <input type="text" className="form__input" placeholder=" " />
            <label for="" className="form__label">
              họ tên
            </label>
          </div>
          <div className="form__div">
            <input type="text" className="form__input" placeholder=" " />
            <label for="" className="form__label">
              số điện thoại
            </label>
          </div>
          <div className="form__div">
            <input type="text" className="form__input" placeholder=" " />
            <label for="" className="form__label">
              địa chỉ
            </label>
          </div>

          <Select
            name="cityId"
            key={`cityId_${selectedCity?.value}`}
            isDisabled={cityOptions.length === 0}
            options={cityOptions}
            onChange={(option) => onCitySelect(option)}
            placeholder="Tỉnh/Thành"
            defaultValue={selectedCity}
          />

          <Select
            name="districtId"
            key={`districtId_${selectedDistrict?.value}`}
            isDisabled={districtOptions.length === 0}
            options={districtOptions}
            onChange={(option) => onDistrictSelect(option)}
            placeholder="Quận/Huyện"
            defaultValue={selectedDistrict}
          />

          <Select
            name="wardId"
            key={`wardId_${selectedWard?.value}`}
            isDisabled={wardOptions.length === 0}
            options={wardOptions}
            placeholder="Phường/Xã"
            onChange={(option) => onWardSelect(option)}
            defaultValue={selectedWard}
          />

          <div className="btn-deliver">
            <Link to="/cart">Giỏ hàng</Link>
            <button type="submit">Tiếp tục đến phương thức thanh toán</button>
          </div>
        </form>
      </div>
      <div className="info-payment">
        <img src={img} alt="product" />
      </div>
    </div>
  );
};
export default ShipmentDetail;
