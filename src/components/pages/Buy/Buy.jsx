import React from "react";
import { useState } from "react";
import { Button, Form, Row, Col, Accordion } from "react-bootstrap";
import Footer from "../../Footer/Footer";
import NavComponent from "../../Navbar/Navbar";
import { useSelector } from "react-redux";
const Buy = () => {
	const user = useSelector((state) => state.authReducer);
	const [firstname, setFirstname] = useState(user.firstname);
	const [lastname, setLastname] = useState(user.lastname);
	const [address, setAddress] = useState(user.address);
	const departamentos = [
		"Montevideo",
		"Canelones",
		"Maldonado",
		"Artigas",
		"Cerro Largo",
		"Colonia",
		"Durazno",
		"Flores",
		"Florida",
		"Lavalleja",
		"Paysandú",
		"Río Negro",
		"Rivera",
		"Rocha",
		"Salto",
		"San José",
		"Soriano",
		"Tacuarembó",
		"Treinta y Tres",
	];
	return (
		<div>
			<NavComponent />
			<div className="container">
				<h2>Confirma tus datos</h2>
				<Form>
					<Row className="mb-3">
						<Form.Group as={Col} controlId="formGridFirstName">
							<Form.Label>Nombre</Form.Label>
							<Form.Control
								type="text"
								placeholder="Nombre"
								value={firstname}
								onChange={(ev) => setFirstname(ev.target.value)}
							/>
						</Form.Group>

						<Form.Group as={Col} controlId="formGridLastname">
							<Form.Label>Apellido</Form.Label>
							<Form.Control
								type="text"
								placeholder="Apellido"
								value={lastname}
								onChange={(ev) => setLastname(ev.target.value)}
							/>
						</Form.Group>
					</Row>
					<Row className="mb-3">
						<Form.Group
							as={Col}
							className="mb-3"
							controlId="formGridAddress1"
						>
							<Form.Label>Dirección 1</Form.Label>
							<Form.Control placeholder="Calle 1234" />
						</Form.Group>

						<Form.Group
							as={Col}
							className="mb-3"
							controlId="formGridAddress2"
						>
							<Form.Label>Dirección 2 </Form.Label>
							<Form.Control placeholder="Apartmento, Solar, manzana" />
						</Form.Group>
					</Row>
					<Row className="mb-3">
						<Form.Group as={Col} controlId="formGridCity">
							<Form.Label>Ciudad</Form.Label>
							<Form.Control />
						</Form.Group>

						<Form.Group as={Col} controlId="formGridState">
							<Form.Label>Departamento</Form.Label>
							<Form.Select defaultValue="Choose...">
								<option>Elegir...</option>
								{departamentos.map((item) => (
									<option>{item}</option>
								))}
							</Form.Select>
						</Form.Group>

						<Form.Group as={Col} controlId="formGridZip">
							<Form.Label>Codigo Postal</Form.Label>
							<Form.Control />
						</Form.Group>
					</Row>

					<Form.Group className="mb-3" id="formGridCheckbox">
						<Form.Check type="checkbox" label="Check me out" />
					</Form.Group>
				</Form>
			</div>
			<div className="container mb-4">
				<h2>Elige tu forma de pago</h2>
				<form action="">
					<Accordion className="mb-4">
						<Accordion.Item eventKey="0">
							<Accordion.Header>MercadoPago</Accordion.Header>
							<Accordion.Body>
								Lorem ipsum dolor sit amet, consectetur adipiscing elit,
								sed do eiusmod tempor incididunt ut labore et dolore magna
								aliqua. Ut enim ad minim veniam, quis nostrud exercitation
								ullamco laboris nisi ut aliquip ex ea commodo consequat.
								Duis aute irure dolor in reprehenderit in voluptate velit
								esse cillum dolore eu fugiat nulla pariatur. Excepteur
								sint occaecat cupidatat non proident, sunt in culpa qui
								officia deserunt mollit anim id est laborum.
							</Accordion.Body>
						</Accordion.Item>
						<Accordion.Item eventKey="1">
							<Accordion.Header>
								<img
									src="https://www.paypalobjects.com/webstatic/mktg/logo/pp_cc_mark_37x23.jpg"
									border="0"
									alt="PayPal logo"
								></img>{" "}
								Paypal
							</Accordion.Header>
							<Accordion.Body>
								Lorem ipsum dolor sit amet, consectetur adipiscing elit,
								sed do eiusmod tempor incididunt ut labore et dolore magna
								aliqua. Ut enim ad minim veniam, quis nostrud exercitation
								ullamco laboris nisi ut aliquip ex ea commodo consequat.
								Duis aute irure dolor in reprehenderit in voluptate velit
								esse cillum dolore eu fugiat nulla pariatur. Excepteur
								sint occaecat cupidatat non proident, sunt in culpa qui
								officia deserunt mollit anim id est laborum.
							</Accordion.Body>
						</Accordion.Item>
					</Accordion>
					<Button variant="primary" type="submit">
						Submit
					</Button>
				</form>
			</div>
			<Footer />
		</div>
	);
};

export default Buy;
