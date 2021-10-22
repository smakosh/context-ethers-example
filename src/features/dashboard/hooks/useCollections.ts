import { useContext } from "react";
import { CollectionsContext } from "features/dashboard/providers/CollectionsProvider";

const useCollections = () => {
	const context = useContext(CollectionsContext);

	if (context === undefined) {
		throw new Error("useCollections must be used within a CollectionsProvider");
	}

	return context;
};

export default useCollections;
