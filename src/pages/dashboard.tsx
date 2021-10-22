import Link from "next/link";
import { Typography } from "ontwik-ui";
import Collections from "features/dashboard/modules/Collections";

const Dashboard = () => (
	<div>
		<Link href="/">
			<a>Go back</a>
		</Link>
		<Typography variant="title">Dashboard</Typography>
		<Collections />
	</div>
);

export default Dashboard;
