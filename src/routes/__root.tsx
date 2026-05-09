import {
	createRootRouteWithContext,
	Link,
	Outlet,
} from "@tanstack/react-router";
import type { AuthContext } from "../hooks/useAuth";

type RouterContext = {
	authentication: AuthContext;
};

export const Route = createRootRouteWithContext<RouterContext>()({
	component: RootComponent,
	loader: ({ context }) => ({
		authenticated: context.authentication.isLogged(),
	}),
});
const activeProps = {
	style: {
		fontWeight: "bold",
	},
};

function RootComponent() {
	return (
		<>
			<h1>My App</h1>
			<ul>
				<li>
					<Link to="/" activeProps={activeProps}>
						{({ isActive }) => <> {isActive && "📍"} Home</>}
					</Link>
				</li>
				<li>
					<Link to="/profile" activeProps={activeProps}>
						{({ isActive }) => <> {isActive && "📍"} Profile</>}
					</Link>
				</li>
				<li>
					<Link to="/login" activeProps={activeProps}>
						{({ isActive }) => <> {isActive && "📍"} Login</>}
					</Link>
				</li>
				<li>
					<Link to="/dashboard" activeProps={activeProps}>
						{({ isActive }) => <> {isActive && "📍"} Dashboard</>}
					</Link>
				</li>
				<li>
					<Link to="/settings" activeProps={activeProps}>
						{({ isActive }) => <> {isActive && "📍"} Settings</>}
					</Link>
				</li>
				<li>
					<Link to="/pokemon" activeProps={activeProps}>
						{({ isActive }) => <> {isActive && "📍"} Pokemons</>}
					</Link>
				</li>
				<li>
					<Link
						to="/search"
						activeProps={activeProps}
						search={{
							query: "laptop",
							hasDiscount: true,
							categories: ["electronics", "home"],
						}}
					>
						{({ isActive }) => <>Search {isActive && "~"} </>}
					</Link>
				</li>
			</ul>
			<Outlet />
		</>
	);
}
