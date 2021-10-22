import { Button, Typography } from "ontwik-ui";
import MetamaskIcon from "ui/icons/MetamaskIcon";
import { Content, Wrapper } from "./styles";

type LoginWithMetamaskProps = {
	onLogin: () => Promise<void>;
};

const LoginWithMetamask = ({ onLogin }: LoginWithMetamaskProps) => (
	<Wrapper>
		<Content>
			<Typography variant="title">Connect your wallet</Typography>
			<Button
				title="Sign In with Metamask"
				variant="primary"
				size="large"
				iconPosition="left"
				onClick={onLogin}
				icon={<MetamaskIcon />}
			/>
		</Content>
	</Wrapper>
);

export default LoginWithMetamask;
