import React from "react";
import IconButton from "@material-ui/core/IconButton";
import Badge from "@material-ui/core/Badge";
import "./cartIcon.css";
import { useSelector } from "react-redux";

const CartIcon = () => {
	const shoppingCart = useSelector((state) => state.cartReducer);
	return (
		<div>
			<IconButton aria-label="cart">
				<Badge
					badgeContent={shoppingCart.reduce(
						(acum, item) => acum + Number(item.quantity),
						0
					)}
					color="secondary"
				>
					<i className="text-secondary  fas fa-shopping-cart"></i>
				</Badge>
			</IconButton>
		</div>
	);
};

export default CartIcon;
