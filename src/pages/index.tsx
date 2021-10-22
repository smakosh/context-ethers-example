import { useEffect, useState } from "react";
import Link from "next/link";
import { Button, Typography } from "ontwik-ui";
import { ethers } from "ethers";
import getNetwork from "helpers/getNetwork";
import getShortAddress from "helpers/getShortAddress";
import { login } from "features/auth/actions";
import useUser from "features/auth/hooks/useUser";
import useDispatchUser from "features/auth/hooks/useDispatchUser";
import LoginWithMetamask from "features/auth/modules/LoginWithMetamask";

const Home = () => {
	const user = useUser();
	const dispatchUser = useDispatchUser();
	const [error, setError] = useState<string | null>(null);

	const requestAccount = async () => {
		if ((window as any).ethereum) {
			const provider = new ethers.providers.Web3Provider(
				(window as any).ethereum,
				"any"
			);
			const { chainId } = await provider.getNetwork();
			await provider.send("eth_requestAccounts", []);
			const signer = provider.getSigner();
			const address = await signer.getAddress();
			login({
				dispatchUser,
				setError,
				values: {
					address,
					shortAddress: getShortAddress(address),
					network: getNetwork(chainId),
				},
			});
		} else {
			setError("Please Install MetaMask");
		}
	};

	useEffect(() => {
		requestAccount();
	}, []);

	const handleDisconnect = () => {
		dispatchUser({
			type: "LOGOUT",
		});
	};

	if (error) {
		return <pre>{JSON.stringify(error, undefined, 2)}</pre>;
	}

	return (
		<div>
			{!user.data?.address ? (
				<LoginWithMetamask onLogin={requestAccount} />
			) : (
				<div>
					<div>
						<div>
							<Link href="/profile">
								<a>Go to profile</a>
							</Link>
						</div>
						<div>
							<Link href="/dashboard">
								<a>Go to dashboard</a>
							</Link>
						</div>
					</div>
					<div>
						<Typography variant="subtitle">Network</Typography>
						<Typography variant="content">{user.data?.network}</Typography>
					</div>
					<div>
						<Typography variant="subtitle">Address</Typography>
						<Typography variant="content">{user.data?.address}</Typography>
					</div>
					<Button
						title="Disconnect"
						variant="secondary"
						size="medium"
						onClick={() => handleDisconnect()}
					/>
				</div>
			)}
		</div>
	);
};

export default Home;
