import { DispatchUser, UserData } from "features/auth/types";

export type UserValues = {
	email: string;
	password: string;
	username?: string;
};

type LoginArgs = {
	dispatchUser: DispatchUser;
	values: UserData;
	setError: (arg: string) => void;
};

export const login = async ({ dispatchUser, values, setError }: LoginArgs) => {
	try {
		dispatchUser({
			type: "SAVE_USER",
			payload: values,
		});
	} catch (err) {
		setError("Something went wrong");
	}
};
