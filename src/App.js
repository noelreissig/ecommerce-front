import { Switch, Route, BrowserRouter } from "react-router-dom";
import "./App.css";
import Home from "./components/pages/Home/Home";
import NoMatch from "./components/NoMatch";
import Contact from "./components/pages/Contact/Contact";
import AboutUs from "./components/pages/AboutUs/AboutUs";
import Category from "./components/pages/Category/Category";
import BuyCompleted from "./components/pages/BuyCompleted/BuyCompleted";
import OneProduct from "./components/pages/OneProduct/OneProduct";
import Cart from "./components/pages/Cart/Cart";
import Buy from "./components/pages/Buy/Buy";
import MyAccount from "./components/pages/MyAccount/MyAccount";
import PrivateRoute from "./components/PrivateRoute";
import ConfirmCard from "./components/pages/BuyCompleted/ConfirmCard";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/contacto" component={Contact} />
          <Route path="/sobre-nosotros" component={AboutUs} />
          <Route path="/carrito" component={Cart} />
          <PrivateRoute path="/mis-datos" component={MyAccount} />
          <PrivateRoute path="/comprar" component={Buy} />
          <PrivateRoute path="/confirmar-tarjeta" component={ConfirmCard} />
          <Route path="/gracias-por-su-compra" component={BuyCompleted} />
          <Route path="/producto/:slug" component={OneProduct} />
          <Route path="/:categories" component={Category} />
          <Route component={NoMatch} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
