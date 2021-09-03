import React from "react";
import { Offcanvas } from "react-bootstrap";
import { useState } from "react";
import { useDispatch } from "react-redux";
import loginStyles from "./login.module.css";
import { Link } from "react-router-dom";
import axios from "axios";

function Login({ setLogin, show, setShow, startShow = true, ...props }) {
  const dispatch = useDispatch();
  const handleClose = () => setShow(false);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    axios({
      method: "post",
      url: `${process.env.REACT_APP_API_URL}/api/tokenuser`,
      data: { email, password },
    }).then((response) => {
      dispatch({ type: "LOGIN_REQUEST", payload: response.data });
      handleClose();
    });
  };

  return (
    <div>
      <>
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
