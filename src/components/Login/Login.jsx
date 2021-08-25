import React from "react";
import { Button, Offcanvas } from "react-bootstrap";
import { useState } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import loginStyles from "./login.module.css";
import { Link } from "react-router-dom";
import axios from "axios";

function Login({ setLogin, startShow = true, ...props }) {
	const history = useHistory();
	const dispatch = useDispatch();
	const [show, setShow] = useState(startShow);
	const handleClose = () => setShow(false);
	const toggleShow = () => setShow((s) => !s);

	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	const handleSubmit = (e) => {
		e.preventDefault();
		axios({
			method: "post",
			url: "http://localhost:3001/api/tokenuser",
			data: { email, password },
		}).then((response) => {
			dispatch({ type: "LOGIN_REQUEST", payload: response.data.token });
			history.push("/admin");
		});
	};

	return (
		<div>
			<>
				<Button variant="" onClick={toggleShow} className="me-2  text-white">
					Login
				</Button>
				<Offcanvas show={show} onHide={handleClose} {...props}>
					<Offcanvas.Header closeButton className={loginStyles.btnClose}>
						<Offcanvas.Title>
							<h2 className={`${loginStyles.login}`}>Iniciar sesión</h2>
						</Offcanvas.Title>
					</Offcanvas.Header>
					<hr className="mx-4 my-1" />
					<Offcanvas.Body>
						<div
							className={`${loginStyles.loginFormContainer} container shadow rounded`}
						>
							<form
								method="post"
								onSubmit={(e) => {
									handleSubmit(e);
								}}
							>
								<div className="mb-3">
									<label for="email" className=" form-label mb-2">
										E-mail
									</label>
									<input
										type="email"
										className=" form-control"
										id="email"
										name="email"
										placeholder="Ingrese su email"
										onChange={(e) => setEmail(e.target.value)}
										required
									/>
								</div>
								<div className="mb-3">
									<label htmlFor="password" className="form-label mt-2">
										Contraseña
									</label>
									<input
										type="password"
										className="form-control"
										id="password"
										name="password"
										required
										placeholder="Ingrese contraseña"
										value={password}
										onChange={(ev) => setPassword(ev.target.value)}
									/>
								</div>

								<button
									className={`${loginStyles.btnLogin} btn btn-dark mt-2 w-100 rounded-lg `}
								>
									Iniciar sesión
								</button>
								<div className=" pt-4 pb-1 text-center">
									<p>
										Aún no tienes cuenta?
										<Link
											className="ms-2"
											onClick={() => {
												toggleShow();
												setLogin((prev) => !prev);
											}}
										>
											Regístrate
										</Link>
									</p>
								</div>
							</form>
						</div>
					</Offcanvas.Body>
				</Offcanvas>
			</>
		</div>
	);
}
export default Login;

//   return (
//     <div>
//       <div>
//         <div className={`${loginStyles.containerTotalLogin} text-center`}>
//           <h2 className={`${loginStyles.login}`}>
//             Iniciar sesión en <br />
//             Deco - Hack
//           </h2>
//         </div>
//         <div
//           className={`${loginStyles.loginFormContainer} container mt-3 shadow rounded`}
//         >
//           <form method="post">
//             <div className="mb-3">
//               <label htmlFor="username" className="form-label mt-3">
//                 Username
//               </label>
//               <input
//                 type="text"
//                 className="form-control"
//                 id="username"
//                 name="username"
//                 required
//                 placeholder="Ingrese username..."
//                 // value={username}
//                 // onChange={(ev) => setUsername(ev.target.value)}
//               />
//             </div>
//             <div className="mb-3">
//               <label htmlFor="password" className="form-label mt-2">
//                 Contraseña
//               </label>
//               <input
//                 type="password"
//                 className="form-control"
//                 id="password"
//                 name="password"
//                 required
//                 placeholder="Ingrese contraseña"
//                 // value={password}
//                 // onChange={(ev) => setPassword(ev.target.value)}
//               />
//             </div>

//             <button className="btn btn-primary mt-2 mb-2 rounded-lg w-100">
//               Iniciar sesión
//             </button>
//             <div className={`${loginStyles.colorLetter} pt-4 pb-1 text-center`}>
//               <p>
//                 Aún no tienes cuenta?
//                 <Link to="/registro"> Regístrate en Deco-Hack</Link>
//               </p>
//             </div>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// }
