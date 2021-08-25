import { Switch, Route, BrowserRouter } from "react-router-dom";
import "./App.css";
import Home from "./components/pages/Home/Home";
import NoMatch from "./components/NoMatch";
import Contact from "./components/pages/Contact/Contact";
import AboutUs from "./components/pages/AboutUs/AboutUs";
import Category from "./components/pages/Category/Category";
import OneProduct from "./components/pages/OneProduct/OneProduct";
import Cart from "./components/pages/Cart/Cart";

function App() {
	return (
		<BrowserRouter>
			<div className="App">
				<Switch>
					<Route exact path="/" component={Home} />
					<Route path="/contacto" component={Contact} />
					<Route path="/sobre-nosotros" component={AboutUs} />
					{/* <Route path="/comedor" component={Categories} /> */}
					<Route path="/carrito" component={Cart} />
					<Route path="/producto/:slug" component={OneProduct} />
					<Route path="/:categories" component={Category} />
					{/* <Route path="/producto/:productName" component={OneProduct} /> */}
					<Route component={NoMatch} />
				</Switch>
			</div>
		</BrowserRouter>
	);
}

export default App;
