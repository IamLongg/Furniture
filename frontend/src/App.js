import "./styles/App.scss";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import HomePage from "./views/HomePage";
import Login from "./views/Login";
import Register from "./views/Register";
import Profile from "./views/Profile";
import NotFound from "./views/NotFound";
import DetailProduct from "./views/DetailProduct";
import CartProducts from "./views/CartProducts";
import ProductsSearch from "./views/ProductsSearch";
import ShipmentDetail from "./views/ShipmentDetail";
import Payment from "./views/Payment";
import Order from "./views/Order";

function App() {
  return (
    <>
      <div className="App">
        <Router>
          <Switch>
            <Route path="/" component={HomePage} exact />
            <Route path="/page/:pagenumber" component={HomePage} exact />
            <Route path="/search/:keyword" component={ProductsSearch} exact />
            <Route
              path="/search/:keyword/page/:pageNumber"
              component={ProductsSearch}
              exact
            />
            <Route path="/products/:id" component={DetailProduct} />
            <Route path="/login" component={Login} />
            <Route path="/register" component={Register} />
            <Route path="/profile" component={Profile} />
            <Route path="/cart/:id?" component={CartProducts} />
            <Route path="/shipping" component={ShipmentDetail} />
            <Route path="/payment" component={Payment} />
            <Route path="/order/:id" component={Order} />
            <Route path="*" component={NotFound} />
          </Switch>
        </Router>
      </div>
    </>
  );
}

export default App;
