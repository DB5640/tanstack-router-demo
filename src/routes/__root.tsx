import { createRootRoute, Link, Outlet } from "@tanstack/react-router";

export const Route = createRootRoute({
    component: RootComponent,
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
                        {({ isActive }) => <>Home {isActive && "~"} </>}
                    </Link>
                </li>
                <li>
                    <Link to="/profile" activeProps={activeProps}>
                        {({ isActive }) => <>Profile {isActive && "~"} </>}
                    </Link>
                </li>
                <li>
                    <Link to="/pokemon" activeProps={activeProps}>
                        {({ isActive }) => <>Pokemons {isActive && "~"} </>}
                    </Link>
                </li>
                <li>
                    <Link to="/search" activeProps={activeProps} search={{
                        query: "laptop",
                        hasDiscount: true,
                        categories: ["electronics", "home"]
                    }}>
                        {({ isActive }) => <>Search {isActive && "~"} </>}
                    </Link>
                </li>
            </ul>
            <Outlet />
        </>
    );
}
