import { Typography } from "ontwik-ui";
import { useRouter } from "next/router";
import useUser from "features/auth/hooks/useUser";
import useCollections from "features/dashboard/hooks/useCollections";
import useDispatchCollections from "features/dashboard/hooks/useDispatchCollections";
import useFetchCollections from "features/dashboard/hooks/useFetchCollections";

const Collections = () => {
	const router = useRouter();
	const user = useUser();
	const collections = useCollections();
	const dipatchCollections = useDispatchCollections();
	const { data, error, isLoading } = useFetchCollections(
		collections,
		dipatchCollections,
		user?.data?.address
	);

	if (isLoading) {
		return <div>Loading...</div>;
	}

	if (!user?.data?.address) {
		router.push("/");
		return null;
	}

	if (error) {
		return <pre>{JSON.stringify(error, undefined, 2)}</pre>;
	}

	return (
		<div>
			{data?.map(({ name, image_url }) => (
				<div key={name}>
					<Typography variant="title">{name}</Typography>
					<img src={image_url} alt={name} />
				</div>
			))}
		</div>
	);
};

export default Collections;
