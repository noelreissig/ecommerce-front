import React from "react";
import { Button, Offcanvas } from "react-bootstrap";
import { useState } from "react";
import registerStyles from "./registerStyles.module.css";
import { Link } from "react-router-dom";

function Register({ setRegister, setLogin, ...props }) {
  const [show, setShow] = useState(true);
  const handleClose = () => {
    setShow(false);
    setLogin((prev) => !prev);
    setRegister((prev) => (prev ? !prev : prev));
  };
  const toggleShow = () => setShow((s) => !s);

  return (
    <div>
      <>
        <Button variant="" onClick={toggleShow} className="me-2  text-white">
          Registro
        </Button>
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
                <form className="p-4">
                  <label className="form-label mt-2 mb-1" htmlFor="firstname">
                    Nombre
                  </label>
                  <input
                    className="w-100 form-control rounded"
                    type="text"
                    name="firstname"
                    id="firstname"
                    // value={firstname}
                    // onChange={(ev) => setFirstname(ev.target.value)}
                    required
                  />
                  <label className="form-label mt-2 mb-1" htmlFor="lastname">
                    Apellido
                  </label>
                  <input
                    className="w-100 form-control rounded"
                    type="text"
                    name="lastname"
                    id="lastname"
                    // value={lastname}
                    // onChange={(ev) => setLastname(ev.target.value)}
                    required
                  />
                  <label className="form-label mt-2 mb-1" htmlFor="email">
                    Email
                  </label>
                  <input
                    className="w-100 form-control rounded"
                    type="email"
                    name="email"
                    id="email"
                    // value={email}
                    // onChange={(ev) => setEmail(ev.target.value)}
                    required
                  />
                  <label className="form-label mt-2 mb-1" htmlFor="username">
                    Username
                  </label>
                  <input
                    className="w-100 form-control rounded"
                    type="username"
                    name="username"
                    id="username"
                    // value={username}
                    // onChange={(ev) => setUsername(ev.target.value)}
                    required
                  />
                  <label className="form-label mt-2 mb-1" htmlFor="password">
                    Contraseña
                  </label>
                  <input
                    className="w-100 form-control rounded"
                    type="password"
                    name="password"
                    id="password"
                    // value={password}
                    // onChange={(ev) => setPassword(ev.target.value)}
                    required
                  />
                  <button
                    className={`${registerStyles.btnRegister} btn btn-dark mt-4 rounded-lg w-100`}
                  >
                    Registrarte
                  </button>
                  <Link
                    onClick={() => {
                      toggleShow();
                      setLogin((prev) => !prev);
                      setRegister((prev) => !prev);
                    }}
                  >
                    Login
                  </Link>
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
