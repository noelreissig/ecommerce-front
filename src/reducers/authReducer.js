function authReducer(state = { token: "" }, action) {
	switch (action.type) {
		case "LOGIN_REQUEST":
			return action.payload;

		case "LOGOUT_REQUEST":
			return {
				token: "",
			};

		default:
			return state;
	}
}
export default authReducer;
