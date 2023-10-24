import { NavLink } from "react-router-dom";

export const Layout = () => {
    return (
        <>
            <header>
                <nav>
                    <NavLink
                        to="/"
                        className={({ isActive }) =>
                            isActive ? "active" : ""
                        }
                    >
                        Home
                    </NavLink>
                    <NavLink
                        to="/"
                        className={({ isActive }) =>
                            isActive ? "active" : ""
                        }
                    >
                        Users
                    </NavLink>
                    
                </nav>
            </header>
        </>
    )
}