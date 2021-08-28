import React from "react";
import { Table } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import cartStyles from "./cartTable.module.css";

export const CartTable = () => {
	const dispatch = useDispatch();
	const shoppingCart = useSelector((state) => state.cartReducer);

	function handleDelete(id) {
		console.log(id);
		console.log({ type: "REMOVE_ITEM", payload: id });
		dispatch({ type: "REMOVE_ITEM", payload: id });
	}
	const emptyCart = () => dispatch({ type: "CLEAR_CART" });
	return (
		<div>
			{shoppingCart.length > 0 ? (
				<div className={`${cartStyles.font} table-responsive-md container`}>
					<Table hover>
						<thead>
							<tr>
								<th className="text-start">Producto</th>
								<th className="d-none d-md-table-cell text-center">
									Img
								</th>
								<th className="text-center">Precio</th>
								<th className="text-center">Cant.</th>
								<th className="text-center">Sub-total</th>
								<th></th>
							</tr>
						</thead>
						<tbody>
							{shoppingCart.map((item) => {
								return (
									<tr className="text-start">
										<td className="text-start align-middle text-start">
											{item.prod.name}
										</td>
										<td className="text-start align-middle d-none d-md-table-cell text-center">
											<img
												className={`img-fluid`}
												src={`${process.env.REACT_APP_SUPABASE_URL_IMG}/${item.prod.picture_url}`}
												alt={item.prod.name}
											/>
											{console.log(item.prod.name)}
										</td>
										<td className="text-center align-middle">
											{item.prod.price}
										</td>
										<td className="text-center align-middle">
											{item.quantity}
										</td>
										<td className="text-center align-middle">
											{item.prod.price * item.quantity}
										</td>
										<td className="text-center align-middle">
											<i
												onClick={() => handleDelete(item.prod.id)}
												class="far fa-trash-alt"
											></i>
										</td>
									</tr>
								);
							})}
						</tbody>
					</Table>
					<button
						onClick={() => emptyCart()}
						className="btn btn-outline-secondary rounded-pill px-4 mt-5  fs-10"
					>
						Vaciar Carrito
					</button>
				</div>
			) : (
				<h4 className="p-3 text-secondary">No tienes productos en el Carrito</h4>
			)}
		</div>
	);
};

export default CartTable;
