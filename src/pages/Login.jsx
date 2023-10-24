import { useState } from "react"
import { NavLink } from "react-router-dom"

const Login = () => {
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    })

    const hangleChange = ({ target: { name, value } }) => {
        setFormData({ ...formData, [name]: value })
    }
    return (
        <div>
            <form>
                <input onChange={hangleChange} value={formData.email} name="email" type="text" />
                <input onChange={hangleChange} value={formData.password} name="password" type="password" />
                <button>Login</button>
            </form>
            <span>Doesn't have account <NavLink to='/registrate'>Registrate</NavLink></span>
        </div>
    )
}

export default Login