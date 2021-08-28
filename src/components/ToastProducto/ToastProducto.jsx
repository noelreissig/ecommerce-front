import React from "react";
import { Toast, Row, Col, ToastContainer } from "react-bootstrap";
const ToastProducto = ({ show, setShow }) => {
	return (
		<div className="">
			<ToastContainer position="top-center" className="mt-5">
				<Toast
					onClose={() => setShow(false)}
					show={show}
					delay={3000}
					bg="success"
					autohide
				>
					<Toast.Body className=" text-light text-center">
						Producto añadido al Carrito!
					</Toast.Body>
				</Toast>
			</ToastContainer>
		</div>
	);
};

export default ToastProducto;
