export default function cartReducer(shoppingCart = [], action) {
	switch (action.type) {
		case "ADD_ITEM": {
			const itemFound = shoppingCart.findIndex(
				(item) => item.id === action.payload.product.id
			);
			if (itemFound) {
				shoppingCart[itemFound].quantity = action.payload.quantity;
				return [...shoppingCart];
			} else {
				return [...shoppingCart, action.payload.product];
			}
		}
		case "UPDATE_ITEM": {
			return shoppingCart;
		}
		case "REMOVE_ITEM": {
			const itemFound = shoppingCart.findIndex(
				(item) => item.id === action.payload.product.id
			);
			if (itemFound) {
				shoppingCart[itemFound].quantity = action.payload.quantity;
				return [...shoppingCart];
			} else {
				return [
					shoppingCart.filter((item) => item.id !== action.payload.product.id),
				];
			}
		}
		case "CLEAR_CART": {
			return {
				shoppingCart: [],
			};
		}

		default:
			return shoppingCart;
	}
}
