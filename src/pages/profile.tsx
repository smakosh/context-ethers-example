import { Typography } from "ontwik-ui";
import useUser from "features/auth/hooks/useUser";

const Profile = () => {
	const user = useUser();

	return (
		<div>
			<Typography variant="title">User Address</Typography>
			<Typography variant="subtitle">{user?.data?.shortAddress}</Typography>
		</div>
	);
};

export default Profile;
