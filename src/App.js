import { Switch, Route, BrowserRouter } from "react-router-dom";
import "./App.css";
import Home from "./components/pages/Home";
import NoMatch from "./components/NoMatch";
import Contact from "./components/pages/Contact";
import AboutUs from "./components/pages/AboutUs";
import Categories from "./components/pages/Categories";
import OneProduct from "./components/pages/OneProduct";
import Admin from "./components/admin/Admin";
import Login from "./components/Login";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/login" component={Login} />
          <Route path="/contact" component={Contact} />
          <Route path="/aboutus" component={AboutUs} />
          <Route path="/comedor" component={Categories} />
          {/* <Route path="/:categories" component={Categories} /> */}
          <Route path="/producto/mesa-redonda" component={OneProduct} />
          {/* <Route path="/producto/:productName" component={OneProduct} /> */}
          <Route path="/admin" component={Admin} />
          <Route component={NoMatch} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
