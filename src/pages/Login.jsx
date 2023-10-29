import { useState } from "react"
import { useDispatch } from "react-redux"
import { NavLink } from "react-router-dom"
import { loginThunk } from "store/auth/actions"

const Login = () => {
    const dispatch = useDispatch()

    const [formData, setFormData] = useState({
        email: '',
        password: ''
    })

    const hangleChange = ({ target: { name, value } }) => {
        setFormData({ ...formData, [name]: value })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(loginThunk(formData))
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input onChange={hangleChange} value={formData.email} name="email" type="text" />
                <input onChange={hangleChange} value={formData.password} name="password" type="password" />
                <button>Login</button>
            </form>
            <span>Doesn't have account <NavLink to='/registrate'>Registrate</NavLink></span>
        </div>
    )
}

export default Login