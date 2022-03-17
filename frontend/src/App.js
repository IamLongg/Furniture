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
import Loading from "./components/LoadingError/Loading";
import ShipmentDetail from "./views/ShipmentDetail";
import { useState, useEffect } from "react";
function App() {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 4000);
  }, [isLoading]);
  return (
    <>
      {isLoading == true ? (
        <Loading />
      ) : (
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
              <Route path="*" component={NotFound} />
            </Switch>
          </Router>
        </div>
      )}
    </>
  );
}

export default App;
