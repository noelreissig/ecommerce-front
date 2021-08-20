import React from "react";
import { Button, Offcanvas } from "react-bootstrap";
import { useState } from "react";
import loginStyles from "./login.module.css";
import { Link } from "react-router-dom";

function Login({ setLogin, startShow = true, ...props }) {
  const [show, setShow] = useState(startShow);
  const handleClose = () => setShow(false);
  const toggleShow = () => setShow((s) => !s);

  return (
    <div>
      <>
        <Button variant="" onClick={toggleShow} className="me-2  text-white">
          Login
        </Button>
        <Offcanvas show={show} onHide={handleClose} {...props}>
          <Offcanvas.Header closeButton>
            <Offcanvas.Title>
              <h5 className={`${loginStyles.login} text-center`}>
                Iniciar sesión
              </h5>
            </Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <div
              className={`${loginStyles.loginFormContainer} container mt-3 shadow rounded`}
            >
              <form method="post">
                <div className="mb-3">
                  <label htmlFor="username" className="form-label mt-3">
                    Username
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="username"
                    name="username"
                    required
                    placeholder="Ingrese username..."
                    // value={username}
                    // onChange={(ev) => setUsername(ev.target.value)}
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
                    // value={password}
                    // onChange={(ev) => setPassword(ev.target.value)}
                  />
                </div>

                <button className="btn btn-primary mt-2 mb-2 rounded-lg w-100">
                  Iniciar sesión
                </button>
                <div
                  className={`${loginStyles.colorLetter} pt-4 pb-1 text-center`}
                >
                  <p>
                    Aún no tienes cuenta?
                    <Link
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
