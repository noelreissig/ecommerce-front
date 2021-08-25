export default function cartReducer(shoppingCart = [], action) {
	switch (action.type) {
		case "ADD_ITEM": {
			const itemFound = shoppingCart.findIndex(
				(item) => item.prod.id === action.payload.item.id
			);
			if (itemFound === -1) {
				return [
					...shoppingCart,
					{ prod: action.payload.item, quantity: action.payload.quantity },
				];
			} else {
				shoppingCart[itemFound].quantity = action.payload.quantity;
				return [...shoppingCart];
			}
		}

		case "REMOVE_ITEM": {
			return shoppingCart.filter((item) => item.prod.id !== action.payload);
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
