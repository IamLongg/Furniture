import "./styles/App.scss";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import HomePage from "./views/HomePage";
import Login from "./views/Login";
import Register from "./views/Register";
import NotFound from "./views/NotFound";
import DetailProduct from "./views/DetailProduct";
import CartProducts from "./views/CartProducts";
function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/" component={HomePage} exact />
          <Route path="/products/:id" component={DetailProduct} />
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
          <Route path="/cart/:id?" component={CartProducts} />
          <Route path="*" component={NotFound} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
