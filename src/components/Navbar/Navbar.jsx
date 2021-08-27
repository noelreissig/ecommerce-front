import { Nav, Navbar, Container, NavDropdown, Button } from "react-bootstrap";
import { useState, useEffect } from "react";
import React from "react";
import Login from "../Login/Login";
import Register from "../Register/Register";
import axios from "axios";
import CartIcon from "../CartIcon/CartIcon";
import { useSelector, useDispatch } from "react-redux";

function NavComponent() {
	const user = useSelector((state) => state.authReducer);
	const dispatch = useDispatch();
	const [login, setLogin] = useState(true);
	const [register, setRegister] = useState(false);
	const [categories, setCategories] = useState([]);
	useEffect(() => {
		const getCategories = async () => {
			const response = await axios({
				method: "get",
				url: `http://localhost:3001/api/category`,
			});
			setCategories(response.data);
		};
		getCategories();
	}, []);

	const handleLogout = () => dispatch({ type: "LOGOUT_REQUEST" });

	return (
		<div style={{ paddingBottom: "10px" }}>
			<Navbar bg="black" variant="dark" fixed="top" expand="md">
				<Container>
					<Navbar.Toggle aria-controls="basic-navbar-nav" />
					<Navbar.Brand href="/">Deco-Hack</Navbar.Brand>

					<Navbar.Collapse id="basic-navbar-nav">
						<Nav className="me-auto">
							<NavDropdown title="Categorías" id="basic-nav-dropdown">
								{categories.map((category) => (
									<NavDropdown.Item
										href={`/${category.name}`}
										key={category.name}
									>
										{category.name}
									</NavDropdown.Item>
								))}
							</NavDropdown>
							<Nav.Link href="sobre-nosotros">Nosotros</Nav.Link>
							<Nav.Link href="contacto">Contacto</Nav.Link>
						</Nav>
					</Navbar.Collapse>

					<Nav className="d-flex flex-row justify-content-end ">
						<Nav.Link href="/carrito" className="me-4 pb-0 pt-1">
							<CartIcon />
						</Nav.Link>
						<Nav href="/login" className="block ">
							{!user.token ? (
								login ? (
									<Login
										placement={"end"}
										setLogin={setLogin}
										startShow={register}
									/>
								) : (
									<Register
										placement={"end"}
										setLogin={setLogin}
										setRegister={setRegister}
									/>
								)
							) : (
								<div>
									<span className="text-light align-text-top me-2">
										Hola {user.firstname}
									</span>
									<Button
										variant="outline-secondary "
										className="ms-2 "
										size="sm"
										onClick={() => handleLogout()}
									>
										Logout
									</Button>
								</div>
							)}
						</Nav>
					</Nav>
				</Container>
			</Navbar>
		</div>
	);
}

export default NavComponent;
