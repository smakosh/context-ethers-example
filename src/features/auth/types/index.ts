export type UserData = {
	address: string;
	network: string;
	shortAddress: string | null | undefined;
};

export interface UserState {
	isLoggedIn: boolean;
	isLoading: boolean;
	data: UserData | null;
}

export type UserActions =
	| { type: "SAVE_USER"; payload: UserData }
	| { type: "LOGOUT" }
	| { type: "SET_LOADING"; payload: boolean };

export type DispatchUser = (action: UserActions) => void;
