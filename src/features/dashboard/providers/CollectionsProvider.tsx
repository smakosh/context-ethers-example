import { useReducer, createContext, Reducer } from "react";
import CollectionsReducer, {
	INITIAL_STATE,
} from "features/dashboard/reducers/CollectionsReducer";
import type {
	DispatchCollections,
	CollectionsState,
	CollectionsActions,
} from "features/dashboard/types";

type CollectionsProviderProps = { children: React.ReactNode };

export const CollectionsContext = createContext<CollectionsState | undefined>(
	undefined
);
export const CollectionsDispatchContext = createContext<
	DispatchCollections | undefined
>(undefined);

const CollectionsProvider = ({ children }: CollectionsProviderProps) => {
	const [collections, dispatchCollections] = useReducer<
		Reducer<CollectionsState, CollectionsActions>
	>(CollectionsReducer, INITIAL_STATE);

	return (
		<CollectionsContext.Provider value={collections}>
			<CollectionsDispatchContext.Provider value={dispatchCollections}>
				{children}
			</CollectionsDispatchContext.Provider>
		</CollectionsContext.Provider>
	);
};

export default CollectionsProvider;
