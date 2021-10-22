import { useReducer, createContext, Reducer } from "react";
import UserReducer, { INITIAL_STATE } from "features/auth/reducers/UserReducer";
import type { DispatchUser, UserState, UserActions } from "features/auth/types";

type UserProviderProps = { children: React.ReactNode };

export const UserContext = createContext<UserState | undefined>(undefined);
export const UserDispatchContext = createContext<DispatchUser | undefined>(
	undefined
);

const UserProvider = ({ children }: UserProviderProps) => {
	const [user, dispatchUser] = useReducer<Reducer<UserState, UserActions>>(
		UserReducer,
		INITIAL_STATE
	);

	return (
		<UserContext.Provider value={user}>
			<UserDispatchContext.Provider value={dispatchUser}>
				{children}
			</UserDispatchContext.Provider>
		</UserContext.Provider>
	);
};

export default UserProvider;
