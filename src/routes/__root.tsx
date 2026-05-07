import * as React from 'react'
import { Link, Outlet, createRootRoute } from '@tanstack/react-router'

export const Route = createRootRoute({
    component: RootComponent,
})
const activeProps = {
    style: {
        fontWeight: "bold"
    }
}

function RootComponent() {
    return (
        <>
            <h1>My App</h1>
            <ul>
                <li><Link to="/" activeProps={activeProps}>{({ isActive }) => <>Home {isActive && "~"} </>}</Link></li>
                <li><Link to="/profile" activeProps={activeProps}>{({ isActive }) => <>Profile {isActive && "~"} </>}</Link></li>
            </ul>
            <Outlet />
        </>
    )
}
