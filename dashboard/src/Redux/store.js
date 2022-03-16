// import { createStore, combineReducers, applyMiddleware } from "redux";
// import thunk from "redux-thunk";
// import { composeWithDevTools } from "redux-devtools-extension";
// import {
//   productListReducer,
//   productDetailsReducer,
// } from "./reducers/ProductReducer.js";

// import { cartReducer } from "./reducers/CartReducers";
// import {
//   userDetailsProfileReducer,
//   userLoginReducer,
//   userRegisterReducer,
//   userUpdateProfileReducer,
// } from "./reducers/UserReducers.js";

// const reducer = combineReducers({
//   productList: productListReducer,
//   productDetails: productDetailsReducer,
//   cart: cartReducer,
//   userLogin: userLoginReducer,
//   userRegister: userRegisterReducer,
//   userDetailsProfile: userDetailsProfileReducer,
//   userUpdateProfile: userUpdateProfileReducer,
// });

// const cartItemsFromLocalStorage = localStorage.getItem("cartItems")
//   ? JSON.parse(localStorage.getItem("cartItems"))
//   : [];

// //login
// const userInfoFromLocalStorage = localStorage.getItem("userInfo")
//   ? JSON.parse(localStorage.getItem("userInfo"))
//   : null;

// const initialState = {
//   cart: {
//     cartItems: cartItemsFromLocalStorage,
//   },
//   userLogin: {
//     userInfo: userInfoFromLocalStorage,
//   },
// };

// const middleware = [thunk];

// const store = createStore(
//   reducer,
//   initialState,
//   composeWithDevTools(applyMiddleware(...middleware))
// );
// export default store;

import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { userLoginReducer } from "./reducers/UserReducers";

const reducer = combineReducers({
  userLogin: userLoginReducer,
});

//login
const userInfoFromLocalStorage = localStorage.getItem("userInfo")
  ? JSON.parse(localStorage.getItem("userInfo"))
  : null;

const initialState = {
  userLogin: {
    userInfo: userInfoFromLocalStorage,
  },
};

const middleware = [thunk];

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);
export default store;