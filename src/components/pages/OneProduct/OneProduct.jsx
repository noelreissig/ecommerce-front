import React from "react";
import CarouselOneProduct from "../../CarouselOneProduct/CarouselOneProduct";
import NavComponent from "../../Navbar/Navbar";
import OneProductStyles from "../OneProduct/oneProduct.module.css";
import Footer from "../../Footer/Footer";

import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";

function OneProduct() {
	const { slug } = useParams();
	const [product, setProduct] = useState([]);
	const dispatch = useDispatch();
	const [quantity, setQuantity] = useState(1);
	useEffect(() => {
		const getProduct = async () => {
			const response = await axios.get(
				` http://localhost:3001/api/product/${slug}`
			);
			setProduct(response.data);
		};
		getProduct();
	}, []);
	console.log(product);
	const handleBuy = () =>
		dispatch({
			type: "ADD_ITEM",
			payload: { item: product, quantity: quantity },
		});
	console.log({ payload: { item: product, quantity: quantity } });
	return (
		<div>
			<NavComponent />
			<div className="container pb-5">
				<div className="row gx-0 mt-4">
					<div className="col-md-6 mt-5">
						<CarouselOneProduct product={product} />
					</div>
					{product && (
						<div className="col-md-6 text-start pt-5">
							<h2 className=" d-flex justify-content-between">
								{product.name}
								<i class=" far fa-heart text-danger fs-5"></i>
							</h2>

							<div className="d-flex">
								<h5 className="d-flex"> USD {product.price}</h5>
								<p
									className={`${OneProductStyles.sizeText} fw-light ms-2 mt-1`}
								>
									Financiá tu compra
									<span className="text-success fw-bold">
										{" "}
										sin intereses*
									</span>
								</p>
							</div>

							<p className="fw-light">{product.details}</p>
							<hr />
							<div className="d-flex justify-content-between">
								<p className="fw-light">
									Disponibilidad:
									<span className="text-success fw-bold fw-light">
										{" "}
										En Stock {product.stock}
									</span>
								</p>
							</div>

							<div className="mb-3 d-flex">
								<select
									class="form-select w-25 me-5"
									aria-label="Default select example"
									onChange={(e) => setQuantity(e.target.value)}
								>
									<option value="1" selected>
										1
									</option>
									<option value="2">2</option>
									<option value="3">3</option>
								</select>
								<button
									onClick={() => handleBuy()}
									className="btn btn-dark w-100"
								>
									Añadir al carrito
								</button>
							</div>

							<div className="my-1">
								<p className="fw-bold my-1">Características</p>
								<table class="table table-hover fw-light">
									<thead>
										<tbody>
											<tr>
												<td>
													<strong>Medidas:</strong>
												</td>
												<td className="text-end fw-light">
													Consultar
												</td>
											</tr>
											<tr>
												<td>
													<strong>Tipo:</strong>
												</td>
												<td className="text-end fw-light">
													Doméstico
												</td>
											</tr>
											<tr>
												<td>
													<strong>Estilo:</strong>
												</td>
												<td className="text-end fw-light">
													Contemporáneo
												</td>
											</tr>
											<tr>
												<td>
													<strong>Temporada:</strong>
												</td>
												<td className="text-end fw-light">
													2021-2022
												</td>
											</tr>
										</tbody>
									</thead>
								</table>
							</div>

							<div>
								<p className="fw-bold my-1">Descripción</p>
								<p className={`${OneProductStyles.sizeText} fw-light`}>
									{product.description}
								</p>
								<p className="fw-bold my-1">Garantía</p>
								<p className={`${OneProductStyles.sizeText} fw-light`}>
									2 años
								</p>
								<p className="fw-bold my-1">Métodos y costos de envío</p>
								<p className={`${OneProductStyles.sizeText} fw-light`}>
									A todo Montevideo: Envío sin costo en compras mayores
									a USD 100 A todo el país vía DAC: Costo variable según
									tamaño del paquete. A todo Maldonado vía DePunta:
									Costo variable según tamaño del paquete.
								</p>
							</div>
						</div>
					)}
				</div>
			</div>
			<Footer />
		</div>
	);
}

export default OneProduct;
