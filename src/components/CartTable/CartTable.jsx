import React from "react";
import { Table } from "react-bootstrap";
import { useSelector } from "react-redux";
import cartStyles from "./cartTable.module.css";
import { useDispatch } from "react-redux";

export const CartTable = () => {
	const dispatch = useDispatch();
	const shoppingCart = useSelector((state) => state.cartReducer);

	function handleDelete(id) {
		console.log(id);
		console.log({ type: "REMOVE_ITEM", payload: id });
		dispatch({ type: "REMOVE_ITEM", payload: id });
	}
	return (
		<div>
			<div className={`${cartStyles.font} table-responsive-md container`}>
				<Table hover>
					<thead>
						<tr className="text-center">
							<th>#</th>
							<th>Producto Elegido</th>
							<th>Precio Unitario</th>
							<th>Cantidad</th>
							<th>Subtotal</th>
							<th>Eliminar</th>
						</tr>
					</thead>
					<tbody>
						{shoppingCart.map((item) => {
							return (
								<tr className="text-center">
									<td className="text-center align-middle">1</td>
									<td className="text-center align-middle">
										<img
											className={`img-fluid`}
											src={`../img${item.prod.picture_url}`}
											alt="comedor"
										/>
										{console.log(item.prod.picture_url)}
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
			</div>
		</div>
	);
};

export default CartTable;
