import { useEffect, useCallback } from "react";
import {
	DispatchCollections,
	CollectionsState,
} from "features/dashboard/types";
import { saveCollections } from "features/dashboard/actions";

const useFetchCollections = (
	collections: CollectionsState,
	dispatch: DispatchCollections,
	address: string | undefined | null
) => {
	const fetchCollections = useCallback(
		async (address: string) => {
			dispatch({ type: "SET_LOADING", payload: true });

			const res = await fetch(
				`https://api.opensea.io/api/v1/collections?asset_owner=${address}&offset=0&limit=20`
			);
			const data = await res.json();

			await saveCollections({
				data,
				dispatchCollection: dispatch,
			});
		},
		[dispatch]
	);

	useEffect(() => {
		if (address && !collections.data) {
			fetchCollections(address);
		}
	}, [fetchCollections, address]);

	return { ...collections };
};

export default useFetchCollections;
