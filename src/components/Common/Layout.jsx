import { useDispatch, useSelector } from "react-redux";
import { NavLink, useLocation, Outlet } from "react-router-dom";
import { logoutThunk } from "store/auth/actions";

export const Layout = () => {
    const auth = useSelector(state => state.auth)
    const { pathname } = useLocation()

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
                        !auth.isAuth
                            ? <NavLink
                                to="/login"
                                className={({ isActive }) =>
                                    isActive ? "active" : ""
                                }
                            >
                                Login
                            </NavLink>
                            : <UserInfo email={auth.email} pathname={pathname}  />
                    }


                </nav>
            </header>

            <main>
                <Outlet />
            </main>
        </>
    )
}


const UserInfo = ({ email, pathname }) => {
    const dispatch = useDispatch()
    const handleLogout = () => {
      dispatch(logoutThunk())
    }
    return (
        <div>
            <p>{email}</p>
            <NavLink to={pathname}>
                <button onClick={handleLogout}>
                    Logout
                </button>
            </NavLink>
        </div>
    )
}