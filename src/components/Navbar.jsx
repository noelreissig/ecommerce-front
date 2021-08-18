import { Nav, Navbar, Container, NavDropdown } from "react-bootstrap";
import React from "react";

function NavComponent() {
	return (
		<div>
			<Navbar bg="black" variant="dark" fixed="top" expand="md">
				<Container>
					<Navbar.Brand href="#home">Deco-Hack</Navbar.Brand>
					<Navbar.Toggle aria-controls="basic-navbar-nav" />
					<Navbar.Collapse id="basic-navbar-nav">
						<Nav className="me-auto">
							<Nav.Link href="/">Home</Nav.Link>

							<NavDropdown title="Categorías" id="basic-nav-dropdown">
								<NavDropdown.Item href="/comedor">
									Comedor
								</NavDropdown.Item>
								<NavDropdown.Item href="/living">Living</NavDropdown.Item>
								<NavDropdown.Item href="/dormitorio">
									Dormitorio
								</NavDropdown.Item>
								<NavDropdown.Item href="/jardin">Jardin</NavDropdown.Item>
								<NavDropdown.Item href="/complementos">
									Complementos
								</NavDropdown.Item>
							</NavDropdown>
							<Nav.Link href="aboutus">About Us</Nav.Link>
							<Nav.Link href="aboutus">Contacto</Nav.Link>
						</Nav>
					</Navbar.Collapse>

					<Nav className="d-flex flex-row justify-content-end">
						<Nav.Link href="/cart" className="me-3">
							<i className="text-secondary  fas fa-shopping-cart"></i>
						</Nav.Link>
						<Nav.Link href="aboutus" className="block">
							Username
						</Nav.Link>
					</Nav>
				</Container>
			</Navbar>
		</div>
	);
}

export default NavComponent;
