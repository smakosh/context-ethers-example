import { CollectionsState, CollectionsActions } from "features/dashboard/types";

export const INITIAL_STATE: CollectionsState = {
	isLoading: true,
	error: null,
	data: null,
};

const CollectionsReducer = (
	collections: typeof INITIAL_STATE,
	action: CollectionsActions
): CollectionsState => {
	switch (action.type) {
		case "SAVE_COLLECTIONS":
			return {
				...collections,
				data: action.payload,
			};
		case "SET_ERROR":
			return {
				...collections,
				error: action.payload,
			};
		case "SET_LOADING":
			return {
				...collections,
				isLoading: action.payload,
			};
		default:
			throw new Error();
	}
};

export default CollectionsReducer;
