import { Switch, Route, BrowserRouter } from "react-router-dom";
import "./App.css";
import Home from "./components/pages/Home";
import NoMatch from "./components/NoMatch";
import Contact from "./components/pages/Contact";
import AboutUs from "./components/pages/AboutUs";
import Categories from "./components/pages/Categories";
import OneProduct from "./components/pages/OneProduct";
import Admin from "./components/admin/Admin";
import AdminProductos from "./components/admin/AdminProductos";
import AdminCategorys from "./components/admin/AdminCategorys";
import Cart from "./components/pages/Cart";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/contacto" component={Contact} />
          <Route path="/sobre-nosotros" component={AboutUs} />
          {/* <Route path="/comedor" component={Categories} /> */}
          <Route path="/:categories" component={Categories} />
          <Route path="/producto/mesa-redonda" component={OneProduct} />
          {/* <Route path="/producto/:productName" component={OneProduct} /> */}
          <Route path="/carrito" component={Cart} />
          <Route exact path="/admin" component={Admin} />
          <Route path="/admin/categorias" component={AdminCategorys} />
          <Route path="/admin/productos" component={AdminProductos} />
          <Route component={NoMatch} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
