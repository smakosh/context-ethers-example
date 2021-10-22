import { OntwikProvider } from "ontwik-ui";
import UserProvider from "features/auth/providers/UserProvider";
import CollectionsProvider from "features/dashboard/providers/CollectionsProvider";

const AppProviders: React.FC = ({ children }) => (
	<UserProvider>
		<CollectionsProvider>
			<OntwikProvider>{children}</OntwikProvider>
		</CollectionsProvider>
	</UserProvider>
);

export default AppProviders;
