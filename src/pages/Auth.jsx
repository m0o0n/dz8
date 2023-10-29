import LoginForm from "components/Forms/Login/LoginForm"
import RegistrateForm from "components/Forms/Registrate/RegistrateForm"
import { NavLink, useLocation } from "react-router-dom"

const Auth = () => {
    const { pathname } = useLocation()
    switch (pathname) {
        case '/login':
            return (
                <div>
                    <LoginForm />
                    <span>Doesn't have account <NavLink to='/registrate'>Registrate</NavLink></span>
                </div>
            )
        case '/registrate': 
            return (
                <div>
                    <RegistrateForm />
                    <span>Aready have account <NavLink to='/login'>Login</NavLink></span>
                </div>
            )
        default: break //or redirect on 404 page
    }

}

export default Auth