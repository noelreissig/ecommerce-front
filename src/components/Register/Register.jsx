import React from "react";
import { Offcanvas } from "react-bootstrap";
import { useState } from "react";
import registerStyles from "./registerStyles.module.css";
import { Link } from "react-router-dom";
import axios from "axios";
import { useDispatch } from "react-redux";

function Register({ setRegister, show, setShow, setLogin, ...props }) {
	const dispatch = useDispatch();
	const handleClose = () => {
		setShow(false);
		setLogin((prev) => !prev);
		setRegister((prev) => (prev ? !prev : prev));
	};

	const [firstname, setFirstname] = useState("");
	const [lastname, setLastname] = useState("");
	const [address, setAddress] = useState("");
	const [phone, setPhone] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [error, setError] = useState(false);
	async function handleSubmit(e) {
		e.preventDefault();
		try {
			const response = await axios({
				method: "post",
				url: `${process.env.REACT_APP_API_URL}/api/users`,
				data: { firstname, lastname, address, phone, email, password },
			});
			dispatch({ type: "LOGIN_REQUEST", payload: response.data });
			setError(false);
			handleClose();
		} catch (error) {
			setError(true);
		}
	}

	return (
		<div>
			<>
				<Offcanvas show={show} onHide={handleClose} {...props}>
					<Offcanvas.Header closeButton>
						<Offcanvas.Title>
							<h5 className={`${registerStyles.register}`}>Registrarse</h5>
						</Offcanvas.Title>
					</Offcanvas.Header>
					<hr className="mx-4 my-1" />
					<Offcanvas.Body>
						<div>
							<div
								className={`${registerStyles.registerFormContainer} rounded shadow-lg`}
							>
								<form
									method="post"
									onSubmit={(e) => {
										handleSubmit(e);
									}}
									className="p-4"
								>
									<label
										className="form-label mt-2 mb-1"
										htmlFor="firstname"
									>
										Nombre
									</label>
									<input
										className="w-100 form-control rounded"
										type="text"
										name="firstname"
										id="firstname"
										value={firstname}
										onChange={(ev) => setFirstname(ev.target.value)}
										required
									/>
									<label
										className="form-label mt-2 mb-1"
										htmlFor="lastname"
									>
										Apellido
									</label>
									<input
										className="w-100 form-control rounded"
										type="text"
										name="lastname"
										id="lastname"
										value={lastname}
										onChange={(ev) => setLastname(ev.target.value)}
										required
									/>
									<label
										className="form-label mt-2 mb-1"
										htmlFor="address"
									>
										Dirección
									</label>
									<input
										className="w-100 form-control rounded"
										type="text"
										name="address"
										id="address"
										value={address}
										onChange={(ev) => setAddress(ev.target.value)}
										required
									/>
									<label
										className="form-label mt-2 mb-1"
										htmlFor="phone"
									>
										Teléfono
									</label>
									<input
										className="w-100 form-control rounded"
										type="text"
										name="phone"
										id="phone"
										value={phone}
										onChange={(ev) => setPhone(ev.target.value)}
										required
									/>
									<label
										className="form-label mt-2 mb-1"
										htmlFor="email"
									>
										Email
									</label>
									<input
										className="w-100 form-control rounded"
										type="email"
										name="email"
										id="email"
										value={email}
										onChange={(ev) => setEmail(ev.target.value)}
										required
									/>
									{error && (
										<div
											className={`py-2 px-1 my-2 rounded text-danger text-center ${registerStyles.error}`}
										>
											<span className="text-danger  p-2">
												{" "}
												Este email ya se encuentra registrado
											</span>
										</div>
									)}

									<label
										className="form-label mt-2 mb-1"
										htmlFor="password"
									>
										Contraseña
									</label>
									<input
										className="w-100 form-control rounded"
										type="password"
										name="password"
										id="password"
										value={password}
										onChange={(ev) => setPassword(ev.target.value)}
										required
									/>
									<button
										className={`${registerStyles.btnRegister} btn btn-dark mt-4 rounded-lg w-100`}
									>
										Registrarte
									</button>
									<div className=" pt-4 pb-1 text-center">
										<p>
											Ya tienes cuenta?
											<Link
												className="ms-2"
												onClick={() => {
													setLogin((prev) => !prev);
													setRegister((prev) => !prev);
												}}
											>
												Login
											</Link>
										</p>
									</div>
								</form>
							</div>
						</div>
					</Offcanvas.Body>
				</Offcanvas>
			</>
		</div>
	);
}
export default Register;
