import { useContext } from "react";
import { CollectionsDispatchContext } from "features/dashboard/providers/CollectionsProvider";

const useDispatchCollections = () => {
	const context = useContext(CollectionsDispatchContext);

	if (context === undefined) {
		throw new Error(
			"useDispatchCollections must be used within a CollectionsProvider"
		);
	}

	return context;
};

export default useDispatchCollections;
