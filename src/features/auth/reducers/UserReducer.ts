import { UserState, UserActions } from "features/auth/types";

export const INITIAL_STATE: UserState = {
	isLoggedIn: false,
	isLoading: true,
	data: null,
};

const UserReducer = (
	user: typeof INITIAL_STATE,
	action: UserActions
): UserState => {
	switch (action.type) {
		case "SAVE_USER":
			return {
				...user,
				data: action.payload,
				isLoggedIn: true,
			};
		case "LOGOUT":
			return {
				...user,
				data: null,
				isLoggedIn: false,
			};
		case "SET_LOADING":
			return {
				...user,
				isLoading: action.payload,
			};
		default:
			throw new Error();
	}
};

export default UserReducer;
