import { Nav, Navbar, Container, NavDropdown } from "react-bootstrap";
import React from "react";
import { Link } from "react-router-dom";

function NavComponent() {
	return (
		<div>
			<Navbar bg="light" expand="lg">
				<Container>
					<Navbar.Brand href="#home">Deco-Hack</Navbar.Brand>
					<Navbar.Toggle aria-controls="basic-navbar-nav" />
					<Navbar.Collapse id="basic-navbar-nav">
						<Nav className="me-auto">
							<Nav.Link to="home">Home</Nav.Link>
							<Nav.Link to="aboutus">About Us</Nav.Link>
							<NavDropdown title="Categorías" id="basic-nav-dropdown">
								<NavDropdown.Item to="comedor">Comedor</NavDropdown.Item>
								<NavDropdown.Item to="living">Living</NavDropdown.Item>
								<NavDropdown.Item to="dormitorio">
									Dormitorio
								</NavDropdown.Item>
								<NavDropdown.Item to="jardin">Jardin</NavDropdown.Item>
								<NavDropdown.Item to="complementos">
									Complementos
								</NavDropdown.Item>
								<NavDropdown.Divider />
								<NavDropdown.Item href="#action/3.4">
									Separated link
								</NavDropdown.Item>
							</NavDropdown>
						</Nav>
					</Navbar.Collapse>
				</Container>
			</Navbar>
		</div>
	);
}

export default NavComponent;
