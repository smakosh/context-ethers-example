import { DispatchCollections, Collection } from "features/dashboard/types";

export type UserValues = {
	email: string;
	password: string;
	username?: string;
};

type LoginSignupArgs = {
	dispatchCollection: DispatchCollections;
	data: Collection[];
};

export const saveCollections = async ({
	dispatchCollection,
	data,
}: LoginSignupArgs) => {
	try {
		dispatchCollection({
			type: "SAVE_COLLECTIONS",
			payload: data,
		});
	} catch (err) {
		dispatchCollection({
			type: "SET_ERROR",
			payload: "Something went wrong",
		});
	} finally {
		dispatchCollection({
			type: "SET_LOADING",
			payload: false,
		});
	}
};
