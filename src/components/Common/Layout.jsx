import { useSelector } from "react-redux";
import { NavLink, useLocation, Outlet } from "react-router-dom";

export const Layout = () => {
    const auth = useSelector(state => state)
    const {pathname} = useLocation()

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
                        to="/users"
                        className={({ isActive }) =>
                            isActive ? "active" : ""
                        }
                    >
                        Users
                    </NavLink>


                    {
                        !auth
                            ? <NavLink
                                to="/login"
                                className={({ isActive }) =>
                                    isActive ? "active" : ""
                                }
                            >
                                Login
                            </NavLink>
                            : <NavLink
                                to={pathname}
                            >
                                Logout
                            </NavLink>
                    }


                </nav>
            </header>

            <main>
                <Outlet />
            </main>
        </>
    )
}